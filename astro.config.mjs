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
              link: "/cms/content-structure/",
            },
            {
              label: "Using templates",
              link: "/cms/templates/",
            },
            {
              label: "Color schemes",
              link: "/cms/color-schemes/",
            },
            {
              label: "Typography",
              link: "/cms/typography/",
            },
            {
              label: "Settings",
              link: "/cms/settings/",
            },
            {
              label: "Internationalization",
              link: "/cms/internationalization/",
            },
            {
              label: "Preview mode",
              link: "/cms/preview-mode/",
            },
          ],
        },
        {
          label: "Theme development",
          items: [
            {
              label: "Project structure",
              link: "/theme/project-structure",
            },
            {
              label: "Sections",
              link: "/theme/sections",
            },
            {
              label: "Components",
              link: "/theme/components",
            },
            {
              label: "Groqd queries",
              link: "/theme/groqd",
            },
          ],
        },
      ],
    }),
    react(),
    tailwind({
      nesting: true,
    }),
  ],
  markdown: {
    rehypePlugins: [externalLink],
  },
});
