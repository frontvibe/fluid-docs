import { repoUrl } from "../../../astro.config.mjs";

export function VercelDeployButton() {
  const url = encodeURI(
    `https://vercel.com/new/clone?repository-url=${repoUrl}`,
  );

  return (
    <a href={url} target="_blank">
      <img src="https://vercel.com/button" alt="Deploy with Vercel" />
    </a>
  );
}
