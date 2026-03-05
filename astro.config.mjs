// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightSidebarTopics from "starlight-sidebar-topics";

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
      plugins: [
        starlightSidebarTopics([
          {
            label: "Guides",
            link: "guides/example",
            icon: "open-book",
            items: ["guides/example", "guides/example2"],
          },
          {
            label: "Reference",
            link: "reference/example",
            icon: "information",
            items: [
              {
                label: "Recipes",
                autogenerate: { directory: "reference" },
              },
            ],
          }
        ]),
      ],
    }),
  ],
});
