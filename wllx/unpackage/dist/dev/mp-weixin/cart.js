"use strict";
const common_vendor = require("./common/vendor.js");
const common_assets = require("./common/assets.js");
const _sfc_main = {
  data() {
    return {
      cartList: [
        {
          id: 1,
          name: "巨无霸汉堡",
          price: 28,
          count: 2,
          image: "/static/burger.jpg",
          spec: "正常辣"
        },
        {
          id: 2,
          name: "黄金薯条",
          price: 12,
          count: 1,
          image: "/static/fries.jpg",
          spec: "大份"
        }
      ]
    };
  },
  computed: {
    totalPrice() {
      return this.cartList.reduce((sum, item) => sum + item.count * item.price, 0);
    },
    totalCount() {
      return this.cartList.reduce((sum, item) => sum + item.count, 0);
    }
  },
  methods: {
    adjustQuantity(item, delta) {
      item.count = Math.max(1, item.count + delta);
    },
    clearCart() {
      common_vendor.index.showModal({
        title: "提示",
        content: "确定要清空购物车吗？",
        success: (res) => {
          if (res.confirm) {
            this.cartList = [];
          }
        }
      });
    },
    handleCheckout() {
      if (this.cartList.length === 0) {
        common_vendor.index.showToast({
          title: "购物车为空",
          icon: "none"
        });
        return;
      }
      common_vendor.index.navigateTo({
        url: `/pages/pay/pay?totalPrice=${this.totalPrice}`
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.o((...args) => $options.clearCart && $options.clearCart(...args)),
    b: $data.cartList.length > 0
  }, $data.cartList.length > 0 ? {
    c: common_vendor.f($data.cartList, (item, k0, i0) => {
      return {
        a: item.image,
        b: common_vendor.t(item.name),
        c: common_vendor.t(item.spec),
        d: common_vendor.t(item.price),
        e: common_vendor.o(($event) => $options.adjustQuantity(item, -1), item.id),
        f: item.count <= 1,
        g: common_vendor.t(item.count),
        h: common_vendor.o(($event) => $options.adjustQuantity(item, 1), item.id),
        i: item.id
      };
    })
  } : {
    d: common_assets._imports_0$2
  }, {
    e: common_vendor.t($options.totalCount),
    f: common_vendor.t($options.totalPrice),
    g: $data.cartList.length === 0 ? 1 : "",
    h: common_vendor.o((...args) => $options.handleCheckout && $options.handleCheckout(...args)),
    i: common_assets._imports_0
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
exports.MiniProgramPage = MiniProgramPage;
//# sourceMappingURL=../.sourcemap/mp-weixin/cart.js.map
