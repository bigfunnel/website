import { spawn } from "node:child_process";
import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import { dirname } from "node:path";

const output = "github-pages";
const base = "/website";
const server = spawn("./node_modules/.bin/vinext", ["start"], {
  stdio: "inherit",
  env: { ...process.env, PATH: `${dirname(process.execPath)}:${process.env.PATH}`, PORT: "3000" },
});

async function waitForServer() {
  for (let attempt = 0; attempt < 40; attempt++) {
    try {
      const response = await fetch("http://127.0.0.1:3000/");
      if (response.ok) return;
    } catch {}
    await new Promise((resolve) => setTimeout(resolve, 500));
  }
  throw new Error("Timed out waiting for the production server");
}

function makeStatic(html) {
  return html
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<link\b[^>]*rel="modulepreload"[^>]*>/gi, "")
    .replaceAll('href="/_next/', `href="${base}/_next/`)
    .replaceAll('href="/privacy"', `href="${base}/privacy/"`)
    .replaceAll('href="/terms"', `href="${base}/terms/"`)
    .replace("</head>", '<link rel="icon" href="/website/favicon.svg"/></head>');
}

try {
  await waitForServer();
  await rm(output, { recursive: true, force: true });
  await mkdir(output, { recursive: true });
  for (const route of ["", "privacy", "terms"]) {
    const response = await fetch(`http://127.0.0.1:3000/${route}`);
    if (!response.ok) throw new Error(`Unable to export /${route}`);
    const directory = route ? `${output}/${route}` : output;
    await mkdir(directory, { recursive: true });
    await writeFile(`${directory}/index.html`, makeStatic(await response.text()));
  }
  await cp("dist/client/_next", `${output}/_next`, { recursive: true });
  await cp("public/favicon.svg", `${output}/favicon.svg`);
  await writeFile(`${output}/.nojekyll`, "");
} finally {
  server.kill("SIGTERM");
}
