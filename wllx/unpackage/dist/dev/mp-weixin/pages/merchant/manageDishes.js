"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      dishes: [
        { id: 1, name: "红烧肉", price: 28, stock: 15 },
        { id: 2, name: "宫保鸡丁", price: 22, stock: 8 }
      ]
    };
  },
  methods: {
    editDish(id) {
      common_vendor.index.navigateTo({ url: `/pages/merchant/editDish?id=${id}` });
    },
    deleteDish(id) {
      this.dishes = this.dishes.filter((d) => d.id !== id);
      common_vendor.index.showToast({ title: "删除成功", icon: "success" });
    },
    addDish() {
      common_vendor.index.navigateTo({ url: `/pages/merchant/editDish` });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.dishes, (dish, k0, i0) => {
      return {
        a: common_vendor.t(dish.name),
        b: common_vendor.t(dish.stock),
        c: common_vendor.t(dish.price),
        d: common_vendor.o(($event) => $options.editDish(dish.id), dish.id),
        e: common_vendor.o(($event) => $options.deleteDish(dish.id), dish.id),
        f: dish.id
      };
    }),
    b: common_vendor.o((...args) => $options.addDish && $options.addDish(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-7014ad4c"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/merchant/manageDishes.js.map
