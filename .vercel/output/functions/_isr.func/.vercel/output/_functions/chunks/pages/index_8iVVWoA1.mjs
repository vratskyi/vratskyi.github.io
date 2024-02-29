/* empty css                          */
import { f as createAstro, g as createComponent, r as renderTemplate, i as addAttribute, m as maybeRenderHead, n as renderSlot, k as renderComponent, j as renderTransition, A as AstroError, p as UnknownContentCollectionError, q as renderUniqueStylesheet, t as renderScriptElement, v as createHeadAndContent, u as unescapeHTML, w as Fragment } from '../astro_DVgfIFhV.mjs';
import 'kleur/colors';
import { $ as $$Title } from './about_CVnzjXwe.mjs';
import { h as getLangFromUrl, g as getAbsoluteLocaleUrl, c as $$Picture, e as $$Layout, $ as $$Head, a as $$Image, b as blur, j as getRelativeLocaleUrl } from './404_CFB9P143.mjs';
import 'clsx';
/* empty css                          */
import { p as prependForwardSlash } from '../astro/assets-service_D4NYTO7E.mjs';

const $$Astro$a = createAstro();
const $$PostsLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$PostsLayout;
  const lang = getLangFromUrl(Astro2.url);
  return renderTemplate`<html${addAttribute(lang, "lang")}> ${maybeRenderHead()}<body class="cursor-default relative container grid max-w-6xl mx-auto font-sans md:p-5 tracking-wide text-white bg-[#040404]"> <div> ${renderSlot($$result, $$slots["default"])} </div> </body></html>`;
}, "C:/Users/vratskyi/Documents/Projects/vratskyi.github.io/src/layouts/PostsLayout.astro", void 0);

const $$Astro$9 = createAstro();
const $$TitlePost = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$TitlePost;
  const { h1 } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<h1 class="text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r from-primary-0 to-accent-0"> ${h1} </h1>`;
}, "C:/Users/vratskyi/Documents/Projects/vratskyi.github.io/src/components/TitlePost.astro", void 0);

const $$Astro$8 = createAstro();
const $$Post = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Post;
  const lang = getLangFromUrl(Astro2.url);
  const { post } = Astro2.props;
  const blogUrl = getAbsoluteLocaleUrl(lang, "blog");
  return renderTemplate`${maybeRenderHead()}<span class="atropos my-atropos"> <!-- scale container (required) --> <span class="atropos-scale"> <!-- rotate container (required) --> <span class="atropos-rotate"> <!-- inner container (required) --> <span class="atropos-inner"> <!-- put your custom content here --> <article class="p-4 flex flex-col space-y-3 mt-[12.2222%] w-full max-w-[600px] hover:bg-zinc-500/20 rounded-2xl transition-colors duration-150"> <a${addAttribute(`${blogUrl}${post.slug}`, "href")}> ${renderComponent($$result, "Picture", $$Picture, { "src": post.data.image, "alt": post.data.title, "width": "500", "height": "220", "formats": ["avif", "webp"], "class": "object-cover h-full max-h-[220px] w-full rounded-2xl", "data-astro-transition-scope": renderTransition($$result, "yurbo4k3", "", post.data.title) })} </a><a${addAttribute(`${blogUrl}${post.slug}`, "href")}> <ul class="flex"> <li class="mb-4 my-auto text-xs font-light blur-bg rounded-2xl px-2 py-1 inline-flex items-center"> <svg class="w-6 inline-block mr-1 my-auto" fill="none" stroke="currentColor" stroke-width="1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"> <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"></path> </svg> ${post.data.author} </li> <li class="ml-2 mb-4 my-auto text-xs font-light blur-bg rounded-2xl"> <date class="px-2 py-1 inline-flex items-center"> <svg class="w-6 inline-block mr-1 my-auto" fill="none" stroke="currentColor" stroke-width="1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"> <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> ${post.data.publishDate} </date> </li> <li class="mb-4 ml-2 my-auto text-xs font-light blur-bg rounded-2xl px-2 py-1 inline-flex items-center"> <svg class="w-6 inline-block mr-1 my-auto" fill="none" stroke="currentColor" stroke-width="1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"> <path stroke-linecap="round" stroke-linejoin="round" d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122"></path> </svg> ${post.data.categories} </li> </ul> ${renderComponent($$result, "TitlePost", $$TitlePost, { "h1": post.data.title })} <p class="mt-5 line-clamp-4">${post.data.description}</p> </a> </article> </span> </span> </span> </span> <link rel="stylesheet" href="/styles/atropos.min.css"> `;
}, "C:/Users/vratskyi/Documents/Projects/vratskyi.github.io/src/components/Post.astro", "self");

const $$Astro$7 = createAstro();
const $$PostList = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$PostList;
  const lang = getLangFromUrl(Astro2.url);
  function convertToDate(dateString) {
    const [day, month, year] = dateString.split("/");
    return new Date(year, month - 1, day);
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="grid grid-cols-2 gap-x-10 gap-y-5 p-5 mx-auto max-md:grid-cols-1 mb-24"> ${Astro2.props.posts.sort((a, b) => convertToDate(b.data.publishDate).getTime() - convertToDate(a.data.publishDate).getTime()).filter((post) => post.data.language === lang).map((post) => renderTemplate`${renderComponent($$result2, "Post", $$Post, { "post": post })}`)} </div> ` })}`;
}, "C:/Users/vratskyi/Documents/Projects/vratskyi.github.io/src/components/PostList.astro", void 0);

function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1)
      continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
const cacheEntriesByCollection = /* @__PURE__ */ new Map();
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport
}) {
  return async function getCollection(collection, filter) {
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else {
      console.warn(
        `The collection ${JSON.stringify(
          collection
        )} does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return;
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign({"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": undefined, "ASSETS_PREFIX": undefined}, { _: process.env._ })?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = [...cacheEntriesByCollection.get(collection)];
    } else {
      entries = await Promise.all(
        lazyImports.map(async (lazyImport) => {
          const entry = await lazyImport();
          return type === "content" ? {
            id: entry.id,
            slug: entry.slug,
            body: entry.body,
            collection: entry.collection,
            data: entry.data,
            async render() {
              return render({
                collection: entry.collection,
                id: entry.id,
                renderEntryImport: await getRenderEntryImport(collection, entry.slug)
              });
            }
          } : {
            id: entry.id,
            collection: entry.collection,
            data: entry.data
          };
        })
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (typeof filter === "function") {
      return entries.filter(filter);
    } else {
      return entries;
    }
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function")
    throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object")
    throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function")
      throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object")
      throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/posts/en/about-experience-in-web-dev.mdx": () => import('../about-experience-in-web-dev_C6xuZLye.mjs'),"/src/content/posts/en/become-cool-frontend-dev.mdx": () => import('../become-cool-frontend-dev_5IlRX2qD.mjs'),"/src/content/posts/en/cool-plugins-for-vs-code.mdx": () => import('../cool-plugins-for-vs-code_DXKArvvn.mjs'),"/src/content/posts/en/ui-kit-for-tailwind.mdx": () => import('../ui-kit-for-tailwind_DL6qUlsy.mjs'),"/src/content/posts/en/what-happened-in-a-month-my-blog.mdx": () => import('../what-happened-in-a-month-my-blog_BhoCPoyr.mjs'),"/src/content/posts/ru/about-experience-in-web-dev.mdx": () => import('../about-experience-in-web-dev_CKEJMMZQ.mjs'),"/src/content/posts/ru/become-cool-frontend-dev.mdx": () => import('../become-cool-frontend-dev_CLj1VjFp.mjs'),"/src/content/posts/ru/cool-plugins-for-vs-code.mdx": () => import('../cool-plugins-for-vs-code_DKiFBJW5.mjs'),"/src/content/posts/ru/ui-kit-for-tailwind.mdx": () => import('../ui-kit-for-tailwind_Be3bTW72.mjs'),"/src/content/posts/ru/what-happened-in-a-month-my-blog.mdx": () => import('../what-happened-in-a-month-my-blog_DurfxmpC.mjs')});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"posts":{"type":"content","entries":{"about-experience-in-web-dev":"/src/content/posts/en/about-experience-in-web-dev.mdx","become-cool-frontend-dev":"/src/content/posts/en/become-cool-frontend-dev.mdx","cool-plugins-for-vs-code":"/src/content/posts/en/cool-plugins-for-vs-code.mdx","ui-kit-for-tailwind":"/src/content/posts/en/ui-kit-for-tailwind.mdx","what-happened-in-a-month-my-blog":"/src/content/posts/en/what-happened-in-a-month-my-blog.mdx","about-experience-in-web":"/src/content/posts/ru/about-experience-in-web-dev.mdx","become-cool-frontend-developer":"/src/content/posts/ru/become-cool-frontend-dev.mdx","cool-plugins-for-vscode":"/src/content/posts/ru/cool-plugins-for-vs-code.mdx","ui-kit-for-tailwindcss":"/src/content/posts/ru/ui-kit-for-tailwind.mdx","what-happened-in-a-month-myblog":"/src/content/posts/ru/what-happened-in-a-month-my-blog.mdx"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/posts/en/about-experience-in-web-dev.mdx": () => import('../about-experience-in-web-dev_jC_ZOor2.mjs'),"/src/content/posts/en/become-cool-frontend-dev.mdx": () => import('../become-cool-frontend-dev_Cauoy5a9.mjs'),"/src/content/posts/en/cool-plugins-for-vs-code.mdx": () => import('../cool-plugins-for-vs-code_wD76Wq_P.mjs'),"/src/content/posts/en/ui-kit-for-tailwind.mdx": () => import('../ui-kit-for-tailwind_Ba7sf12_.mjs'),"/src/content/posts/en/what-happened-in-a-month-my-blog.mdx": () => import('../what-happened-in-a-month-my-blog_NX00oTNA.mjs'),"/src/content/posts/ru/about-experience-in-web-dev.mdx": () => import('../about-experience-in-web-dev_CPHVCoYx.mjs'),"/src/content/posts/ru/become-cool-frontend-dev.mdx": () => import('../become-cool-frontend-dev_C5XC8wyP.mjs'),"/src/content/posts/ru/cool-plugins-for-vs-code.mdx": () => import('../cool-plugins-for-vs-code_C1LOLVXS.mjs'),"/src/content/posts/ru/ui-kit-for-tailwind.mdx": () => import('../ui-kit-for-tailwind_BKsIZkCV.mjs'),"/src/content/posts/ru/what-happened-in-a-month-my-blog.mdx": () => import('../what-happened-in-a-month-my-blog_DkEP9dgF.mjs')});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
});

const $$Astro$6 = createAstro();
const $$Index$5 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Index$5;
  getAbsoluteLocaleUrl("en");
  const allPosts = await getCollection("posts");
  return renderTemplate`${renderComponent($$result, "Head", $$Head, { "title": "Blog" })} ${renderComponent($$result, "Image", $$Image, { "src": blur, "class": "fixed top-0 bottom-0 left-0 right-0 m-auto h-full w-full object-cover object-center z-[-1]", "alt": "blur background" })} ${renderComponent($$result, "PostsLayout", $$PostsLayout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="grid content-center my-auto mt-[11.1111%] min-h-full"> ${renderComponent($$result2, "Title", $$Title, { "text": "Blog" })} ${renderComponent($$result2, "PostList", $$PostList, { "posts": allPosts })} </div> ` })}`;
}, "C:/Users/vratskyi/Documents/Projects/vratskyi.github.io/src/pages/blog/index.astro", void 0);

const $$file$5 = "C:/Users/vratskyi/Documents/Projects/vratskyi.github.io/src/pages/blog/index.astro";
const $$url$5 = "/blog";

const index$5 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index$5,
	file: $$file$5,
	url: $$url$5
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$5 = createAstro();
const $$Index$4 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Index$4;
  getAbsoluteLocaleUrl("en");
  const allPosts = await getCollection("posts");
  return renderTemplate`${renderComponent($$result, "Head", $$Head, { "title": "Blog" })} ${renderComponent($$result, "Image", $$Image, { "src": blur, "class": "fixed top-0 bottom-0 left-0 right-0 m-auto h-full w-full object-cover object-center z-[-1]", "alt": "blur background" })} ${renderComponent($$result, "PostsLayout", $$PostsLayout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="grid content-center my-auto mt-[11.1111%] min-h-full"> ${renderComponent($$result2, "Title", $$Title, { "text": "Blog" })} ${renderComponent($$result2, "PostList", $$PostList, { "posts": allPosts })} </div> ` })}`;
}, "C:/Users/vratskyi/Documents/Projects/vratskyi.github.io/src/pages/en/blog/index.astro", void 0);

const $$file$4 = "C:/Users/vratskyi/Documents/Projects/vratskyi.github.io/src/pages/en/blog/index.astro";
const $$url$4 = "/en/blog";

const index$4 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index$4,
	file: $$file$4,
	url: $$url$4
}, Symbol.toStringTag, { value: 'Module' }));

const cover = new Proxy({"src":"/_astro/ov-main.mrCwgghJ.png","width":3014,"height":1811,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/vratskyi/Documents/Projects/vratskyi.github.io/src/assets/img/ov-main.png";
							}
							
							return target[name];
						}
					});

const $$Astro$4 = createAstro();
const $$Button = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Button;
  let { link, text, target, showIcon = true } = Astro2.props;
  target = target || "_blank";
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(link, "href")}${addAttribute(target, "target")} class="inline-block justify-self-start px-3 py-2 rounded-lg border-2 hover:border-primary-0 hover:bg-primary-0 duration-150">${text} ${showIcon && renderTemplate`<svg class="inline-block pl-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <path d="M15.6396 7.02527H12.0181V5.02527H19.0181V12.0253H17.0181V8.47528L12.1042 13.3892L10.6899 11.975L15.6396 7.02527Z" fill="currentColor"></path> <path d="M10.9819 6.97473H4.98193V18.9747H16.9819V12.9747H14.9819V16.9747H6.98193V8.97473H10.9819V6.97473Z" fill="currentColor"></path> ` })} </svg>`} </a>`;
}, "C:/Users/vratskyi/Documents/Projects/vratskyi.github.io/src/components/Button.astro", void 0);

const $$Astro$3 = createAstro();
const $$Index$3 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Index$3;
  getAbsoluteLocaleUrl("en");
  const blogURL = getRelativeLocaleUrl("en", "blog");
  return renderTemplate`${renderComponent($$result, "Head", $$Head, { "title": "VRATSKYI" })} ${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="grid gap-x-10 gap-y-10 lg:gap-y-0 place-content-center content-center lg:grid-flow-col lg:auto-cols-max lg:mt-[10rem] 2xl:mt-[15rem] mb-[5rem] px-3 lg:px-0 h-full text-white"> ${renderComponent($$result2, "Image", $$Image, { "src": blur, "class": "fixed top-0 bottom-0 left-0 right-0 m-auto h-full w-full object-cover object-center z-[-1]", "alt": "blur background" })} <div> <div class="atropos my-atropos"> <div class="atropos-scale"> <div class="atropos-rotate"> <div class="atropos-inner blur-bg rounded-xl p-4 lg:p-10 mt-[8rem] xs:mt-[10rem] sm:mt-[12rem] md:mt-[10rem] lg:mt-0 w-full max-w-[600px]"> <div class="atropos-text"> <h1 class="text-7xl lg:text-9xl font-black bg-clip-text text-transparent bg-gradient-to-r from-primary-0 to-accent-0">
Happy to see you here!
</h1> </div> <div class="atropos-text text-xl font-extralight lg:max-w-6xl mt-5 lg:mt-10"> <blockquote>
Here, you can learn about me, read my blog, and familiarize yourself with my portfolio. Currently, I am studying JavaScript and the Astro Framework, and I plan to study the Vue Framework. I am also interested in Qwik and enjoy learning new things. Most importantly, I am passionate about my work.
</blockquote> </div> </div> </div> </div> </div> </div> <div class="h-full grid place-content-stretch"> <div class="atropos my-atropos"> <div class="atropos-scale"> <div class="atropos-rotate"> <div class="atropos-inner self-start blur-bg rounded-xl p-4 lg:p-10 w-full max-w-[400px]"> ${renderComponent($$result2, "Picture", $$Picture, { "src": cover, "class": "mx-auto object-cover rounded-xl", "alt": "cover", "formats": ["avif", "webp"] })} <p class="atropos-text text-xl font-extralight tracking-wide mt-5">
You can find this site on GitHub, I'm developing it for my portfolio, as well as for blogging.
</p> <div class="mt-5 atropos-text"> ${renderComponent($$result2, "Button", $$Button, { "text": "Check out", "link": "https://github.com/vratskyi/vratskyi.github.io" })} </div> </div> </div> </div> </div> <div class="atropos my-atropos"> <div class="atropos-scale"> <div class="atropos-rotate"> <div class="atropos-inner"> <div class="mt-5 grid grid-flow-col place-content-between place-items-center place-self-stretch h-max blur-bg rounded-xl p-4 lg:p-10 w-full max-w-[400px]"> <p class="text-2xl font-light text-white">
Read my blog
</p>${renderComponent($$result2, "Button", $$Button, { "text": "Read blog", "link": blogURL, "target": "_self", "showIcon": false })} </div> </div> </div> </div> </div> </div> </section> <link rel="stylesheet" href="/styles/atropos.min.css">  ` })}`;
}, "C:/Users/vratskyi/Documents/Projects/vratskyi.github.io/src/pages/en/index.astro", void 0);

const $$file$3 = "C:/Users/vratskyi/Documents/Projects/vratskyi.github.io/src/pages/en/index.astro";
const $$url$3 = "/en";

const index$3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index$3,
	file: $$file$3,
	url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$2 = createAstro();
const $$Index$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Index$2;
  getAbsoluteLocaleUrl("ru");
  const allPosts = await getCollection("posts");
  return renderTemplate`${renderComponent($$result, "Head", $$Head, { "title": "\u0411\u043B\u043E\u0433" })} ${renderComponent($$result, "Image", $$Image, { "src": blur, "class": "fixed top-0 bottom-0 left-0 right-0 m-auto h-full w-full object-cover object-center z-[-1]", "alt": "blur background" })} ${renderComponent($$result, "PostsLayout", $$PostsLayout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="grid content-center my-auto mt-[11.1111%] min-h-full"> ${renderComponent($$result2, "Title", $$Title, { "text": "\u0411\u043B\u043E\u0433" })} ${renderComponent($$result2, "PostList", $$PostList, { "posts": allPosts })} </div> ` })}`;
}, "C:/Users/vratskyi/Documents/Projects/vratskyi.github.io/src/pages/ru/blog/index.astro", void 0);

const $$file$2 = "C:/Users/vratskyi/Documents/Projects/vratskyi.github.io/src/pages/ru/blog/index.astro";
const $$url$2 = "/ru/blog";

const index$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index$2,
	file: $$file$2,
	url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro();
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index$1;
  getAbsoluteLocaleUrl("ru");
  const blogURL = getRelativeLocaleUrl("ru", "blog");
  return renderTemplate`${renderComponent($$result, "Head", $$Head, { "title": "\u0412\u0420\u0410\u0426\u041A\u0418\u0419" })} ${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="grid gap-x-10 gap-y-10 lg:gap-y-0 place-content-center content-center lg:grid-flow-col lg:auto-cols-max lg:mt-[10rem] 2xl:mt-[15rem] mb-[5rem] px-3 lg:px-0 h-full text-white"> ${renderComponent($$result2, "Image", $$Image, { "src": blur, "class": "fixed top-0 bottom-0 left-0 right-0 m-auto h-full w-full object-cover object-center z-[-1]", "alt": "blur background" })} <div> <span class="atropos my-atropos"> <span class="atropos-scale"> <span class="atropos-rotate"> <span class="atropos-inner blur-bg rounded-xl p-4 lg:p-10 mt-[8rem] xs:mt-[10rem] sm:mt-[12rem] md:mt-[10rem] lg:mt-0 w-full max-w-[600px]"> <div class="atropos-text"> <h1 class="text-7xl lg:text-9xl font-black bg-clip-text text-transparent bg-gradient-to-r from-primary-0 to-accent-0">
Рад вас видеть здесь!
</h1> </div> <div class="atropos-text text-xl font-extralight lg:max-w-6xl mt-5 lg:mt-10"> <blockquote>
Тут вы можете узнать обо мне, почитать мой блог и ознакомиться с моим портфолио. В настоящее время я изучаю JavaScript и Astro фреимворк, 
                    и планирую изучить Vue фреимворк. Я также интересуюсь Qwik и люблю узнавать новое. Самое главное - я увлечен своей работой.
</blockquote> </div> </span> </span> </span> </span> </div> <div> <span class="atropos my-atropos"> <span class="atropos-scale"> <span class="atropos-rotate"> <span class="atropos-inner self-start blur-bg rounded-xl p-4 lg:p-10 w-full max-w-[400px]"> ${renderComponent($$result2, "Picture", $$Picture, { "src": cover, "class": "mx-auto object-cover rounded-xl", "alt": "cover", "formats": ["avif", "webp"] })} <p class="atropos-text text-xl font-extralight tracking-wide mt-5">
Вы можете найти этот сайт на GitHub, я разрабатываю его для своего портфолио, а также для ведения блога.
</p> <div class="mt-5 atropos-text"> ${renderComponent($$result2, "Button", $$Button, { "text": "\u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C", "link": "https://github.com/vratskyi/vratskyi.github.io" })} </div> </span> </span> </span> </span> <span class="atropos my-atropos"> <span class="atropos-scale"> <span class="atropos-rotate"> <span class="atropos-inner"> <div class=" mt-5 grid grid-flow-col place-content-between place-items-center place-self-stretch blur-bg rounded-xl p-4 lg:p-10 w-full max-w-[400px]"> <p class="text-2xl font-light text-white">
Читать мой блог
</p>${renderComponent($$result2, "Button", $$Button, { "text": "\u0427\u0438\u0442\u0430\u0442\u044C \u0431\u043B\u043E\u0433", "link": blogURL, "target": "_self", "showIcon": false })} </div> </span> </span> </span> </span> </div> </section> <link rel="stylesheet" href="/styles/atropos.min.css">  ` })}`;
}, "C:/Users/vratskyi/Documents/Projects/vratskyi.github.io/src/pages/ru/index.astro", void 0);

const $$file$1 = "C:/Users/vratskyi/Documents/Projects/vratskyi.github.io/src/pages/ru/index.astro";
const $$url$1 = "/ru";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index$1,
	file: $$file$1,
	url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  getAbsoluteLocaleUrl("en");
  const blogURL = getRelativeLocaleUrl("en", "blog");
  return renderTemplate`${renderComponent($$result, "Head", $$Head, { "title": "VRATSKYI" })} ${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="grid gap-x-10 gap-y-10 lg:gap-y-0 place-content-center content-center lg:grid-flow-col lg:auto-cols-max lg:mt-[10rem] 2xl:mt-[15rem] mb-[5rem] px-3 lg:px-0 h-full text-white"> ${renderComponent($$result2, "Image", $$Image, { "src": blur, "class": "fixed top-0 bottom-0 left-0 right-0 m-auto h-full w-full object-cover object-center z-[-1]", "alt": "blur background" })} <div> <div class="atropos my-atropos"> <div class="atropos-scale"> <div class="atropos-rotate"> <div class="atropos-inner blur-bg rounded-xl p-4 lg:p-10 mt-[8rem] xs:mt-[10rem] sm:mt-[12rem] md:mt-[10rem] lg:mt-0 w-full max-w-[600px]"> <div class="atropos-text"> <h1 class="text-7xl lg:text-9xl font-black bg-clip-text text-transparent bg-gradient-to-r from-primary-0 to-accent-0">
Happy to see you here!
</h1> </div> <div class="atropos-text text-xl font-extralight lg:max-w-6xl mt-5 lg:mt-10"> <blockquote>
Here, you can learn about me, read my blog, and familiarize yourself with my portfolio. Currently, I am studying JavaScript and the Astro Framework, and I plan to study the Vue Framework. I am also interested in Qwik and enjoy learning new things. Most importantly, I am passionate about my work.
</blockquote> </div> </div> </div> </div> </div> </div> <div> <div class="atropos my-atropos"> <div class="atropos-scale"> <div class="atropos-rotate"> <div class="atropos-inner self-start blur-bg rounded-xl p-4 lg:p-10 w-full max-w-[400px]"> ${renderComponent($$result2, "Picture", $$Picture, { "src": cover, "class": "mx-auto object-cover rounded-xl", "alt": "cover", "formats": ["avif", "webp"] })} <p class="atropos-text text-xl font-extralight tracking-wide mt-5">
You can find this site on GitHub, I'm developing it for my portfolio, as well as for blogging.
</p> <div class="mt-5 atropos-text"> ${renderComponent($$result2, "Button", $$Button, { "text": "Check out", "link": "https://github.com/vratskyi/vratskyi.github.io" })} </div> </div> </div> </div> </div> <div class="atropos my-atropos"> <div class="atropos-scale"> <div class="atropos-rotate"> <div class="atropos-inner"> <div class="mt-5 grid grid-flow-col place-content-between place-items-center place-self-stretch blur-bg rounded-xl p-4 lg:p-10 w-full max-w-[400px]"> <p class="text-2xl font-light text-white">
Read my blog
</p>${renderComponent($$result2, "Button", $$Button, { "text": "Read blog", "link": blogURL, "target": "_self", "showIcon": false })} </div> </div> </div> </div> </div> </div> </section> <link rel="stylesheet" href="/styles/atropos.min.css">  ` })}`;
}, "C:/Users/vratskyi/Documents/Projects/vratskyi.github.io/src/pages/index.astro", void 0);

const $$file = "C:/Users/vratskyi/Documents/Projects/vratskyi.github.io/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Button as $, index$4 as a, index$3 as b, cover as c, index$2 as d, index$1 as e, index as f, getCollection as g, index$5 as i };
