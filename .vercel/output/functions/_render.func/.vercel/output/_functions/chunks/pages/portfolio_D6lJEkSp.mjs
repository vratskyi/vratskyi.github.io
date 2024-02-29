/* empty css                          */
import { f as createAstro, g as createComponent, r as renderTemplate, m as maybeRenderHead, i as addAttribute, k as renderComponent } from '../astro_DVgfIFhV.mjs';
import 'kleur/colors';
import { h as getLangFromUrl, u as useTranslations, c as $$Picture, g as getAbsoluteLocaleUrl, $ as $$Head, a as $$Image, b as blur, e as $$Layout } from './404_CFB9P143.mjs';
import { $ as $$Title } from './about_CVnzjXwe.mjs';
import { $ as $$Button, c as cover } from './index_8iVVWoA1.mjs';
import 'clsx';

const water = new Proxy({"src":"/_astro/water-website.DBxt1kFa.png","width":1280,"height":769,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/vratskyi/Documents/Projects/vratskyi.github.io/src/assets/img/water-website.png";
							}
							
							return target[name];
						}
					});

const water2 = new Proxy({"src":"/_astro/h2ovoda.DpdCKiq8.png","width":3000,"height":1800,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/vratskyi/Documents/Projects/vratskyi.github.io/src/assets/img/h2ovoda.png";
							}
							
							return target[name];
						}
					});

const byshikat = new Proxy({"src":"/_astro/online-store-byshikat.CjTFIWkv.png","width":1280,"height":769,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/vratskyi/Documents/Projects/vratskyi.github.io/src/assets/img/online-store-byshikat.png";
							}
							
							return target[name];
						}
					});

const lmd = new Proxy({"src":"/_astro/online-store-lmd.t64M6gNu.png","width":1280,"height":769,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/vratskyi/Documents/Projects/vratskyi.github.io/src/assets/img/online-store-lmd.png";
							}
							
							return target[name];
						}
					});

const $$Astro$4 = createAstro();
const $$BadgeLink = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$BadgeLink;
  let { href, text } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} target="_blank" class="inline-grid justify-self-start"> <li class="justify-self-start font-light blur-bg hover:bg-primary-0 duration-150 rounded-2xl px-3 py-2"> ${text} </li> </a>`;
}, "C:/Users/vratskyi/Documents/Projects/vratskyi.github.io/src/components/BadgeLink.astro", void 0);

const $$Astro$3 = createAstro();
const $$Badge = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Badge;
  let { text } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li class="text-sm font-light blur-bg rounded-2xl px-2 py-1 inline-flex items-center"> ${text} </li>`;
}, "C:/Users/vratskyi/Documents/Projects/vratskyi.github.io/src/components/Badge.astro", void 0);

const $$Astro$2 = createAstro();
const $$PortfolioCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$PortfolioCard;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  let { description, title, img, site, badgeLinkProps, badgeProps } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="grid blur-bg p-5 lg:p-10 rounded-xl"> <div class="grid lg:grid-cols-2"> <div class="grid self-start"> ${renderComponent($$result, "Picture", $$Picture, { "class": "object-cover object-center min-h-full rounded-2xl", "src": img, "width": "500", "height": "350", "alt": title, "formats": ["avif", "webp"] })} </div> <div class="lg:ml-10"> <h3 class="font-black bg-clip-text text-transparent bg-gradient-to-r from-primary-0 to-accent-0 text-3xl lg:text-4xl mb-5 mt-3 lg:mt-0"> ${title} </h3> <p class="inline-flex text-xl font-light"> ${description} </p> <div class="py-5"> <h4 class="text-base mb-5 font-thin">${t("portfolio.subDesc")}</h4> <ul class="flex flex-wrap space-x-2 space-y-2 xs:space-y-0"> ${Array.isArray(badgeLinkProps) ? badgeLinkProps.map((badgeLink, index) => renderTemplate`${renderComponent($$result, "BadgeLink", $$BadgeLink, { "key": index, ...badgeLink })}`) : renderTemplate`${renderComponent($$result, "BadgeLink", $$BadgeLink, { ...badgeLinkProps })}`} ${Array.isArray(badgeProps) ? badgeProps.map((badge, index) => renderTemplate`${renderComponent($$result, "Badge", $$Badge, { "key": index, ...badge })}`) : renderTemplate`${renderComponent($$result, "Badge", $$Badge, { ...badgeProps })}`} </ul> </div> <div class="mt-5"> ${renderComponent($$result, "Button", $$Button, { "text": t("portfolio.externalButton"), "link": site })} </div> </div> </div> </div>`;
}, "C:/Users/vratskyi/Documents/Projects/vratskyi.github.io/src/components/PortfolioCard.astro", void 0);

const $$Astro$1 = createAstro();
const $$Portfolio$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Portfolio$1;
  getAbsoluteLocaleUrl("en");
  let title = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Head", $$Head, { "title": "Portfolio" })} ${renderComponent($$result, "Layout", $$Layout, { "class": "relative" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="grid mt-[11.1111%] content-center"> ${renderComponent($$result2, "Title", $$Title, { "text": "Portfolio" })} </div>  <section class="grid px-3 lg:px-0 content-start text-white"> ${renderComponent($$result2, "Image", $$Image, { "src": blur, "class": "fixed top-0 bottom-0 left-0 right-0 m-auto h-full w-full object-cover object-center z-[-1]", "alt": "blur background" })} <div class="grid grid-rows-auto content-center gap-5 pb-10 mt-[11.1111%]"> ${renderComponent($$result2, "PortfolioCard", $$PortfolioCard, { "img": water2, "alt": title, "site": "https://h2ovoda.com.ua/", "title": "Water delivery site 2.0", "badgeProps": [{ text: "JavaScript" }, { text: "HTML/CSS" }], "badgeLinkProps": [
    { text: "Astro", alt: "Astro logo", href: "https://astro.build/" },
    {
      text: "TailwindCSS",
      alt: "TailwindCSS logo",
      href: "https://tailwindcss.com/"
    }
  ], "description": "I revamped the website to offer water delivery services in Belogorodka and its neighboring regions. The site has an attractive design, a user-friendly layout, and seamless integration with analytical tools to enhance customer engagement. Users can easily submit water delivery requests using the order form provided and gain convenient access to bottled drinking water." })} ${renderComponent($$result2, "PortfolioCard", $$PortfolioCard, { "img": cover, "alt": title, "site": "https://vratskyi.github.io/", "title": "Personal Blog & Portfolio", "badgeProps": [{ text: "JavaScript" }, { text: "HTML/CSS" }], "badgeLinkProps": [
    { text: "Astro", alt: "Astro logo", href: "https://astro.build/" },
    {
      text: "TailwindCSS",
      alt: "TailwindCSS logo",
      href: "https://tailwindcss.com/"
    }
  ], "description": "Introducing a versatile and free template designed for use with the latest Astro version. This template boasts frequent updates, a user-friendly interface, and compatibility with various purposes. Ideal for showcasing your portfolio, crafting blog articles, and sharing your personal narrative. Unlock the potential to express yourself effortlessly with this template." })} ${renderComponent($$result2, "PortfolioCard", $$PortfolioCard, { "img": water, "alt": title, "site": "https://old.h2ovoda.com.ua/", "title": "Water delivery site 1.0", "badgeProps": [{ text: "JavaScript" }, { text: "HTML/CSS" }], "badgeLinkProps": [
    { text: "Astro", alt: "Astro logo", href: "https://astro.build/" },
    {
      text: "TailwindCSS",
      alt: "TailwindCSS logo",
      href: "https://tailwindcss.com/"
    }
  ], "description": "The website I developed offers water delivery in Belogorodka and surrounding areas. It has an attractive design, intuitive layout and integration with analytical tools to attract more customers. Visitors can easily leave a request for water delivery through the order form and get access to bottled drinking water." })} ${renderComponent($$result2, "PortfolioCard", $$PortfolioCard, { "img": byshikat, "alt": title, "site": "https://byshikat.com/", "title": "Byshikat online shoes store", "badgeProps": [
    { text: "PHP" },
    { text: "ACF" },
    { text: "JavaScript" },
    { text: "HTML/CSS" }
  ], "badgeLinkProps": [
    {
      text: "WordPress",
      alt: "WordPress logo",
      href: "https://wordpress.com/"
    }
  ], "description": "Analyzed the target audience, I realized that it is necessary to make something similar to the model of behavior in Instagram, as well as similar at least remotely similar design, thanks to a set of solutions sales from their instagram store went to online store and increased by 1000%" })} ${renderComponent($$result2, "PortfolioCard", $$PortfolioCard, { "img": lmd, "alt": title, "site": "https://lmd.lviv.ua/", "title": "Paper gift bags service", "badgeProps": [
    { text: "PHP" },
    { text: "ACF" },
    { text: "JavaScript" },
    { text: "HTML/CSS" }
  ], "badgeLinkProps": [
    {
      text: "WordPress",
      alt: "WordPress logo",
      href: "https://wordpress.com/"
    }
  ], "description": "This online store is based on WordPress CMS and WooCommerce, I redesigned the old site to a modern design and optimized the loading time, thanks to a comprehensive approach, the number of visitors and sales increased. Now the site is at the top of google in Ukraine." })} </div> </section> ` })}`;
}, "C:/Users/vratskyi/Documents/Projects/vratskyi.github.io/src/pages/en/portfolio.astro", void 0);

const $$file$1 = "C:/Users/vratskyi/Documents/Projects/vratskyi.github.io/src/pages/en/portfolio.astro";
const $$url$1 = "/en/portfolio";

const portfolio$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Portfolio$1,
	file: $$file$1,
	url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
const $$Portfolio = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Portfolio;
  getAbsoluteLocaleUrl("ru");
  let title = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Head", $$Head, { "title": "\u041F\u043E\u0440\u0442\u0444\u043E\u043B\u0438\u043E" })} ${renderComponent($$result, "Layout", $$Layout, { "class": "relative" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="grid mt-[11.1111%] content-center"> ${renderComponent($$result2, "Title", $$Title, { "text": "\u041F\u043E\u0440\u0442\u0444\u043E\u043B\u0438\u043E" })} </div>  <section class="grid px-3 lg:px-0 content-start text-white"> ${renderComponent($$result2, "Image", $$Image, { "src": blur, "class": "fixed top-0 bottom-0 left-0 right-0 m-auto h-full w-full object-cover object-center z-[-1]", "alt": "blur background" })} <div class="grid grid-rows-auto content-center gap-5 pb-10 mt-[11.1111%]"> ${renderComponent($$result2, "PortfolioCard", $$PortfolioCard, { "img": water2, "alt": title, "site": "https://h2ovoda.com.ua/", "title": "\u0421\u0430\u0439\u0442 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438 \u0432\u043E\u0434\u044B 2.0", "badgeProps": [{ text: "JavaScript" }, { text: "HTML/CSS" }], "badgeLinkProps": [
    { text: "Astro", alt: "Astro logo", href: "https://astro.build/" },
    {
      text: "TailwindCSS",
      alt: "TailwindCSS logo",
      href: "https://tailwindcss.com/"
    }
  ], "description": "\u042F \u043F\u0435\u0440\u0435\u0434\u0435\u043B\u0430\u043B \u0441\u0430\u0439\u0442, \u0447\u0442\u043E\u0431\u044B \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0438\u0442\u044C \u0443\u0441\u043B\u0443\u0433\u0438 \u043F\u043E \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0435 \u0432\u043E\u0434\u044B \u0432 \u0411\u0435\u043B\u043E\u0433\u043E\u0440\u043E\u0434\u043A\u0435 \u0438 \u0441\u043E\u0441\u0435\u0434\u043D\u0438\u0445 \u0440\u0435\u0433\u0438\u043E\u043D\u0430\u0445. \u0421\u0430\u0439\u0442 \u0438\u043C\u0435\u0435\u0442 \u043F\u0440\u0438\u0432\u043B\u0435\u043A\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u0434\u0438\u0437\u0430\u0439\u043D, \u0443\u0434\u043E\u0431\u043D\u0443\u044E \u0432\u0435\u0440\u0441\u0442\u043A\u0443 \u0438 \u043F\u0440\u043E\u0441\u0442\u0443\u044E \u0438\u043D\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044E \u0441 \u0430\u043D\u0430\u043B\u0438\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u043C\u0438 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u0430\u043C\u0438 \u0434\u043B\u044F \u043F\u043E\u0432\u044B\u0448\u0435\u043D\u0438\u044F \u0432\u043E\u0432\u043B\u0435\u0447\u0435\u043D\u043D\u043E\u0441\u0442\u0438 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432. \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0438 \u043C\u043E\u0433\u0443\u0442 \u043B\u0435\u0433\u043A\u043E \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443 \u043D\u0430 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0443 \u0432\u043E\u0434\u044B \u0447\u0435\u0440\u0435\u0437 \u0444\u043E\u0440\u043C\u0443 \u0437\u0430\u043A\u0430\u0437\u0430 \u0438 \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0443\u0434\u043E\u0431\u043D\u044B\u0439 \u0434\u043E\u0441\u0442\u0443\u043F \u043A \u0431\u0443\u0442\u0438\u043B\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u043E\u0439 \u043F\u0438\u0442\u044C\u0435\u0432\u043E\u0439 \u0432\u043E\u0434\u0435." })} ${renderComponent($$result2, "PortfolioCard", $$PortfolioCard, { "img": cover, "alt": title, "site": "https://vratskyi.github.io/", "title": "\u041F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0439 \u0431\u043B\u043E\u0433 \u0438 \u043F\u043E\u0440\u0442\u0444\u043E\u043B\u0438\u043E", "badgeProps": [{ text: "JavaScript" }, { text: "HTML/CSS" }], "badgeLinkProps": [
    { text: "Astro", alt: "Astro logo", href: "https://astro.build/" },
    {
      text: "TailwindCSS",
      alt: "TailwindCSS logo",
      href: "https://tailwindcss.com/"
    }
  ], "description": "\u041F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u043C \u0432\u0430\u0448\u0435\u043C\u0443 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u044E \u0443\u043D\u0438\u0432\u0435\u0440\u0441\u0430\u043B\u044C\u043D\u044B\u0439 \u0438 \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u044B\u0439 \u0448\u0430\u0431\u043B\u043E\u043D, \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0430\u043D\u043D\u044B\u0439 \u0434\u043B\u044F \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F \u0441 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0435\u0439 \u0432\u0435\u0440\u0441\u0438\u0435\u0439 Astro. \u042D\u0442\u043E\u0442 \u0448\u0430\u0431\u043B\u043E\u043D \u043C\u043E\u0436\u0435\u0442 \u043F\u043E\u0445\u0432\u0430\u0441\u0442\u0430\u0442\u044C\u0441\u044F \u0447\u0430\u0441\u0442\u044B\u043C\u0438 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044F\u043C\u0438, \u0443\u0434\u043E\u0431\u043D\u044B\u043C \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u043E\u043C \u0438 \u0441\u043E\u0432\u043C\u0435\u0441\u0442\u0438\u043C\u043E\u0441\u0442\u044C\u044E \u0441 \u0440\u0430\u0437\u043B\u0438\u0447\u043D\u044B\u043C\u0438 \u0446\u0435\u043B\u044F\u043C\u0438. \u0418\u0434\u0435\u0430\u043B\u044C\u043D\u043E \u043F\u043E\u0434\u0445\u043E\u0434\u0438\u0442 \u0434\u043B\u044F \u0434\u0435\u043C\u043E\u043D\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u043F\u043E\u0440\u0442\u0444\u043E\u043B\u0438\u043E, \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F \u0441\u0442\u0430\u0442\u0435\u0439 \u0432 \u0431\u043B\u043E\u0433\u0435 \u0438 \u043B\u0438\u0447\u043D\u043E\u0433\u043E \u0440\u0430\u0441\u0441\u043A\u0430\u0437\u0430. \u0420\u0430\u0441\u043A\u0440\u043E\u0439\u0442\u0435 \u043F\u043E\u0442\u0435\u043D\u0446\u0438\u0430\u043B \u0434\u043B\u044F \u0441\u0430\u043C\u043E\u0432\u044B\u0440\u0430\u0436\u0435\u043D\u0438\u044F \u0431\u0435\u0437 \u043E\u0441\u043E\u0431\u044B\u0445 \u0443\u0441\u0438\u043B\u0438\u0439 \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u044D\u0442\u043E\u0433\u043E \u0448\u0430\u0431\u043B\u043E\u043D\u0430." })} ${renderComponent($$result2, "PortfolioCard", $$PortfolioCard, { "img": water, "alt": title, "site": "https://old.h2ovoda.com.ua/", "title": "\u0421\u0430\u0439\u0442 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438 \u0432\u043E\u0434\u044B 1.0", "badgeProps": [{ text: "JavaScript" }, { text: "HTML/CSS" }], "badgeLinkProps": [
    { text: "Astro", alt: "Astro logo", href: "https://astro.build/" },
    {
      text: "TailwindCSS",
      alt: "TailwindCSS logo",
      href: "https://tailwindcss.com/"
    }
  ], "description": "\u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0430\u043D\u043D\u044B\u0439 \u043C\u043D\u043E\u0439 \u0441\u0430\u0439\u0442 \u043F\u0440\u0435\u0434\u043B\u0430\u0433\u0430\u0435\u0442 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0443 \u0432\u043E\u0434\u044B \u0432 \u0411\u0435\u043B\u043E\u0433\u043E\u0440\u043E\u0434\u043A\u0435 \u0438 \u043E\u043A\u0440\u0435\u0441\u0442\u043D\u043E\u0441\u0442\u044F\u0445. \u041E\u043D \u0438\u043C\u0435\u0435\u0442 \u043F\u0440\u0438\u0432\u043B\u0435\u043A\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u0434\u0438\u0437\u0430\u0439\u043D, \u0438\u043D\u0442\u0443\u0438\u0442\u0438\u0432\u043D\u043E \u043F\u043E\u043D\u044F\u0442\u043D\u0443\u044E \u0432\u0435\u0440\u0441\u0442\u043A\u0443 \u0438 \u0438\u043D\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044E \u0441 \u0430\u043D\u0430\u043B\u0438\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u043C\u0438 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u0430\u043C\u0438 \u0434\u043B\u044F \u043F\u0440\u0438\u0432\u043B\u0435\u0447\u0435\u043D\u0438\u044F \u0431\u043E\u043B\u044C\u0448\u0435\u0433\u043E \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u0430 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432. \u041F\u043E\u0441\u0435\u0442\u0438\u0442\u0435\u043B\u0438 \u043C\u043E\u0433\u0443\u0442 \u043B\u0435\u0433\u043A\u043E \u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443 \u043D\u0430 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0443 \u0432\u043E\u0434\u044B \u0447\u0435\u0440\u0435\u0437 \u0444\u043E\u0440\u043C\u0443 \u0437\u0430\u043A\u0430\u0437\u0430 \u0438 \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0434\u043E\u0441\u0442\u0443\u043F \u043A \u0431\u0443\u0442\u0438\u043B\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u043E\u0439 \u043F\u0438\u0442\u044C\u0435\u0432\u043E\u0439 \u0432\u043E\u0434\u0435." })} ${renderComponent($$result2, "PortfolioCard", $$PortfolioCard, { "img": byshikat, "alt": title, "site": "https://byshikat.com/", "title": "Byshikat \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442-\u043C\u0430\u0433\u0430\u0437\u0438\u043D \u043E\u0431\u0443\u0432\u0438", "badgeProps": [
    { text: "PHP" },
    { text: "ACF" },
    { text: "JavaScript" },
    { text: "HTML/CSS" }
  ], "badgeLinkProps": [
    {
      text: "WordPress",
      alt: "WordPress logo",
      href: "https://wordpress.com/"
    }
  ], "description": "\u041F\u0440\u043E\u0430\u043D\u0430\u043B\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u0432 \u0446\u0435\u043B\u0435\u0432\u0443\u044E \u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044E, \u044F \u043F\u043E\u043D\u044F\u043B, \u0447\u0442\u043E \u043D\u0443\u0436\u043D\u043E \u0441\u0434\u0435\u043B\u0430\u0442\u044C \u0447\u0442\u043E-\u0442\u043E \u043F\u043E\u0445\u043E\u0436\u0435\u0435 \u043D\u0430 \u043C\u043E\u0434\u0435\u043B\u044C \u043F\u043E\u0432\u0435\u0434\u0435\u043D\u0438\u044F \u0432 Instagram, \u0430 \u0442\u0430\u043A\u0436\u0435 \u043F\u043E\u0445\u043E\u0436\u0438\u0439 \u0445\u043E\u0442\u044F \u0431\u044B \u043E\u0442\u0434\u0430\u043B\u0435\u043D\u043D\u043E \u0434\u0438\u0437\u0430\u0439\u043D, \u0431\u043B\u0430\u0433\u043E\u0434\u0430\u0440\u044F \u043D\u0430\u0431\u043E\u0440\u0443 \u0440\u0435\u0448\u0435\u043D\u0438\u0439 \u043F\u0440\u043E\u0434\u0430\u0436\u0438 \u0438\u0437 \u0438\u0445 instagram-\u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0430 \u043F\u0435\u0440\u0435\u0448\u043B\u0438 \u0432 \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442-\u043C\u0430\u0433\u0430\u0437\u0438\u043D \u0438 \u0443\u0432\u0435\u043B\u0438\u0447\u0438\u043B\u0438\u0441\u044C \u043D\u0430 1000%" })} ${renderComponent($$result2, "PortfolioCard", $$PortfolioCard, { "img": lmd, "alt": title, "site": "https://lmd.lviv.ua/", "title": "\u0411\u0443\u043C\u0430\u0436\u043D\u044B\u0435 \u043F\u043E\u0434\u0430\u0440\u043E\u0447\u043D\u044B\u0435 \u043F\u0430\u043A\u0435\u0442\u044B", "badgeProps": [
    { text: "PHP" },
    { text: "ACF" },
    { text: "JavaScript" },
    { text: "HTML/CSS" }
  ], "badgeLinkProps": [
    {
      text: "WordPress",
      alt: "WordPress logo",
      href: "https://wordpress.com/"
    }
  ], "description": "\u042D\u0442\u043E\u0442 \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442-\u043C\u0430\u0433\u0430\u0437\u0438\u043D \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u043D\u0430 \u0431\u0430\u0437\u0435 WordPress CMS \u0438 WooCommerce, \u044F \u043F\u0435\u0440\u0435\u0434\u0435\u043B\u0430\u043B \u0441\u0442\u0430\u0440\u044B\u0439 \u0441\u0430\u0439\u0442 \u043F\u043E\u0434 \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0439 \u0434\u0438\u0437\u0430\u0439\u043D \u0438 \u043E\u043F\u0442\u0438\u043C\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u043B \u0432\u0440\u0435\u043C\u044F \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438, \u0431\u043B\u0430\u0433\u043E\u0434\u0430\u0440\u044F \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0441\u043D\u043E\u043C\u0443 \u043F\u043E\u0434\u0445\u043E\u0434\u0443 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043F\u043E\u0441\u0435\u0442\u0438\u0442\u0435\u043B\u0435\u0439 \u0438 \u043F\u0440\u043E\u0434\u0430\u0436 \u0443\u0432\u0435\u043B\u0438\u0447\u0438\u043B\u043E\u0441\u044C. \u0421\u0435\u0439\u0447\u0430\u0441 \u0441\u0430\u0439\u0442 \u043D\u0430\u0445\u043E\u0434\u0438\u0442\u0441\u044F \u0432 \u0442\u043E\u043F\u0435 google \u0432 \u0423\u043A\u0440\u0430\u0438\u043D\u0435." })} </div> </section> ` })}`;
}, "C:/Users/vratskyi/Documents/Projects/vratskyi.github.io/src/pages/ru/portfolio.astro", void 0);

const $$file = "C:/Users/vratskyi/Documents/Projects/vratskyi.github.io/src/pages/ru/portfolio.astro";
const $$url = "/ru/portfolio";

const portfolio = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Portfolio,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { portfolio as a, portfolio$1 as p };
