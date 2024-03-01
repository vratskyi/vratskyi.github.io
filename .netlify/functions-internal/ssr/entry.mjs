import { renderers } from './renderers.mjs';
import { manifest } from './manifest_CRGkTayg.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';

const _page0 = () => import('./chunks/generic_D_JKLwzW.mjs');
const _page1 = () => import('./chunks/index_DToyGfqd.mjs');
const _page2 = () => import('./chunks/404_pJCF1EDP.mjs');
const _page3 = () => import('./chunks/about_CuR22hxo.mjs');
const _page4 = () => import('./chunks/index_dw6RaE6b.mjs');
const _page5 = () => import('./chunks/_.._BsGwjlhD.mjs');
const _page6 = () => import('./chunks/portfolio_7D8uYWzQ.mjs');
const _page7 = () => import('./chunks/index_BqNdUiWy.mjs');
const _page8 = () => import('./chunks/404_Dqd0jA1i.mjs');
const _page9 = () => import('./chunks/about_BaPuutao.mjs');
const _page10 = () => import('./chunks/index_CZPCzNFA.mjs');
const _page11 = () => import('./chunks/_.._Cns5EZez.mjs');
const _page12 = () => import('./chunks/portfolio_xErXodJ1.mjs');
const _page13 = () => import('./chunks/index_BIoOX2kt.mjs');
const _page14 = () => import('./chunks/index_NByEDO2x.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/blog/index.astro", _page1],
    ["src/pages/en/404.astro", _page2],
    ["src/pages/en/about.astro", _page3],
    ["src/pages/en/blog/index.astro", _page4],
    ["src/pages/en/blog/[...slug].astro", _page5],
    ["src/pages/en/portfolio.astro", _page6],
    ["src/pages/en/index.astro", _page7],
    ["src/pages/ru/404.astro", _page8],
    ["src/pages/ru/about.astro", _page9],
    ["src/pages/ru/blog/index.astro", _page10],
    ["src/pages/ru/blog/[...slug].astro", _page11],
    ["src/pages/ru/portfolio.astro", _page12],
    ["src/pages/ru/index.astro", _page13],
    ["src/pages/index.astro", _page14]
]);
const middleware = (_, next) => next();
const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware
});
const _args = {
    "middlewareSecret": "a4be9d25-7a04-45db-950c-936a03816b15"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
