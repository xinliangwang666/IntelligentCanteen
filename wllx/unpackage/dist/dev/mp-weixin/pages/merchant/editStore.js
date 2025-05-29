"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      store: {
        name: "",
        address: "",
        phone: ""
      }
    };
  },
  methods: {
    submit() {
      common_vendor.index.showToast({ title: "保存成功", icon: "success" });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.store.name,
    b: common_vendor.o(($event) => $data.store.name = $event.detail.value),
    c: $data.store.address,
    d: common_vendor.o(($event) => $data.store.address = $event.detail.value),
    e: $data.store.phone,
    f: common_vendor.o(($event) => $data.store.phone = $event.detail.value),
    g: common_vendor.o((...args) => $options.submit && $options.submit(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-c6abaf97"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/merchant/editStore.js.map
