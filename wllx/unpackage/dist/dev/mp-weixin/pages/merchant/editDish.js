"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      dish: {
        name: "",
        price: 0,
        description: "",
        stock: 0
      }
    };
  },
  onLoad(options) {
    if (options.id)
      ;
  },
  methods: {
    submit() {
      common_vendor.index.showToast({ title: "保存成功", icon: "success" });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.dish.name,
    b: common_vendor.o(($event) => $data.dish.name = $event.detail.value),
    c: $data.dish.price,
    d: common_vendor.o(($event) => $data.dish.price = $event.detail.value),
    e: $data.dish.description,
    f: common_vendor.o(($event) => $data.dish.description = $event.detail.value),
    g: $data.dish.stock,
    h: common_vendor.o(($event) => $data.dish.stock = $event.detail.value),
    i: common_vendor.o((...args) => $options.submit && $options.submit(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-0e20f6ec"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/merchant/editDish.js.map
