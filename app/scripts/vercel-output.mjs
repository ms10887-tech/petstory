import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import { join } from "node:path";

const output = ".vercel/output";
const functionDir = join(output, "functions/index.func");

await rm(output, { recursive: true, force: true });
await mkdir(functionDir, { recursive: true });
await cp("dist/client", join(output, "static"), { recursive: true });
await cp("dist/server", functionDir, { recursive: true });

await writeFile(
  join(functionDir, ".vc-config.json"),
  JSON.stringify({ runtime: "nodejs20.x", handler: "index.mjs", launcherType: "Nodejs" }),
);

await writeFile(
  join(functionDir, "index.mjs"),
  `import app from "./server.js";

export default async function handler(req, res) {
  const headers = new Headers();
  for (const [key, value] of Object.entries(req.headers)) {
    if (Array.isArray(value)) value.forEach((item) => headers.append(key, item));
    else if (value != null) headers.set(key, value);
  }

  const method = req.method || "GET";
  const init = { method, headers };
  if (method !== "GET" && method !== "HEAD") {
    const chunks = [];
    for await (const chunk of req) chunks.push(chunk);
    init.body = Buffer.concat(chunks);
  }

  const url = new URL(req.url || "/", "https://" + (req.headers.host || "localhost"));
  const response = await app.fetch(new Request(url, init), {}, { waitUntil() {} });
  res.statusCode = response.status;
  response.headers.forEach((value, key) => res.setHeader(key, value));
  res.end(Buffer.from(await response.arrayBuffer()));
}
`,
);

await writeFile(
  join(output, "config.json"),
  JSON.stringify({
    version: 3,
    routes: [{ handle: "filesystem" }, { src: "/(.*)", dest: "/index" }],
  }),
);
