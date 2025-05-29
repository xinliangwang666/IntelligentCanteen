"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  data() {
    return {
      orders: [
        { id: 1, store: "米线女王", items: "酸辣米线 ×1", total: 18, status: "已完成", date: "2025-05-18 12:03" },
        { id: 2, store: "老王烧烤", items: "烤串 ×3，啤酒 ×2", total: 56, status: "已完成", date: "2025-05-17 21:40" },
        { id: 3, store: "日料一番屋", items: "寿司套餐 ×1", total: 88, status: "已取消", date: "2025-05-15 19:20" }
      ]
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.orders, (order, k0, i0) => {
      return {
        a: common_vendor.t(order.store),
        b: common_vendor.t(order.status),
        c: common_vendor.t(order.items),
        d: common_vendor.t(order.total),
        e: common_vendor.t(order.date),
        f: order.id
      };
    }),
    b: common_assets._imports_0
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/orders/history.js.map
