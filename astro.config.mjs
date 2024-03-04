import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";
import { externalLink } from "./src/plugins/externalLink";

export const repoUrl = "https://github.com/frontvibe/fluid";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Fluid",
      social: {
        github: repoUrl,
      },
      customCss: ["./src/tailwind.css"],
      editLink: {
        baseUrl: repoUrl + "/edit/main/",
      },
      sidebar: [
        {
          label: "Getting started",
          items: [
            {
              label: "Introduction",
              link: "/getting-started/introduction",
            },
            {
              label: "Why Fluid?",
              link: "/getting-started/why-fluid",
            },
            {
              label: "Installation",
              link: "/getting-started/installation",
            },
            {
              label: "Deployment",
              link: "/getting-started/deployment/",
            },
          ],
        },
        {
          label: "Using the CMS",
          items: [
            {
              label: "Content structure",
              link: "/cms/preview-mode/",
            },
            {
              label: "Using templates",
              link: "/cms/preview-mode/",
            },
            {
              label: "Color schemes",
              link: "/cms/preview-mode/",
            },
            {
              label: "Typography",
              link: "/cms/preview-mode/",
            },
            {
              label: "Theme content",
              link: "/cms/preview-mode/",
            },
            {
              label: "Settings",
              link: "/cms/preview-mode/",
            },
            {
              label: "Preview mode",
              link: "/cms/preview/",
            },
            {
              label: "Internationalization",
              link: "/cms/preview-mode/",
            },
          ],
        },
        {
          label: "Theme development",
          items: [
            {
              label: "Project structure",
              link: "/theme/introduction",
            },
            {
              label: "Sections",
              link: "/theme/introduction",
            },
            {
              label: "Components",
              link: "/theme/why-fluid",
            },
            {
              label: "Groqd queries",
              link: "/theme/installation",
            },
          ],
        },
      ],
    }),
    react(),
    tailwind(),
  ],
  markdown: {
    rehypePlugins: [externalLink],
  },
});
