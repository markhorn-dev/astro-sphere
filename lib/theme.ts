export function getTheme() {
  const userTheme = localStorage.theme;

  if (userTheme === "light" || userTheme === "dark") return userTheme;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
export function setTheme(theme: "light" | "dark") {
  localStorage.theme = theme;
}
