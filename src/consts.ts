import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "Ryan Souza",
  DESCRIPTION: "Blog pessoal de Ryan Souza",
  AUTHOR: "Ryan Souza",
}

// Work Page
export const WORK: Page = {
  TITLE: "Trabalho",
  DESCRIPTION: "Por onde já passei e o que já fiz.",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "O que ando pensando e aprendendo.",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Projetos",
  DESCRIPTION: "Alguns projetos que já fiz.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Busca",
  DESCRIPTION: "Busque todos as publicações e projetos por palavra-chave.",
}

// Links
export const LINKS: Links = [
  { 
    TEXT: "Inicio", 
    HREF: "/", 
  },
  { 
    TEXT: "Trabalho", 
    HREF: "/work", 
  },
  { 
    TEXT: "Blog", 
    HREF: "/blog", 
  },
  { 
    TEXT: "Projetos", 
    HREF: "/projects", 
  },
  {
    TEXT: "CV ↗",
    HREF: "https://drive.google.com/file/d/19pqHEiFgfk3KVx_rZrWjyfyNAXi1a0jI/view?usp=sharing",
    EXTERNAL: true,
  },
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "ryanssteles@gmail.com",
    HREF: "mailto:ryanssteles@gmail.com",
  },
  { 
    NAME: "Github",
    ICON: "github",
    TEXT: "ryrden",
    HREF: "https://github.com/ryrden"
  },
  { 
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "ryan25",
    HREF: "https://www.linkedin.com/in/ryan25/",
  },
]

