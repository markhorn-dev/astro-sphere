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

export const welcome = {
  caption: `Hello, I am ...`,
  title: `Next.js Astro Sphere`,
  subtitle: `Currently designing products for humans.`,
  primaryLink: {
    name: "Read my blog",
    href: "/blog",
  },
  secondaryLink: {
    name: "View my careers",
    href: "/careers",
  },
  introduce: `Hello! I’m a software programmer who enjoys creating efficient and user-friendly software. Skilled in both front-end and back-end development, I love turning ideas into practical, useful applications. By working with various technologies, I ensure flexible and precise outcomes.

I focus on designing software that prioritizes performance and security, while also ensuring a smooth user experience. I enjoy collaborating with teams and actively participating in every stage of development, from planning to coding, testing, and deployment, often working in agile environments.

I’m always eager to learn new technologies and take on challenges, staying up-to-date with the latest trends and tools in the fast-evolving development world. My goal is to create solutions that truly help people, leveraging my technical expertise to make a meaningful impact.`,
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
