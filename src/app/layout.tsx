import type { Metadata } from "next";
import "./globals.css";
import "./polish.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://kaffy.thecloudforge.app"),
  title: {
    default: "Kafayat Faniran | Cloud Security & IAM Engineer, Founder, Author",
    template: "%s | Kafayat Faniran",
  },
  description:
    "Kafayat ‘Kaffy’ Faniran is a Cloud Security and IAM Engineer, founder of The Cloud Forge, author of Think Like a Cloud Security Engineer, and creator of HUMAN FIREWALL.",
  alternates: { canonical: "/" },
  icons: {
    icon: "/site-icon",
    shortcut: "/site-icon",
    apple: "/site-icon",
  },
  openGraph: {
    title: "Kafayat ‘Kaffy’ Faniran | Cloud Security & IAM Engineer",
    description:
      "Cloud security, IAM engineering, hands-on founder products, technical education and cybersecurity writing.",
    url: "https://kaffy.thecloudforge.app",
    siteName: "Kafayat Faniran",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const personStructuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Kafayat Faniran",
  alternateName: "Kaffy Faniran",
  url: "https://kaffy.thecloudforge.app",
  jobTitle: "Cloud Security and IAM Engineer",
  description:
    "Cloud Security and IAM Engineer, founder of The Cloud Forge, author of Think Like a Cloud Security Engineer, and cybersecurity educator.",
  sameAs: [
    "https://github.com/KaffyDevelops",
    "https://www.linkedin.com/in/kafayatfaniran",
    "https://www.thecloudforge.app",
    "https://www.cloudbeginners.info",
    "https://thekaffycyberconsulting.com",
  ],
  knowsAbout: [
    "Cloud Security",
    "Identity and Access Management",
    "Microsoft Entra ID",
    "Privileged Identity Management",
    "Conditional Access",
    "Access Reviews",
    "Azure RBAC",
    "Microsoft Graph PowerShell",
    "Workload Identities",
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
