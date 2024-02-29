import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";
import compress from "astro-compress";
import tailwind from "@astrojs/tailwind";

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
  output: "hybrid",
  integrations: [mdx(), compress({
    CSS: true,
    HTML: false,
    Image: true,
    JavaScript: true,
    SVG: false
  }), tailwind()],
  site: 'http://localhost:4321',
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport'
  }
});