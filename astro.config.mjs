import { defineConfig } from "astro/config"
import mdx from "@astrojs/mdx"
import sitemap from "@astrojs/sitemap"
import tailwind from "@astrojs/tailwind"
import solidJs from "@astrojs/solid-js"

import { transformerMetaHighlight } from '@shikijs/transformers';

// https://astro.build/config
export default defineConfig({
  site: "https://astro-sphere-demo.vercel.app",
  integrations: [mdx(), sitemap(), solidJs(), tailwind({ applyBaseStyles: false })],
  markdown: {
    shikiConfig: {
      transformers: [{
        pre(hast) {
          hast.properties['data-meta'] = this.options.meta?.__raw;
          // Somewhere along the line, the properties are getting encoded in a
          // way which does not preserve whitespace. See CodeSnippet.astro
          hast.properties['data-code'] = JSON.stringify(this.source);
        },
      },
    transformerMetaHighlight()],
      themes: {
        light: "github-light",
        dark: "dark-plus",
      }
    }
  }
});