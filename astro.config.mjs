import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";
import { externalLink } from "./src/plugins/externalLink";
import { heroVideoUrl } from "./src/utils";

const docsRepoUrl = "https://github.com/frontvibe/fluid-docs";
const fluidRepoUrl = "https://github.com/frontvibe/fluid";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Fluid",
      social: {
        github: fluidRepoUrl,
      },
      head: [
        {
          tag: "link",
          attrs: {
            rel: "preconnect",
            href: "https://cdn.shopify.com",
          },
        },
        {
          tag: "link",
          attrs: {
            rel: "preload",
            as: "video",
            href: heroVideoUrl,
            type: "video/mp4",
          },
        },
      ],
      customCss: ["./src/tailwind.css"],
      editLink: {
        baseUrl: docsRepoUrl + "/edit/main/",
      },
      components: {
        Hero: "./src/content/components/Hero.astro",
        Footer: "./src/content/components/Footer.astro",
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
              label: "CSS and Styling",
              link: "/theme/css-styling",
            },
            {
              label: "Sanity queries",
              link: "/theme/sanity-queries",
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
