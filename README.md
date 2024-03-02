
#  Personal Blog & Portfolio

Introducing a versatile and free template designed for use with the latest Astro version. This template boasts frequent updates, a user-friendly interface, and compatibility with various purposes. Ideal for showcasing your portfolio, crafting blog articles, and sharing your personal narrative. Unlock the potential to express yourself effortlessly with this template.

------------------------------------------------------------------------------

![ov-template](https://i.ibb.co/4WMYGDq/ov-template-main.png)

## ☝️Plans for future updates

 1. Pagination for blog 
 2. Remake menu 
 3. Integration with one of the headless
    CMS (I will choose later)

This roadmap will be updated.

##  🖥️ Commands

All commands are run from the root of the project, from a terminal:
### Instalation



| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:3000`      |
| `npm run css`             | Starts `TailwindCSS`                             |
------------------------------------------------------------------------------

### Deploy

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
------------------------------------------------------------------------------

##  🌳 Project structure - [v0.8.4](https://github.com/vratskyi/vratskyi.github.io/releases/tag/v0.8.4)

```
📦 vratskyi.github.io 
├─ .github
│  ├─ ISSUE_TEMPLATE
│  │  ├─ bug_report.md
│  │  ├─ custom.md
│  │  └─ feature_request.md
│  └─ workflows
│     └─ astro.yml
├─ .gitignore
├─ .nojekyll
├─ CODE_OF_CONDUCT.md
├─ CONTRIBUTING.md
├─ LICENSE
├─ README.md
├─ astro.config.mjs
├─ favicon.svg
├─ package-lock.json
├─ package.json
├─ postcss.config.cjs
├─ postcss.config.js
├─ public
│  ├─ .nojekyll
│  ├─ favicon.svg
│  ├─ img
│  ├─ src
│  │  └─ assets
│  │     ├─ img
│  │     └─ js
│  │        ├─ animate.js
│  │        └─ menu.js
│  └─ styles
│     ├─ atropos.min.css
│     ├─ global.css
│     └─ reset.css
├─ src
│  ├─ assets
│  │  ├─ img
│  │  ├─ js
│  │  │  ├─ animate.js
│  │  │  └─ menu.js
│  │  └─ styles
│  │     └─ input.css
│  ├─ components
│  │  ├─ Badge.astro
│  │  ├─ BadgeLink.astro
│  │  ├─ Button.astro
│  │  ├─ Footer.astro
│  │  ├─ Head.astro
│  │  ├─ Header.astro
│  │  ├─ PortfolioCard.astro
│  │  ├─ Post.astro
│  │  ├─ PostList.astro
│  │  ├─ Prose.astro
│  │  ├─ SwitchLang.astro
│  │  ├─ Tag.astro
│  │  ├─ Title.astro
│  │  └─ TitlePost.astro
│  ├─ content
│  │  ├─ config.ts
│  │  └─ posts
│  │     ├─ en
│  │     │  ├─ about-experience-in-web-dev.mdx
│  │     │  ├─ become-cool-frontend-dev.mdx
│  │     │  ├─ cool-plugins-for-vs-code.mdx
│  │     │  ├─ ui-kit-for-tailwind.mdx
│  │     │  └─ what-happened-in-a-month-my-blog.mdx
│  │     ├─ images
│  │     └─ ru
│  │        ├─ about-experience-in-web-dev.mdx
│  │        ├─ become-cool-frontend-dev.mdx
│  │        ├─ cool-plugins-for-vs-code.mdx
│  │        ├─ ui-kit-for-tailwind.mdx
│  │        └─ what-happened-in-a-month-my-blog.mdx
│  ├─ env.d.ts
│  ├─ i18n
│  │  ├─ ui.ts
│  │  └─ utils.ts
│  ├─ layouts
│  │  ├─ Layout.astro
│  │  ├─ PostLayout.astro
│  │  └─ PostsLayout.astro
│  └─ pages
│     ├─ blog
│     │  └─ index.astro
│     ├─ en
│     │  ├─ 404.astro
│     │  ├─ about.astro
│     │  ├─ blog
│     │  │  ├─ [...slug].astro
│     │  │  └─ index.astro
│     │  ├─ index.astro
│     │  └─ portfolio.astro
│     ├─ index.astro
│     └─ ru
│        ├─ 404.astro
│        ├─ about.astro
│        ├─ blog
│        │  ├─ [...slug].astro
│        │  └─ index.astro
│        ├─ index.astro
│        └─ portfolio.astro
├─ tailwind.config.cjs
└─ tsconfig.json
```
