import Email from "@mui/icons-material/Email";
import GitHub from "@mui/icons-material/GitHub";
import LinkedIn from "@mui/icons-material/LinkedIn";
import X from "@mui/icons-material/X";

import AvatarImage from "@/public/avatar.webp";
import FaviconImage from "@/public/favicon.ico";

export const site = {
  name: "luasis",
  description: "luasis is a personal blog and portfolio site.",
  logo: FaviconImage,
  baseurl: "http://localhost:3000",
};

export const author = {
  name: "luasenvy",
  email: "luas.envy@gmail.com",
  link: `${site.baseurl}/projects`,
  avatar: AvatarImage,
};

export const nav = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Careers",
    href: "/careers",
  },
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "Projects",
    href: "/projects",
  },
];

export const social = [
  {
    name: "Email",
    icon: Email,
    text: author.email,
    href: `mailto:${author.email}`,
  },
  {
    name: "Github",
    icon: GitHub,
    text: "luasenvy",
    href: "https://github.com/luasenvy/nextjs-astro-sphere",
  },
  {
    name: "LinkedIn",
    icon: LinkedIn,
    text: "luasenvy",
    href: "https://www.linkedin.com/in/luasenvy/",
  },
  {
    name: "Twitter",
    icon: X,
    text: "luasenvy",
    href: "https://x.com/luasenvy",
  },
];

export const stack = [
  {
    text: "Astro",
    icon: "astro",
    href: "https://astro.build",
  },
  {
    text: "Javascript",
    icon: "javascript",
    href: "https://www.javascript.com",
  },
  {
    text: "Typescript",
    icon: "typescript",
    href: "https://www.typescriptlang.org",
  },
  {
    text: "Tailwind",
    icon: "tailwind",
    href: "https://tailwindcss.com",
  },
];
