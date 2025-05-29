"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  methods: {
    go(type) {
      const urlMap = {
        user: "/pages/admin/userList",
        merchant: "/pages/admin/merchantList"
      };
      common_vendor.index.navigateTo({ url: urlMap[type] });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_assets._imports_0,
    b: common_vendor.o(($event) => $options.go("user")),
    c: common_vendor.o(($event) => $options.go("merchant"))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-9a704506"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/admin/index.js.map
