import AvatarImage from "@/public/avatar.webp";
import FaviconImage from "@/public/favicon.ico";

export const site = {
  name: "luasis",
  descipriotn: "luasis is a personal blog and portfolio site.",
  logo: FaviconImage,
  baseurl: "http://localhost:3000",
};

export const author = {
  name: "luasenvy",
  email: "luas.envy@gmail.com",
  link: `${site.baseurl}/projects`,
  avatar: AvatarImage,
};
