import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const origin = new URL(request.url).origin;

        const pages = [
          { path: "/", priority: "1.0", changefreq: "weekly" },
          { path: "/about", priority: "0.8", changefreq: "monthly" },
          { path: "/characters", priority: "0.8", changefreq: "monthly" },
          { path: "/stories", priority: "0.9", changefreq: "weekly" },
          { path: "/stories/the-accident-wasnt-his-fault", priority: "0.9", changefreq: "weekly" },
          { path: "/faq", priority: "0.8", changefreq: "weekly" },
          { path: "/recommend", priority: "0.8", changefreq: "weekly" },
          { path: "/recommend/potty-training", priority: "1.0", changefreq: "weekly" },
          { path: "/blog", priority: "0.8", changefreq: "weekly" },
          { path: "/blog/why-puppy-accidents-arent-his-fault", priority: "0.9", changefreq: "weekly" },
          { path: "/blog/five-potty-training-mistakes", priority: "0.9", changefreq: "weekly" },
          { path: "/blog/how-to-read-puppy-signals", priority: "0.9", changefreq: "weekly" },
          { path: "/links", priority: "0.6", changefreq: "monthly" },
          { path: "/disclosure", priority: "0.3", changefreq: "yearly" },
          { path: "/privacy", priority: "0.3", changefreq: "yearly" },
          { path: "/contact", priority: "0.5", changefreq: "yearly" },
        ];

        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) =>
      `  <url>
    <loc>${origin}${page.path}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>`;

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
          },
        });
      },
    },
  },
});
