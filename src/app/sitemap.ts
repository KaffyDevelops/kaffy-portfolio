import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://kaffy.thecloudforge.app";

  return [
    { url: base, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/work/azure-soc-lab`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/work/enterprise-iam-transformation`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/work/aws-cloud-security-engineering`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/work/detection-as-code`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/work/cloud-forge-security`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/work/secure-portfolio`, changeFrequency: "monthly", priority: 0.9 },
  ];
}
