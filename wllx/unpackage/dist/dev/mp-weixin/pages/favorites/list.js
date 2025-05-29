"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      favorites: [
        { id: 1, name: "老王烧烤", desc: "深夜烧烤，香辣过瘾", img: "/static/bbq.jpg" },
        { id: 2, name: "米线女王", desc: "云南特色米线", img: "/static/store2.jpg" },
        { id: 3, name: "日料一番屋", desc: "正宗日式料理", img: "/static/store3.jpg" }
      ]
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.favorites, (item, k0, i0) => {
      return {
        a: item.img,
        b: common_vendor.t(item.name),
        c: common_vendor.t(item.desc),
        d: item.id
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/favorites/list.js.map
