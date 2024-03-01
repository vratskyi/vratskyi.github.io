import { _ as __astro_tag_component__, w as Fragment, z as createVNode } from './astro_U7cLjtnz.mjs';
import { a as $$Image } from './pages/generic_CKoPNF1-.mjs';
import 'clsx';

const frontmatter = {
  "slug": "what-happened-in-a-month-my-blog",
  "author": "Oleksii",
  "isDraft": false,
  "title": "What happened in a month / my blog",
  "description": "Updated my site with improved UI, added projects, and integrated astro-compress. Future plans: pagination, language translation, sitemap.xml, possible headless CMS. Grateful for Astro team's recognition. Stay tuned for more on GitHub! Bye-bye!",
  "image": "../images/what-happened-in-a-month-my-vlog.png",
  "tags": ["monthUpdate"],
  "categories": ["Blog"],
  "publishDate": "22/02/2024",
  "language": "en"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "where-have-i-been",
    "text": "Where have I been?"
  }, {
    "depth": 3,
    "slug": "design",
    "text": "Design:"
  }, {
    "depth": 3,
    "slug": "development",
    "text": "Development:"
  }, {
    "depth": 3,
    "slug": "link-to-site-click-me",
    "text": "Link to site: click me"
  }, {
    "depth": 2,
    "slug": "well-and-i-didnt-forget-to-update-my-site",
    "text": "Well, and I didn\u2019t forget to update my site"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    em: "em",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "Wow, hi, everybody. It\u2019s good to see you all here, I haven\u2019t been here in a while.)"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "where-have-i-been",
      children: "Where have I been?"
    }), "\n", createVNode(_components.p, {
      children: "I was working on updating an old site that I did a year ago, a customer asked me to\r\nto update the site, so that\u2019s what I\u2019ve been doing.)"
    }), "\n", createVNode(_components.h3, {
      id: "design",
      children: "Design:"
    }), "\n", createVNode("img", {
      src: "https://i.ibb.co/2gDfRjr/figma-design.jpg",
      alt: "figma-design"
    }), "\n", createVNode(_components.h3, {
      id: "development",
      children: "Development:"
    }), "\n", createVNode("img", {
      class: "mb-5",
      src: "https://i.ibb.co/ZH36vn1/timeline.png",
      alt: "astro-ov",
      width: "800px",
      height: "600px"
    }), "\n", createVNode(_components.h3, {
      id: "link-to-site-click-me",
      children: ["Link to site: ", createVNode("a", {
        href: "https://h2ovoda.com.ua",
        target: "_blank",
        children: "click me"
      })]
    }), "\n", createVNode(_components.h2, {
      id: "well-and-i-didnt-forget-to-update-my-site",
      children: "Well, and I didn\u2019t forget to update my site"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Updated:"
      })
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Updated user interface"
      }), "\n", createVNode(_components.li, {
        children: "Updated style file"
      }), "\n", createVNode(_components.li, {
        children: ["Fixed a bug where ", createVNode("code", {
          children: "@tailwindcss/typography "
        }), " was not being applied to the blog"]
      }), "\n", createVNode(_components.li, {
        children: "Added automatic sorting of posts by date, from new to old"
      }), "\n", createVNode(_components.li, {
        children: "Removed unnecessary code from input.css"
      }), "\n", createVNode(_components.li, {
        children: ["Added astro-compress package to compress files during project build, default settings: ", createVNode("code", {
          children: " CSS: true, HTML: false, Image: true, JavaScript: true, SVG: false "
        })]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "What I plan to do in future updates:"
      })
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Add pagination to the blog page"
      }), "\n", createVNode(_components.li, {
        children: "Integrate i18n, translate the site into another language"
      }), "\n", createVNode(_components.li, {
        children: "Add sitemap.xml generation"
      }), "\n", createVNode(_components.li, {
        children: "Maybe add some hedless cms"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["Separately wanted to say a big thank you to the Astro team for adding my template here: ", createVNode(_components.a, {
        href: "https://astro.build/themes/details/ov-template/",
        children: createVNode(_components.em, {
          children: createVNode(_components.strong, {
            children: "click me"
          })
        })
      }), "."]
    }), "\n", createVNode("img", {
      class: "mb-5",
      src: "https://i.ibb.co/51k3DSW/astro-ov.png",
      alt: "astro-ov",
      width: "800px",
      height: "600px"
    }), "\n", createVNode(_components.p, {
      children: ["Also thanks to everyone who liked the template in my ", createVNode(_components.a, {
        href: "https://github.com/vratskyi/vratskyi.github.io",
        children: createVNode(_components.em, {
          children: createVNode(_components.strong, {
            children: "GitHub"
          })
        })
      }), ", stay tuned, it\u2019s only going to get better, bye bye)."]
    })]
  });
}
function MDXContent(props = {}) {
  const {
    wrapper: MDXLayout
  } = props.components || {};
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
__astro_tag_component__(getHeadings, "astro:jsx");
__astro_tag_component__(MDXContent, "astro:jsx");
const url = "src/content/posts/en/what-happened-in-a-month-my-blog.mdx";
const file = "C:/Users/vratskyi/Documents/Projects/vratskyi.github.io/src/content/posts/en/what-happened-in-a-month-my-blog.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/vratskyi/Documents/Projects/vratskyi.github.io/src/content/posts/en/what-happened-in-a-month-my-blog.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
