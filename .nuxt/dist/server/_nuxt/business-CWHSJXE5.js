import { ref, computed, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
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
  __name: "business",
  __ssrInlineRender: true,
  setup(__props) {
    const currentLang = ref("zh");
    const translations = {
      zh: {
        header: {
          title: "专业服务",
          subtitle: "为您提供全方位的个人成长解决方案"
        },
        relationships: {
          title: "亲密关系指导",
          description: "帮助您建立和维护健康、持久的亲密关系，提升沟通能力，创造幸福生活。",
          featuresTitle: "服务内容",
          features: [
            "关系评估与诊断",
            "沟通技巧提升",
            "情感管理指导",
            "关系修复与重建",
            "长期关系维护策略"
          ],
          cta: "预约关系咨询"
        },
        career: {
          title: "职业发展咨询",
          description: "协助您明确职业方向，提升职场竞争力，实现职业理想。",
          featuresTitle: "服务内容",
          features: [
            "职业规划与定位",
            "简历优化与面试指导",
            "职场技能提升",
            "领导力发展",
            "职业转型指导"
          ],
          cta: "预约职业咨询"
        },
        growth: {
          title: "个人成长教练",
          description: "帮助您突破自我限制，发现内在潜能，实现个人价值。",
          featuresTitle: "服务内容",
          features: [
            "个人潜能开发",
            "目标设定与实现",
            "时间管理优化",
            "压力管理与平衡",
            "自我认知提升"
          ],
          cta: "预约成长咨询"
        }
      },
      en: {
        header: {
          title: "Professional Services",
          subtitle: "Comprehensive Personal Growth Solutions"
        },
        relationships: {
          title: "Relationship Coaching",
          description: "Help you build and maintain healthy, lasting relationships, improve communication skills, and create a happy life.",
          featuresTitle: "Services Include",
          features: [
            "Relationship Assessment",
            "Communication Skills Enhancement",
            "Emotional Management",
            "Relationship Repair",
            "Long-term Relationship Maintenance"
          ],
          cta: "Book Relationship Consultation"
        },
        career: {
          title: "Career Development",
          description: "Assist you in clarifying career direction, enhancing workplace competitiveness, and achieving career goals.",
          featuresTitle: "Services Include",
          features: [
            "Career Planning & Positioning",
            "Resume & Interview Coaching",
            "Professional Skills Enhancement",
            "Leadership Development",
            "Career Transition Guidance"
          ],
          cta: "Book Career Consultation"
        },
        growth: {
          title: "Personal Growth Coaching",
          description: "Help you break through limitations, discover your potential, and achieve personal value.",
          featuresTitle: "Services Include",
          features: [
            "Personal Potential Development",
            "Goal Setting & Achievement",
            "Time Management Optimization",
            "Stress Management & Balance",
            "Self-awareness Enhancement"
          ],
          cta: "Book Growth Consultation"
        }
      }
    };
    const t = computed(() => translations[currentLang.value]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "business-container" }, _attrs))} data-v-485b1346><div class="language-switch" data-v-485b1346><button class="${ssrRenderClass([{ active: currentLang.value === "zh" }, "lang-btn"])}" data-v-485b1346>中文</button><button class="${ssrRenderClass([{ active: currentLang.value === "en" }, "lang-btn"])}" data-v-485b1346>English</button></div><div class="page-header" data-v-485b1346><h1 data-v-485b1346>${ssrInterpolate(t.value.header.title)}</h1><p class="subtitle" data-v-485b1346>${ssrInterpolate(t.value.header.subtitle)}</p></div><div class="services-grid" data-v-485b1346><div class="service-section" id="relationships" data-v-485b1346><div class="service-header" data-v-485b1346><div class="service-icon" data-v-485b1346>❤️</div><h2 data-v-485b1346>${ssrInterpolate(t.value.relationships.title)}</h2></div><div class="service-content" data-v-485b1346><div class="service-description" data-v-485b1346><p data-v-485b1346>${ssrInterpolate(t.value.relationships.description)}</p></div><div class="service-features" data-v-485b1346><h3 data-v-485b1346>${ssrInterpolate(t.value.relationships.featuresTitle)}</h3><ul data-v-485b1346><!--[-->`);
      ssrRenderList(t.value.relationships.features, (feature, index) => {
        _push(`<li data-v-485b1346>${ssrInterpolate(feature)}</li>`);
      });
      _push(`<!--]--></ul></div><div class="service-cta" data-v-485b1346><button class="cta-button" data-v-485b1346>${ssrInterpolate(t.value.relationships.cta)}</button></div></div></div><div class="service-section" id="career" data-v-485b1346><div class="service-header" data-v-485b1346><div class="service-icon" data-v-485b1346>💼</div><h2 data-v-485b1346>${ssrInterpolate(t.value.career.title)}</h2></div><div class="service-content" data-v-485b1346><div class="service-description" data-v-485b1346><p data-v-485b1346>${ssrInterpolate(t.value.career.description)}</p></div><div class="service-features" data-v-485b1346><h3 data-v-485b1346>${ssrInterpolate(t.value.career.featuresTitle)}</h3><ul data-v-485b1346><!--[-->`);
      ssrRenderList(t.value.career.features, (feature, index) => {
        _push(`<li data-v-485b1346>${ssrInterpolate(feature)}</li>`);
      });
      _push(`<!--]--></ul></div><div class="service-cta" data-v-485b1346><button class="cta-button" data-v-485b1346>${ssrInterpolate(t.value.career.cta)}</button></div></div></div><div class="service-section" id="growth" data-v-485b1346><div class="service-header" data-v-485b1346><div class="service-icon" data-v-485b1346>🌱</div><h2 data-v-485b1346>${ssrInterpolate(t.value.growth.title)}</h2></div><div class="service-content" data-v-485b1346><div class="service-description" data-v-485b1346><p data-v-485b1346>${ssrInterpolate(t.value.growth.description)}</p></div><div class="service-features" data-v-485b1346><h3 data-v-485b1346>${ssrInterpolate(t.value.growth.featuresTitle)}</h3><ul data-v-485b1346><!--[-->`);
      ssrRenderList(t.value.growth.features, (feature, index) => {
        _push(`<li data-v-485b1346>${ssrInterpolate(feature)}</li>`);
      });
      _push(`<!--]--></ul></div><div class="service-cta" data-v-485b1346><button class="cta-button" data-v-485b1346>${ssrInterpolate(t.value.growth.cta)}</button></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/business.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const business = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-485b1346"]]);
export {
  business as default
};
//# sourceMappingURL=business-CWHSJXE5.js.map
