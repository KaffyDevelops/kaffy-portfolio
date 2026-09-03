import type { Metadata } from "next";
import "./globals.css";
import "./polish.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://kaffy.thecloudforge.app"),
  title: {
    default: "Kafayat Faniran | Cloud Security Engineer",
    template: "%s | Kafayat Faniran",
  },
  description:
    "Cloud Security Engineer and founder working across IAM, security monitoring, incident response, Zero Trust, cloud governance and secure technology products across AWS, Azure and Google Cloud.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Kafayat ‘Kaffy’ Faniran | Cloud Security Engineer",
    description:
      "Cloud security engineering, secure product development and practical cybersecurity education.",
    url: "https://kaffy.thecloudforge.app",
    siteName: "Kafayat Faniran",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const personStructuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Kafayat Faniran",
  alternateName: "Kaffy Faniran",
  url: "https://kaffy.thecloudforge.app",
  jobTitle: "Cloud Security Engineer",
  sameAs: [
    "https://github.com/KaffyDevelops",
    "https://www.linkedin.com/in/kafayatfaniran",
    "https://www.thecloudforge.app",
  ],
  knowsAbout: [
    "Cloud Security",
    "Identity and Access Management",
    "Microsoft Azure",
    "Amazon Web Services",
    "Google Cloud",
    "Microsoft Sentinel",
    "Incident Response",
    "Zero Trust",
    "Cloud Governance",
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personStructuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
