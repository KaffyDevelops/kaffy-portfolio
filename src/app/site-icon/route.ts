import { kaffyPortrait } from "@/lib/portrait";

export const dynamic = "force-static";

export async function GET() {
  const base64 = kaffyPortrait.split(",")[1];
  const bytes = Buffer.from(base64, "base64");

  return new Response(bytes, {
    headers: {
      "Content-Type": "image/webp",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
