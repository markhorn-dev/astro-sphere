import "@/styles/global.css";

import { site } from "@/config";

export const metadata = {
  title: site.name,
  description: site.description,
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en">{children}</html>;
}
