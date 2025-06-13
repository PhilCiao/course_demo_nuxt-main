import { ref, computed, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'vue-router';

const _sfc_main = {
  __name: "business",
  __ssrInlineRender: true,
  setup(__props) {
    const currentLang = ref("zh");
    const translations = {
      zh: {
        header: {
          title: "\u4E13\u4E1A\u670D\u52A1",
          subtitle: "\u4E3A\u60A8\u63D0\u4F9B\u5168\u65B9\u4F4D\u7684\u4E2A\u4EBA\u6210\u957F\u89E3\u51B3\u65B9\u6848"
        },
        relationships: {
          title: "\u4EB2\u5BC6\u5173\u7CFB\u6307\u5BFC",
          description: "\u5E2E\u52A9\u60A8\u5EFA\u7ACB\u548C\u7EF4\u62A4\u5065\u5EB7\u3001\u6301\u4E45\u7684\u4EB2\u5BC6\u5173\u7CFB\uFF0C\u63D0\u5347\u6C9F\u901A\u80FD\u529B\uFF0C\u521B\u9020\u5E78\u798F\u751F\u6D3B\u3002",
          featuresTitle: "\u670D\u52A1\u5185\u5BB9",
          features: [
            "\u5173\u7CFB\u8BC4\u4F30\u4E0E\u8BCA\u65AD",
            "\u6C9F\u901A\u6280\u5DE7\u63D0\u5347",
            "\u60C5\u611F\u7BA1\u7406\u6307\u5BFC",
            "\u5173\u7CFB\u4FEE\u590D\u4E0E\u91CD\u5EFA",
            "\u957F\u671F\u5173\u7CFB\u7EF4\u62A4\u7B56\u7565"
          ],
          cta: "\u9884\u7EA6\u5173\u7CFB\u54A8\u8BE2"
        },
        career: {
          title: "\u804C\u4E1A\u53D1\u5C55\u54A8\u8BE2",
          description: "\u534F\u52A9\u60A8\u660E\u786E\u804C\u4E1A\u65B9\u5411\uFF0C\u63D0\u5347\u804C\u573A\u7ADE\u4E89\u529B\uFF0C\u5B9E\u73B0\u804C\u4E1A\u7406\u60F3\u3002",
          featuresTitle: "\u670D\u52A1\u5185\u5BB9",
          features: [
            "\u804C\u4E1A\u89C4\u5212\u4E0E\u5B9A\u4F4D",
            "\u7B80\u5386\u4F18\u5316\u4E0E\u9762\u8BD5\u6307\u5BFC",
            "\u804C\u573A\u6280\u80FD\u63D0\u5347",
            "\u9886\u5BFC\u529B\u53D1\u5C55",
            "\u804C\u4E1A\u8F6C\u578B\u6307\u5BFC"
          ],
          cta: "\u9884\u7EA6\u804C\u4E1A\u54A8\u8BE2"
        },
        growth: {
          title: "\u4E2A\u4EBA\u6210\u957F\u6559\u7EC3",
          description: "\u5E2E\u52A9\u60A8\u7A81\u7834\u81EA\u6211\u9650\u5236\uFF0C\u53D1\u73B0\u5185\u5728\u6F5C\u80FD\uFF0C\u5B9E\u73B0\u4E2A\u4EBA\u4EF7\u503C\u3002",
          featuresTitle: "\u670D\u52A1\u5185\u5BB9",
          features: [
            "\u4E2A\u4EBA\u6F5C\u80FD\u5F00\u53D1",
            "\u76EE\u6807\u8BBE\u5B9A\u4E0E\u5B9E\u73B0",
            "\u65F6\u95F4\u7BA1\u7406\u4F18\u5316",
            "\u538B\u529B\u7BA1\u7406\u4E0E\u5E73\u8861",
            "\u81EA\u6211\u8BA4\u77E5\u63D0\u5347"
          ],
          cta: "\u9884\u7EA6\u6210\u957F\u54A8\u8BE2"
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "business-container" }, _attrs))} data-v-485b1346><div class="language-switch" data-v-485b1346><button class="${ssrRenderClass([{ active: currentLang.value === "zh" }, "lang-btn"])}" data-v-485b1346>\u4E2D\u6587</button><button class="${ssrRenderClass([{ active: currentLang.value === "en" }, "lang-btn"])}" data-v-485b1346>English</button></div><div class="page-header" data-v-485b1346><h1 data-v-485b1346>${ssrInterpolate(t.value.header.title)}</h1><p class="subtitle" data-v-485b1346>${ssrInterpolate(t.value.header.subtitle)}</p></div><div class="services-grid" data-v-485b1346><div class="service-section" id="relationships" data-v-485b1346><div class="service-header" data-v-485b1346><div class="service-icon" data-v-485b1346>\u2764\uFE0F</div><h2 data-v-485b1346>${ssrInterpolate(t.value.relationships.title)}</h2></div><div class="service-content" data-v-485b1346><div class="service-description" data-v-485b1346><p data-v-485b1346>${ssrInterpolate(t.value.relationships.description)}</p></div><div class="service-features" data-v-485b1346><h3 data-v-485b1346>${ssrInterpolate(t.value.relationships.featuresTitle)}</h3><ul data-v-485b1346><!--[-->`);
      ssrRenderList(t.value.relationships.features, (feature, index) => {
        _push(`<li data-v-485b1346>${ssrInterpolate(feature)}</li>`);
      });
      _push(`<!--]--></ul></div><div class="service-cta" data-v-485b1346><button class="cta-button" data-v-485b1346>${ssrInterpolate(t.value.relationships.cta)}</button></div></div></div><div class="service-section" id="career" data-v-485b1346><div class="service-header" data-v-485b1346><div class="service-icon" data-v-485b1346>\u{1F4BC}</div><h2 data-v-485b1346>${ssrInterpolate(t.value.career.title)}</h2></div><div class="service-content" data-v-485b1346><div class="service-description" data-v-485b1346><p data-v-485b1346>${ssrInterpolate(t.value.career.description)}</p></div><div class="service-features" data-v-485b1346><h3 data-v-485b1346>${ssrInterpolate(t.value.career.featuresTitle)}</h3><ul data-v-485b1346><!--[-->`);
      ssrRenderList(t.value.career.features, (feature, index) => {
        _push(`<li data-v-485b1346>${ssrInterpolate(feature)}</li>`);
      });
      _push(`<!--]--></ul></div><div class="service-cta" data-v-485b1346><button class="cta-button" data-v-485b1346>${ssrInterpolate(t.value.career.cta)}</button></div></div></div><div class="service-section" id="growth" data-v-485b1346><div class="service-header" data-v-485b1346><div class="service-icon" data-v-485b1346>\u{1F331}</div><h2 data-v-485b1346>${ssrInterpolate(t.value.growth.title)}</h2></div><div class="service-content" data-v-485b1346><div class="service-description" data-v-485b1346><p data-v-485b1346>${ssrInterpolate(t.value.growth.description)}</p></div><div class="service-features" data-v-485b1346><h3 data-v-485b1346>${ssrInterpolate(t.value.growth.featuresTitle)}</h3><ul data-v-485b1346><!--[-->`);
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

export { business as default };
//# sourceMappingURL=business-CWHSJXE5.mjs.map
