import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";
import compress from "astro-compress";
import tailwind from "@astrojs/tailwind";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  // i18n settings
  i18n: {
    defaultLocale: "en",
    locales: ["en", "ru", {
      path: "ru",
      codes: ["ru", "ru-RU"]
    }],
    routing: {
      prefixDefaultLocale: true
    },
    fallback: {
      ru: "en"
    }
  },
  integrations: [mdx(), compress({
    CSS: true,
    HTML: false,
    Image: false,
    JavaScript: true,
    SVG: false
  }), tailwind()],
  // site: 'http://localhost:4321',
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'viewport'
  },
  experimental: {
    clientPrerender: false,
  },
  output: "server",
  adapter: vercel({
    isr: {
      expiration: 60 * 60 * 24,
    },
    webAnalytics: {
      enabled: true,
  },
  })
});