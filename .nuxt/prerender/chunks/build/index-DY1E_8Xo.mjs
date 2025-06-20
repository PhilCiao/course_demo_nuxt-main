import { ref, computed, mergeProps, useSSRContext } from 'file:///Users/philmac/Documents/AI/course_demo_nuxt-main/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrInterpolate } from 'file:///Users/philmac/Documents/AI/course_demo_nuxt-main/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './server.mjs';
import 'file:///Users/philmac/Documents/AI/course_demo_nuxt-main/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file:///Users/philmac/Documents/AI/course_demo_nuxt-main/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/philmac/Documents/AI/course_demo_nuxt-main/node_modules/h3/dist/index.mjs';
import 'file:///Users/philmac/Documents/AI/course_demo_nuxt-main/node_modules/ufo/dist/index.mjs';
import '../nitro/nitro.mjs';
import 'file:///Users/philmac/Documents/AI/course_demo_nuxt-main/node_modules/destr/dist/index.mjs';
import 'file:///Users/philmac/Documents/AI/course_demo_nuxt-main/node_modules/hookable/dist/index.mjs';
import 'file:///Users/philmac/Documents/AI/course_demo_nuxt-main/node_modules/node-mock-http/dist/index.mjs';
import 'file:///Users/philmac/Documents/AI/course_demo_nuxt-main/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/philmac/Documents/AI/course_demo_nuxt-main/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/philmac/Documents/AI/course_demo_nuxt-main/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/philmac/Documents/AI/course_demo_nuxt-main/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/philmac/Documents/AI/course_demo_nuxt-main/node_modules/ohash/dist/index.mjs';
import 'file:///Users/philmac/Documents/AI/course_demo_nuxt-main/node_modules/klona/dist/index.mjs';
import 'file:///Users/philmac/Documents/AI/course_demo_nuxt-main/node_modules/defu/dist/defu.mjs';
import 'file:///Users/philmac/Documents/AI/course_demo_nuxt-main/node_modules/scule/dist/index.mjs';
import 'file:///Users/philmac/Documents/AI/course_demo_nuxt-main/node_modules/unctx/dist/index.mjs';
import 'file:///Users/philmac/Documents/AI/course_demo_nuxt-main/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/philmac/Documents/AI/course_demo_nuxt-main/node_modules/pathe/dist/index.mjs';
import 'file:///Users/philmac/Documents/AI/course_demo_nuxt-main/node_modules/unhead/dist/server.mjs';
import 'file:///Users/philmac/Documents/AI/course_demo_nuxt-main/node_modules/devalue/index.js';
import 'file:///Users/philmac/Documents/AI/course_demo_nuxt-main/node_modules/unhead/dist/utils.mjs';
import 'file:///Users/philmac/Documents/AI/course_demo_nuxt-main/node_modules/unhead/dist/plugins.mjs';
import 'file:///Users/philmac/Documents/AI/course_demo_nuxt-main/node_modules/vue-router/dist/vue-router.node.mjs';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const currentLang = ref("zh");
    ref(false);
    const translations = {
      zh: {
        hero: {
          title: "\u201C\u5FD9\uFF0C\u4E0D\u4E00\u5B9A\u662F\u5728\u89E3\u51B3\u95EE\u9898\uFF0C\n\u5F88\u6709\u53EF\u80FD\u662F\u5728\u5236\u9020\u95EE\u9898\u201D",
          subtitle: "",
          businessLink: ""
        },
        stats: {
          clients: "\u670D\u52A1\u5BA2\u6237",
          success: "\u6210\u529F\u7387",
          experience: "\u5E74\u7ECF\u9A8C"
        },
        services: {
          growth: {
            title: "\u4E2A\u4EBA\u6210\u957F",
            description: "\u7A81\u7834\u81EA\u6211\u9650\u5236\uFF0C\u53D1\u73B0\u5185\u5728\u6F5C\u80FD\uFF0C\u5B9E\u73B0\u4E2A\u4EBA\u4EF7\u503C"
          },
          career: {
            title: "\u804C\u4E1A\u53D1\u5C55",
            description: "\u660E\u786E\u804C\u4E1A\u65B9\u5411\uFF0C\u63D0\u5347\u804C\u573A\u7ADE\u4E89\u529B\uFF0C\u5B9E\u73B0\u804C\u4E1A\u7406\u60F3"
          },
          relationships: {
            title: "\u4EB2\u5BC6\u5173\u7CFB",
            description: "\u5EFA\u7ACB\u5065\u5EB7\u5173\u7CFB\uFF0C\u63D0\u5347\u6C9F\u901A\u80FD\u529B\uFF0C\u521B\u9020\u5E78\u798F\u751F\u6D3B"
          }
        },
        cta: {
          intro: "\u65E0\u8BBA\u60A8\u9762\u4E34\u4EC0\u4E48\u6311\u6218\uFF0C\u6211\u90FD\u80FD\u5E2E\u52A9\u60A8\u627E\u5230\u7B54\u6848\uFF0C\u5B9E\u73B0\u7A81\u7834",
          button: "\u9884\u7EA6\u514D\u8D39\u54A8\u8BE2"
        },
        support: {
          chat: {
            title: "\u5728\u7EBF\u54A8\u8BE2",
            description: "24\u5C0F\u65F6\u5728\u7EBF\u652F\u6301",
            button: "\u5F00\u59CB\u5BF9\u8BDD"
          },
          phone: {
            title: "\u7535\u8BDD\u652F\u6301",
            description: "+86 1234567890",
            button: "\u7ACB\u5373\u62E8\u6253"
          },
          email: {
            title: "\u90AE\u4EF6\u652F\u6301",
            description: "phil@healingman.vip",
            button: "\u53D1\u9001\u90AE\u4EF6"
          }
        }
      },
      en: {
        hero: {
          title: "Transform Your Life Journey",
          subtitle: "Professional Life Coach | Personal Growth Mentor | Career Development Consultant",
          businessLink: "Explore My Services"
        },
        stats: {
          clients: "Clients Served",
          success: "Success Rate",
          experience: "Years Experience"
        },
        services: {
          growth: {
            title: "Personal Growth",
            description: "Break through limitations, discover your potential, achieve personal value"
          },
          career: {
            title: "Career Development",
            description: "Clarify career direction, enhance workplace competitiveness, realize career ideals"
          },
          relationships: {
            title: "Relationships",
            description: "Build healthy relationships, improve communication, create a happy life"
          }
        },
        cta: {
          intro: "Whatever challenges you face, I can help you find answers and achieve breakthroughs",
          button: "Book Free Consultation"
        },
        support: {
          chat: {
            title: "Live Chat",
            description: "24/7 Online Support",
            button: "Start Chat"
          },
          phone: {
            title: "Phone Support",
            description: "+86 1234567890",
            button: "Call Now"
          },
          email: {
            title: "Email Support",
            description: "phil@healingman.vip",
            button: "Send Email"
          }
        }
      }
    };
    const t = computed(() => translations[currentLang.value]);
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))} data-v-f88b79f6><div class="hero" data-v-f88b79f6><div class="hero-content" data-v-f88b79f6><div class="hero-text" data-v-f88b79f6><h1 data-v-f88b79f6>${(_a = t.value.hero.title.replace(/\n/g, "<br>")) != null ? _a : ""}</h1></div><div class="hero-stats" data-v-f88b79f6></div></div><div class="hero-decoration" data-v-f88b79f6><div class="decoration-circle circle-1" data-v-f88b79f6></div><div class="decoration-circle circle-2" data-v-f88b79f6></div><div class="decoration-circle circle-3" data-v-f88b79f6></div></div></div><div class="services" data-v-f88b79f6><div class="service-card" data-v-f88b79f6><div class="service-icon" data-v-f88b79f6>\u{1F331}</div><h2 data-v-f88b79f6>${ssrInterpolate(t.value.services.growth.title)}</h2><p data-v-f88b79f6>${ssrInterpolate(t.value.services.growth.description)}</p></div><div class="service-card" data-v-f88b79f6><div class="service-icon" data-v-f88b79f6>\u{1F4BC}</div><h2 data-v-f88b79f6>${ssrInterpolate(t.value.services.career.title)}</h2><p data-v-f88b79f6>${ssrInterpolate(t.value.services.career.description)}</p></div><div class="service-card" data-v-f88b79f6><div class="service-icon" data-v-f88b79f6>\u2764\uFE0F</div><h2 data-v-f88b79f6>${ssrInterpolate(t.value.services.relationships.title)}</h2><p data-v-f88b79f6>${ssrInterpolate(t.value.services.relationships.description)}</p></div></div><div class="cta-section" data-v-f88b79f6><p class="intro" data-v-f88b79f6>${ssrInterpolate(t.value.cta.intro)}</p><button class="cta-button" data-v-f88b79f6>${ssrInterpolate(t.value.cta.button)}</button></div><div class="customer-service" data-v-f88b79f6><div class="cs-card" data-v-f88b79f6><div class="cs-icon" data-v-f88b79f6>\u{1F4AC}</div><h3 data-v-f88b79f6>${ssrInterpolate(t.value.support.chat.title)}</h3><p data-v-f88b79f6>${ssrInterpolate(t.value.support.chat.description)}</p><button class="cs-button" data-v-f88b79f6>${ssrInterpolate(t.value.support.chat.button)}</button></div><div class="cs-card" data-v-f88b79f6><div class="cs-icon" data-v-f88b79f6>\u{1F4DE}</div><h3 data-v-f88b79f6>${ssrInterpolate(t.value.support.phone.title)}</h3><p data-v-f88b79f6>${ssrInterpolate(t.value.support.phone.description)}</p><button class="cs-button" data-v-f88b79f6>${ssrInterpolate(t.value.support.phone.button)}</button></div><div class="cs-card" data-v-f88b79f6><div class="cs-icon" data-v-f88b79f6>\u2709\uFE0F</div><h3 data-v-f88b79f6>${ssrInterpolate(t.value.support.email.title)}</h3><p data-v-f88b79f6>${ssrInterpolate(t.value.support.email.description)}</p><button class="cs-button" data-v-f88b79f6>${ssrInterpolate(t.value.support.email.button)}</button></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f88b79f6"]]);

export { index as default };
//# sourceMappingURL=index-DY1E_8Xo.mjs.map
