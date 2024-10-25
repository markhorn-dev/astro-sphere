import type { SvgIconComponent } from "@mui/icons-material";
import Email from "@mui/icons-material/Email";
import GitHub from "@mui/icons-material/GitHub";
import LinkedIn from "@mui/icons-material/LinkedIn";
import X from "@mui/icons-material/X";

export const logo = {
  light: process.env.NEXT_PUBLIC_LOGO_LIGHT,
  dark: process.env.NEXT_PUBLIC_LOGO_DARK,
};

export const site = {
  name: process.env.NEXT_PUBLIC_SITE_TITLE,
  description: process.env.NEXT_PUBLIC_SITE_DESCRIPTION,
  baseurl: process.env.NEXT_PUBLIC_SITE_BASEURL,
};

export const welcome = {
  caption: process.env.NEXT_PUBLIC_WELCOME_CAPTION,
  title: process.env.NEXT_PUBLIC_WELCOME_TITLE,
  subtitle: process.env.NEXT_PUBLIC_WELCOME_SUBTITLE,
  primaryLinkText: process.env.NEXT_PUBLIC_WELCOME_PRIMARY_TEXT,
  secondaryLinkText: process.env.NEXT_PUBLIC_WELCOME_SECONDARY_TEXT,
  introduce: process.env.NEXT_PUBLIC_WELCOME_INTRODUCE,
};

export const author = {
  name: process.env.NEXT_PUBLIC_AUTHOR_NAME,
  email: process.env.NEXT_PUBLIC_AUTHOR_EMAIL,
  link: process.env.NEXT_PUBLIC_AUTHOR_LINK,
  avatar: process.env.NEXT_PUBLIC_AUTHOR_AVATAR,
};

export const nav = [
  {
    name: process.env.NEXT_PUBLIC_NAV_HOME_TEXT,
    href: "/",
  },
  {
    name: process.env.NEXT_PUBLIC_NAV_CAREERS_TEXT,
    href: "/careers",
  },
  {
    name: process.env.NEXT_PUBLIC_NAV_BLOG_TEXT,
    href: "/posts",
  },
  {
    name: process.env.NEXT_PUBLIC_NAV_PROJECTS_TEXT,
    href: "/projects",
  },
];

interface Social {
  name: string;
  icon: SvgIconComponent;
  text: string;
  href: string;
}

export const social: Array<Social> = [];

if (process.env.NEXT_PUBLIC_AUTHOR_EMAIL?.length) {
  social.push({
    name: "Email",
    icon: Email,
    text: process.env.NEXT_PUBLIC_AUTHOR_EMAIL,
    href: `mailto:${process.env.NEXT_PUBLIC_AUTHOR_EMAIL}`,
  });
}

if (process.env.NEXT_PUBLIC_SOCIAL_GITHUB?.length) {
  const [text, ...href] = process.env.NEXT_PUBLIC_SOCIAL_GITHUB.split(":");
  social.push({ name: "Github", icon: GitHub, text, href: href.join(":") });
}

if (process.env.NEXT_PUBLIC_SOCIAL_LINKEDIN?.length) {
  const [text, ...href] = process.env.NEXT_PUBLIC_SOCIAL_LINKEDIN.split(":");
  social.push({ name: "LinkedIn", icon: LinkedIn, text, href: href.join(":") });
}

if (process.env.NEXT_PUBLIC_SOCIAL_X?.length) {
  const [text, ...href] = process.env.NEXT_PUBLIC_SOCIAL_X.split(":");
  social.push({ name: "X", icon: X, text, href: href.join(":") });
}

export const stack = process.env.NEXT_PUBLIC_STACKS?.split(";").map((stack) => {
  const [text, ...href] = stack.split(":");
  return { text, href: href.join(":") };
});

export const pagination = {
  pageSize: Number(process.env.NEXT_PUBLIC_PGN_SIZE ?? "10"),
};
