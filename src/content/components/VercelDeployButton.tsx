export function VercelDeployButton() {
  const repoUrl = "https://github.com/frontvibe/fluid";
  const url = encodeURI(
    `https://vercel.com/new/clone?repository-url=${repoUrl}`,
  );

  return (
    <a href={url} target="_blank">
      <img src="https://vercel.com/button" alt="Deploy with Vercel" />
    </a>
  );
}
