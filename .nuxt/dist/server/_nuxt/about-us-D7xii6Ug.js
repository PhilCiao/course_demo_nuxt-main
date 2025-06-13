import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
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
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "about-container" }, _attrs))} data-v-ca979600><div class="hero-section" data-v-ca979600><h1 class="main-title" data-v-ca979600>关于我们</h1><p class="subtitle" data-v-ca979600>致力于创造卓越的人生体验</p></div><div class="content-section" data-v-ca979600><div class="intro-card" data-v-ca979600><h2 data-v-ca979600>我们的故事</h2><p data-v-ca979600> 我们是一支充满激情的顾问团队，专注于为客户提供生活方式解决方案。 从生活方式到职业规划，从心理咨询到人际关系，我们始终坚持用专业优化生命质量的信念。 </p></div><div class="values-grid" data-v-ca979600><div class="value-card" data-v-ca979600><div class="icon" data-v-ca979600>🚀</div><h3 data-v-ca979600>创新驱动</h3><p data-v-ca979600>持续探索前沿生活方式，为客户带来突破性的解决方案</p></div><div class="value-card" data-v-ca979600><div class="icon" data-v-ca979600>🎯</div><h3 data-v-ca979600>专业精神</h3><p data-v-ca979600>严谨的工作态度，精湛的专业能力，确保项目质量</p></div><div class="value-card" data-v-ca979600><div class="icon" data-v-ca979600>🤝</div><h3 data-v-ca979600>客户至上</h3><p data-v-ca979600>深入理解客户需求，提供贴心的生活方式支持和服务</p></div></div><div class="team-section" data-v-ca979600><h2 data-v-ca979600>我们的团队</h2><p data-v-ca979600> 汇聚了生活方式、职业规划、心理咨询、人际关系等多领域的专业人才。 我们相信团队的力量，通过协作创造更大的价值。 </p><div class="stats" data-v-ca979600><div class="stat-item" data-v-ca979600><span class="number" data-v-ca979600>100+</span><span class="label" data-v-ca979600>成功项目</span></div><div class="stat-item" data-v-ca979600><span class="number" data-v-ca979600>3年+</span><span class="label" data-v-ca979600>行业经验</span></div><div class="stat-item" data-v-ca979600><span class="number" data-v-ca979600>98%</span><span class="label" data-v-ca979600>客户满意度</span></div></div></div><div class="contact-cta" data-v-ca979600><h2 data-v-ca979600>让我们一起创造未来</h2><p data-v-ca979600>有项目需求或生活方式咨询？我们随时准备为您提供专业服务。</p><button class="cta-button" data-v-ca979600>联系我们</button></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about-us.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const aboutUs = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-ca979600"]]);
export {
  aboutUs as default
};
//# sourceMappingURL=about-us-D7xii6Ug.js.map
