import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
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

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "about-container" }, _attrs))} data-v-9dd40ace><div class="hero-section" data-v-9dd40ace><h1 class="main-title" data-v-9dd40ace>\u5173\u4E8E\u6211\u4EEC</h1><p class="subtitle" data-v-9dd40ace>\u81F4\u529B\u4E8E\u521B\u9020\u5353\u8D8A\u7684\u6570\u5B57\u4F53\u9A8C</p></div><div class="content-section" data-v-9dd40ace><div class="intro-card" data-v-9dd40ace><h2 data-v-9dd40ace>\u6211\u4EEC\u7684\u6545\u4E8B</h2><p data-v-9dd40ace> \u6211\u4EEC\u662F\u4E00\u652F\u5145\u6EE1\u6FC0\u60C5\u7684\u6280\u672F\u56E2\u961F\uFF0C\u4E13\u6CE8\u4E8E\u4E3A\u5BA2\u6237\u63D0\u4F9B\u521B\u65B0\u7684\u6570\u5B57\u89E3\u51B3\u65B9\u6848\u3002 \u4ECE\u7F51\u7AD9\u5F00\u53D1\u5230\u79FB\u52A8\u5E94\u7528\uFF0C\u4ECE\u7528\u6237\u4F53\u9A8C\u8BBE\u8BA1\u5230\u6280\u672F\u54A8\u8BE2\uFF0C\u6211\u4EEC\u59CB\u7EC8\u575A\u6301\u7528\u6280\u672F\u6539\u53D8\u4E16\u754C\u7684\u4FE1\u5FF5\u3002 </p></div><div class="values-grid" data-v-9dd40ace><div class="value-card" data-v-9dd40ace><div class="icon" data-v-9dd40ace>\u{1F680}</div><h3 data-v-9dd40ace>\u521B\u65B0\u9A71\u52A8</h3><p data-v-9dd40ace>\u6301\u7EED\u63A2\u7D22\u524D\u6CBF\u6280\u672F\uFF0C\u4E3A\u5BA2\u6237\u5E26\u6765\u7A81\u7834\u6027\u7684\u89E3\u51B3\u65B9\u6848</p></div><div class="value-card" data-v-9dd40ace><div class="icon" data-v-9dd40ace>\u{1F3AF}</div><h3 data-v-9dd40ace>\u4E13\u4E1A\u7CBE\u795E</h3><p data-v-9dd40ace>\u4E25\u8C28\u7684\u5DE5\u4F5C\u6001\u5EA6\uFF0C\u7CBE\u6E5B\u7684\u6280\u672F\u80FD\u529B\uFF0C\u786E\u4FDD\u9879\u76EE\u8D28\u91CF</p></div><div class="value-card" data-v-9dd40ace><div class="icon" data-v-9dd40ace>\u{1F91D}</div><h3 data-v-9dd40ace>\u5BA2\u6237\u81F3\u4E0A</h3><p data-v-9dd40ace>\u6DF1\u5165\u7406\u89E3\u5BA2\u6237\u9700\u6C42\uFF0C\u63D0\u4F9B\u8D34\u5FC3\u7684\u6280\u672F\u652F\u6301\u548C\u670D\u52A1</p></div></div><div class="team-section" data-v-9dd40ace><h2 data-v-9dd40ace>\u6211\u4EEC\u7684\u56E2\u961F</h2><p data-v-9dd40ace> \u6C47\u805A\u4E86\u524D\u7AEF\u5F00\u53D1\u3001\u540E\u7AEF\u67B6\u6784\u3001UI/UX\u8BBE\u8BA1\u3001\u4EA7\u54C1\u7BA1\u7406\u7B49\u591A\u9886\u57DF\u7684\u4E13\u4E1A\u4EBA\u624D\u3002 \u6211\u4EEC\u76F8\u4FE1\u56E2\u961F\u7684\u529B\u91CF\uFF0C\u901A\u8FC7\u534F\u4F5C\u521B\u9020\u66F4\u5927\u7684\u4EF7\u503C\u3002 </p><div class="stats" data-v-9dd40ace><div class="stat-item" data-v-9dd40ace><span class="number" data-v-9dd40ace>50+</span><span class="label" data-v-9dd40ace>\u6210\u529F\u9879\u76EE</span></div><div class="stat-item" data-v-9dd40ace><span class="number" data-v-9dd40ace>3\u5E74+</span><span class="label" data-v-9dd40ace>\u884C\u4E1A\u7ECF\u9A8C</span></div><div class="stat-item" data-v-9dd40ace><span class="number" data-v-9dd40ace>99%</span><span class="label" data-v-9dd40ace>\u5BA2\u6237\u6EE1\u610F\u5EA6</span></div></div></div><div class="contact-cta" data-v-9dd40ace><h2 data-v-9dd40ace>\u8BA9\u6211\u4EEC\u4E00\u8D77\u521B\u9020\u672A\u6765</h2><p data-v-9dd40ace>\u6709\u9879\u76EE\u9700\u6C42\u6216\u6280\u672F\u54A8\u8BE2\uFF1F\u6211\u4EEC\u968F\u65F6\u51C6\u5907\u4E3A\u60A8\u63D0\u4F9B\u4E13\u4E1A\u670D\u52A1\u3002</p><button class="cta-button" data-v-9dd40ace>\u8054\u7CFB\u6211\u4EEC</button></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about-us.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const aboutUs = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-9dd40ace"]]);

export { aboutUs as default };
//# sourceMappingURL=about-us-BemtvR-u.mjs.map
