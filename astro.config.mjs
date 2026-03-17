// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightSidebarTopics from "starlight-sidebar-topics";
import mermaid from 'astro-mermaid';
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

// https://astro.build/config
export default defineConfig({
  site: "https://uwindsor-ai-club.github.io/",
  base: "/ai-wiki",
  integrations: [
    starlight({
      title: "AI Club Wiki",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/withastro/starlight",
        },
      ],
      tableOfContents: {
        maxHeadingLevel: 5,
        minHeadingLevel: 2,
      },
      plugins: [
        starlightSidebarTopics([
          {
            label: "Foundations",
            link: "foundation/1-introduction",
            icon: "book",
            items: [
              {
                label: "Introduction",
                autogenerate: { directory: "foundation/1-introduction" },
              },
              {
                label: "Setup and Environment",
                autogenerate: { directory: "foundation/2-setup-and-environment" },
              },
              {
                label: "Working with Datasets",
                autogenerate: { directory: "foundation/3-working-with-datasets" },
              },
              {
                label: "ML Workflow",
                autogenerate: { directory: "foundation/4-ml-workflow" },
              },
              {
                label: "Models",
                autogenerate: { directory: "foundation/5-models" },
              },
              {
                label: "Evaluation",
                autogenerate: { directory: "foundation/6-evaluation" },
              },
              {
                label: "Classic ML Project",
                autogenerate: { directory: "foundation/7-classic-ml-project" },
              },
              {
                label: "Next Steps",
                autogenerate: { directory: "foundation/8-next-steps" },
              },
            ],
          },
          {
            label: "How to Contribute",
            link: "contributing/github",
            icon: "pencil",
            items: [
              {
                label: "Contributing",
                autogenerate: { directory: "contributing" },
              },
            ],
          },
        ]),
      ],
      customCss: ['katex/dist/katex.css'],
    }),
    mermaid(),
  ],
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
});
