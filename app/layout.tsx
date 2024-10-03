import "@/styles/global.css";

import { SITE } from "@/lib/config";

export const metadata = {
  title: SITE.TITLE,
  description: SITE.DESCRIPTION,
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en">{children}</html>;
}
