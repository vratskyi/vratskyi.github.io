import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";
import compress from "astro-compress";
import tailwind from "@astrojs/tailwind";
import cloudflare from "@astrojs/cloudflare";

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
      prefixDefaultLocale: true,
      redirectToDefaultLocale: true
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
  image: {
    service: {
       entrypoint: 'astro/assets/services/sharp',
       config: {
         limitInputPixels: false,
      },
     },
  },
  // site: 'http://localhost:4321',
  redirects: {
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport'
  },
  experimental: {
    clientPrerender: false
  },
  output: "hybrid",
  adapter: cloudflare({ 
    mode: 'directory',
    functionPerRoute: true,
    routes: {
      strategy: 'include',
      include: [
        '/en/blog/*',
        '/ru/blog/*'
    ]
    } 
  })
});