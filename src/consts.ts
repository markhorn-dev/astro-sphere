import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "Near The Oak",
  DESCRIPTION: "Welcome to 'Near The Oak' Richard Noake's personal blog and web space.",
  AUTHOR: "Richard Noake",
}

// Work Page
export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION: "Places I have worked (a few at least!).",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Writing on topics I am passionate about.",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "A kaleidoscope of projects past and present.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
}

// Links
export const LINKS: Links = [
  { 
    TEXT: "Home", 
    HREF: "/", 
  },
  { 
    TEXT: "Work", 
    HREF: "/work", 
  },
  { 
    TEXT: "Blog", 
    HREF: "/blog", 
  },
  { 
    TEXT: "Projects", 
    HREF: "/projects", 
  },
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "noake.richard@gmail.com",
    HREF: "mailto:noake.richard@gmail.com",
  },
  { 
    NAME: "Github",
    ICON: "github",
    TEXT: "Graywraith",
    HREF: "https://github.com/Graywraith"
  },
  { 
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "Fossil-Oak",
    HREF: "https://www.linkedin.com/in/fossiloak/",
  },
  { 
    NAME: "Twitter",
    ICON: "twitter-x",
    TEXT: "Fossil-Oak",
    HREF: "https://x.com/FossilOak"
  },
]

