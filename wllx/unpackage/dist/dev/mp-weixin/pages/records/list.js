"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      records: [
        { id: 1, store: "米线女王", amount: 18, date: "2025-05-18 12:03" },
        { id: 2, store: "老王烧烤", amount: 56, date: "2025-05-17 21:40" },
        { id: 3, store: "日料一番屋", amount: 88, date: "2025-05-15 19:20" }
      ]
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.records, (record, k0, i0) => {
      return {
        a: common_vendor.t(record.store),
        b: common_vendor.t(record.date),
        c: common_vendor.t(record.amount),
        d: record.id
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/records/list.js.map
