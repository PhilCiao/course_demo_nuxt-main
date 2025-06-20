import { ref, computed, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
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
          title: "“忙，不一定是在解决问题，\n很有可能是在制造问题”",
          subtitle: "",
          businessLink: ""
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))} data-v-f88b79f6><div class="hero" data-v-f88b79f6><div class="hero-content" data-v-f88b79f6><div class="hero-text" data-v-f88b79f6><h1 data-v-f88b79f6>${t.value.hero.title.replace(/\n/g, "<br>") ?? ""}</h1></div><div class="hero-stats" data-v-f88b79f6></div></div><div class="hero-decoration" data-v-f88b79f6><div class="decoration-circle circle-1" data-v-f88b79f6></div><div class="decoration-circle circle-2" data-v-f88b79f6></div><div class="decoration-circle circle-3" data-v-f88b79f6></div></div></div><div class="services" data-v-f88b79f6><div class="service-card" data-v-f88b79f6><div class="service-icon" data-v-f88b79f6>🌱</div><h2 data-v-f88b79f6>${ssrInterpolate(t.value.services.growth.title)}</h2><p data-v-f88b79f6>${ssrInterpolate(t.value.services.growth.description)}</p></div><div class="service-card" data-v-f88b79f6><div class="service-icon" data-v-f88b79f6>💼</div><h2 data-v-f88b79f6>${ssrInterpolate(t.value.services.career.title)}</h2><p data-v-f88b79f6>${ssrInterpolate(t.value.services.career.description)}</p></div><div class="service-card" data-v-f88b79f6><div class="service-icon" data-v-f88b79f6>❤️</div><h2 data-v-f88b79f6>${ssrInterpolate(t.value.services.relationships.title)}</h2><p data-v-f88b79f6>${ssrInterpolate(t.value.services.relationships.description)}</p></div></div><div class="cta-section" data-v-f88b79f6><p class="intro" data-v-f88b79f6>${ssrInterpolate(t.value.cta.intro)}</p><button class="cta-button" data-v-f88b79f6>${ssrInterpolate(t.value.cta.button)}</button></div><div class="customer-service" data-v-f88b79f6><div class="cs-card" data-v-f88b79f6><div class="cs-icon" data-v-f88b79f6>💬</div><h3 data-v-f88b79f6>${ssrInterpolate(t.value.support.chat.title)}</h3><p data-v-f88b79f6>${ssrInterpolate(t.value.support.chat.description)}</p><button class="cs-button" data-v-f88b79f6>${ssrInterpolate(t.value.support.chat.button)}</button></div><div class="cs-card" data-v-f88b79f6><div class="cs-icon" data-v-f88b79f6>📞</div><h3 data-v-f88b79f6>${ssrInterpolate(t.value.support.phone.title)}</h3><p data-v-f88b79f6>${ssrInterpolate(t.value.support.phone.description)}</p><button class="cs-button" data-v-f88b79f6>${ssrInterpolate(t.value.support.phone.button)}</button></div><div class="cs-card" data-v-f88b79f6><div class="cs-icon" data-v-f88b79f6>✉️</div><h3 data-v-f88b79f6>${ssrInterpolate(t.value.support.email.title)}</h3><p data-v-f88b79f6>${ssrInterpolate(t.value.support.email.description)}</p><button class="cs-button" data-v-f88b79f6>${ssrInterpolate(t.value.support.email.button)}</button></div></div></div>`);
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
export {
  index as default
};
//# sourceMappingURL=index-DY1E_8Xo.js.map
