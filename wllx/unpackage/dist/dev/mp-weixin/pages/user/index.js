"use strict";
const common_vendor = require("../../common/vendor.js");
const Home = () => "../home/home2.js";
const Cart = () => "../cart/cart2.js";
const User = () => "./user2.js";
const _sfc_main = {
  components: {
    Home,
    Cart,
    User
  },
  data() {
    return {
      tab: "home"
    };
  },
  methods: {
    switchTab(tab) {
      this.tab = tab;
    }
  }
};
if (!Array) {
  const _component_Home = common_vendor.resolveComponent("Home");
  const _component_Cart = common_vendor.resolveComponent("Cart");
  const _component_User = common_vendor.resolveComponent("User");
  (_component_Home + _component_Cart + _component_User)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.tab === "home"
  }, $data.tab === "home" ? {} : {}, {
    b: $data.tab === "cart"
  }, $data.tab === "cart" ? {} : {}, {
    c: $data.tab === "user"
  }, $data.tab === "user" ? {} : {}, {
    d: $data.tab === "home" ? 1 : "",
    e: common_vendor.o(($event) => $options.switchTab("home")),
    f: $data.tab === "cart" ? 1 : "",
    g: common_vendor.o(($event) => $options.switchTab("cart")),
    h: $data.tab === "user" ? 1 : "",
    i: common_vendor.o(($event) => $options.switchTab("user"))
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/user/index.js.map
