import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://kaffy.thecloudforge.app"),
  title: {
    default: "Kafayat Faniran | Cloud Security Engineer",
    template: "%s | Kafayat Faniran",
  },
  description:
    "Cloud Security Engineer and founder working across IAM, security monitoring, incident response, Zero Trust, cloud governance and secure technology products across AWS, Azure and Google Cloud.",
  openGraph: {
    title: "Kafayat ‘Kaffy’ Faniran | Cloud Security Engineer",
    description:
      "Cloud security engineering, secure product development and practical cybersecurity education.",
    url: "https://kaffy.thecloudforge.app",
    siteName: "Kafayat Faniran",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB">
      <body>{children}</body>
    </html>
  );
}
