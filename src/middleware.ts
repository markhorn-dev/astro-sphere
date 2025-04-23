import { defineMiddleware } from 'astro:middleware'

export const onRequest = defineMiddleware(async (context, next) => {
  context.locals.$id = (() => {
    // The map to store how many times each prefix has been used in this request.
    const map = new Map<string, number>()
    return (prefix: string) => {
      const count = (map.get(prefix) ?? 0) + 1
      map.set(prefix, count)
      return `${prefix}-${count}`
    }
  })()

  return await next()
})