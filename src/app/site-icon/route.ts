import { kaffyPortrait } from "@/lib/portrait";

export const dynamic = "force-static";

export async function GET() {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <rect width="64" height="64" rx="14" fill="#07111f"/>
      <defs>
        <clipPath id="portrait-clip">
          <circle cx="32" cy="32" r="28"/>
        </clipPath>
      </defs>
      <image
        href="${kaffyPortrait}"
        x="-8"
        y="-2"
        width="80"
        height="80"
        preserveAspectRatio="xMidYMin slice"
        clip-path="url(#portrait-clip)"
      />
      <circle cx="32" cy="32" r="28" fill="none" stroke="#42d6ca" stroke-width="2"/>
    </svg>`;

  return new Response(svg, {
    headers: {
      "Content-Type": "image/svg+xml; charset=utf-8",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
