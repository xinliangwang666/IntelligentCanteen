"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      merchantName: "张记餐厅",
      actions: [
        {
          key: "editStore",
          label: "编辑店铺",
          icon: "/static/icons/store.png",
          bgColor: "#4a90e2"
        },
        {
          key: "manageDishes",
          label: "菜品管理",
          icon: "/static/icons/dishes.png",
          bgColor: "#50e3c2"
        },
        {
          key: "orderList",
          label: "订单管理",
          icon: "/static/icons/orders.png",
          bgColor: "#f5a623"
        }
      ]
    };
  },
  methods: {
    navigateTo(page) {
      const urlMap = {
        editStore: "/pages/merchant/editStore",
        manageDishes: "/pages/merchant/manageDishes",
        orderList: "/pages/merchant/orderList"
      };
      common_vendor.index.navigateTo({ url: urlMap[page] });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($data.merchantName),
    b: common_vendor.f($data.actions, (action, k0, i0) => {
      return {
        a: action.icon,
        b: common_vendor.t(action.label),
        c: action.key,
        d: action.bgColor,
        e: common_vendor.o(($event) => $options.navigateTo(action.key), action.key)
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-46294a64"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/merchant/index.js.map
