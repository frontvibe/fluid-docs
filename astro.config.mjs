import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";
import { externalLink } from "./src/plugins/externalLink";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Fluid",
      social: {
        github: "https://github.com/thomasKn",
      },
      customCss: ["./src/tailwind.css"],
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
              link: "/cms/preview-mode/",
            },
            {
              label: "Internationalization",
              link: "/cms/preview-mode/",
            },
            {
              label: "Deployment",
              link: "/cms/deployment/",
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
