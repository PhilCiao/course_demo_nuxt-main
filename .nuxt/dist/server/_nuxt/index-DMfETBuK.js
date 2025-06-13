import { _ as _export_sfc, a as __nuxt_component_0 } from "../server.mjs";
import { ref, computed, mergeProps, withCtx, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import "ofetch";
import "#internal/nuxt/paths";
import "/Users/philmac/Documents/AI/course_demo_nuxt-main/node_modules/hookable/dist/index.mjs";
import "/Users/philmac/Documents/AI/course_demo_nuxt-main/node_modules/unctx/dist/index.mjs";
import "/Users/philmac/Documents/AI/course_demo_nuxt-main/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/philmac/Documents/AI/course_demo_nuxt-main/node_modules/radix3/dist/index.mjs";
import "/Users/philmac/Documents/AI/course_demo_nuxt-main/node_modules/defu/dist/defu.mjs";
import "/Users/philmac/Documents/AI/course_demo_nuxt-main/node_modules/ufo/dist/index.mjs";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const currentLang = ref("zh");
    ref(false);
    const translations = {
      zh: {
        hero: {
          title: "立即开启您的人生蜕变之旅",
          subtitle: "专业人生教练 | 个人成长导师 | 职业发展顾问",
          businessLink: "了解我的服务"
        },
        stats: {
          clients: "服务客户",
          success: "成功率",
          experience: "年经验"
        },
        services: {
          growth: {
            title: "个人成长",
            description: "突破自我限制，发现内在潜能，实现个人价值"
          },
          career: {
            title: "职业发展",
            description: "明确职业方向，提升职场竞争力，实现职业理想"
          },
          relationships: {
            title: "亲密关系",
            description: "建立健康关系，提升沟通能力，创造幸福生活"
          }
        },
        cta: {
          intro: "无论您面临什么挑战，我都能帮助您找到答案，实现突破",
          button: "预约免费咨询"
        },
        support: {
          chat: {
            title: "在线咨询",
            description: "24小时在线支持",
            button: "开始对话"
          },
          phone: {
            title: "电话支持",
            description: "+86 1234567890",
            button: "立即拨打"
          },
          email: {
            title: "邮件支持",
            description: "phil@healingman.vip",
            button: "发送邮件"
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
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))} data-v-d81ffb1b><div class="hero" data-v-d81ffb1b><div class="hero-content" data-v-d81ffb1b><div class="language-switch" data-v-d81ffb1b><button class="${ssrRenderClass([{ active: currentLang.value === "zh" }, "lang-btn"])}" data-v-d81ffb1b>中文</button><button class="${ssrRenderClass([{ active: currentLang.value === "en" }, "lang-btn"])}" data-v-d81ffb1b>English</button></div><div class="hero-text" data-v-d81ffb1b><h1 data-v-d81ffb1b>${ssrInterpolate(t.value.hero.title)}</h1><p class="subtitle" data-v-d81ffb1b>${ssrInterpolate(t.value.hero.subtitle)}</p></div><div class="hero-actions" data-v-d81ffb1b><div class="action-wrapper" data-v-d81ffb1b>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/business",
        class: "business-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(t.value.hero.businessLink)}`);
          } else {
            return [
              createTextVNode(toDisplayString(t.value.hero.businessLink), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="bell-icon" data-v-d81ffb1b> 🔔 <div class="bell-ripple" data-v-d81ffb1b></div></div></div></div><div class="hero-stats" data-v-d81ffb1b><div class="stat-item" data-v-d81ffb1b><span class="stat-number" data-v-d81ffb1b>500+</span><span class="stat-label" data-v-d81ffb1b>${ssrInterpolate(t.value.stats.clients)}</span></div><div class="stat-item" data-v-d81ffb1b><span class="stat-number" data-v-d81ffb1b>98%</span><span class="stat-label" data-v-d81ffb1b>${ssrInterpolate(t.value.stats.success)}</span></div><div class="stat-item" data-v-d81ffb1b><span class="stat-number" data-v-d81ffb1b>10+</span><span class="stat-label" data-v-d81ffb1b>${ssrInterpolate(t.value.stats.experience)}</span></div></div></div><div class="hero-decoration" data-v-d81ffb1b><div class="decoration-circle circle-1" data-v-d81ffb1b></div><div class="decoration-circle circle-2" data-v-d81ffb1b></div><div class="decoration-circle circle-3" data-v-d81ffb1b></div></div></div><div class="services" data-v-d81ffb1b><div class="service-card" data-v-d81ffb1b><div class="service-icon" data-v-d81ffb1b>🌱</div><h2 data-v-d81ffb1b>${ssrInterpolate(t.value.services.growth.title)}</h2><p data-v-d81ffb1b>${ssrInterpolate(t.value.services.growth.description)}</p></div><div class="service-card" data-v-d81ffb1b><div class="service-icon" data-v-d81ffb1b>💼</div><h2 data-v-d81ffb1b>${ssrInterpolate(t.value.services.career.title)}</h2><p data-v-d81ffb1b>${ssrInterpolate(t.value.services.career.description)}</p></div><div class="service-card" data-v-d81ffb1b><div class="service-icon" data-v-d81ffb1b>❤️</div><h2 data-v-d81ffb1b>${ssrInterpolate(t.value.services.relationships.title)}</h2><p data-v-d81ffb1b>${ssrInterpolate(t.value.services.relationships.description)}</p></div></div><div class="cta-section" data-v-d81ffb1b><p class="intro" data-v-d81ffb1b>${ssrInterpolate(t.value.cta.intro)}</p><button class="cta-button" data-v-d81ffb1b>${ssrInterpolate(t.value.cta.button)}</button></div><div class="customer-service" data-v-d81ffb1b><div class="cs-card" data-v-d81ffb1b><div class="cs-icon" data-v-d81ffb1b>💬</div><h3 data-v-d81ffb1b>${ssrInterpolate(t.value.support.chat.title)}</h3><p data-v-d81ffb1b>${ssrInterpolate(t.value.support.chat.description)}</p><button class="cs-button" data-v-d81ffb1b>${ssrInterpolate(t.value.support.chat.button)}</button></div><div class="cs-card" data-v-d81ffb1b><div class="cs-icon" data-v-d81ffb1b>📞</div><h3 data-v-d81ffb1b>${ssrInterpolate(t.value.support.phone.title)}</h3><p data-v-d81ffb1b>${ssrInterpolate(t.value.support.phone.description)}</p><button class="cs-button" data-v-d81ffb1b>${ssrInterpolate(t.value.support.phone.button)}</button></div><div class="cs-card" data-v-d81ffb1b><div class="cs-icon" data-v-d81ffb1b>✉️</div><h3 data-v-d81ffb1b>${ssrInterpolate(t.value.support.email.title)}</h3><p data-v-d81ffb1b>${ssrInterpolate(t.value.support.email.description)}</p><button class="cs-button" data-v-d81ffb1b>${ssrInterpolate(t.value.support.email.button)}</button></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d81ffb1b"]]);
export {
  index as default
};
//# sourceMappingURL=index-DMfETBuK.js.map
