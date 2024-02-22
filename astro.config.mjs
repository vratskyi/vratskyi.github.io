import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";
import compress from "astro-compress";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), compress({
    CSS: true,
    HTML: false,
    Image: true,
    JavaScript: true,
    SVG: false
  }), tailwind()],
  site: 'https://vratskyi.github.io',
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport'
  }
});