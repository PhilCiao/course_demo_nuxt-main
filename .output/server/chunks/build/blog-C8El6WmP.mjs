import { ref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';
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
  __name: "blog",
  __ssrInlineRender: true,
  setup(__props) {
    const blog2 = ref({
      title: "\u793A\u4F8B\u535A\u5BA2\u6587\u7AE0",
      content: "\u8FD9\u662F\u4E00\u7BC7\u793A\u4F8B\u535A\u5BA2\u6587\u7AE0\u7684\u5185\u5BB9\u3002\u60A8\u53EF\u4EE5\u5728\u8FD9\u91CC\u6DFB\u52A0\u60A8\u7684\u535A\u5BA2\u5185\u5BB9\u3002",
      author: "\u4F5C\u8005\u540D\u79F0",
      date: "2024-03-21",
      tags: ["\u793A\u4F8B", "\u535A\u5BA2", "Vue"]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "blog-container" }, _attrs))} data-v-fcc94e2f><h1 data-v-fcc94e2f>${ssrInterpolate(blog2.value.title)}</h1><p data-v-fcc94e2f>${ssrInterpolate(blog2.value.content)}</p><div class="blog-meta" data-v-fcc94e2f><p data-v-fcc94e2f><strong data-v-fcc94e2f>\u4F5C\u8005\uFF1A</strong>${ssrInterpolate(blog2.value.author)}</p><p data-v-fcc94e2f><strong data-v-fcc94e2f>\u53D1\u5E03\u65E5\u671F\uFF1A</strong>${ssrInterpolate(blog2.value.date)}</p><p data-v-fcc94e2f><strong data-v-fcc94e2f>\u6807\u7B7E\uFF1A</strong>${ssrInterpolate(blog2.value.tags.join(", "))}</p></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const blog = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-fcc94e2f"]]);

export { blog as default };
//# sourceMappingURL=blog-C8El6WmP.mjs.map
