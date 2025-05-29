"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
if (!Math) {
  "./pages/login/login.js";
  "./pages/home/home.js";
  "./pages/shop/shop.js";
  "./pages/cart/cart.js";
  "./pages/user/user.js";
  "./pages/pay/pay.js";
  "./pages/merchant/index.js";
  "./pages/merchant/editDish.js";
  "./pages/merchant/editStore.js";
  "./pages/merchant/manageDishes.js";
  "./pages/merchant/orderList.js";
  "./pages/admin/index.js";
  "./pages/user/index.js";
  "./pages/favorites/list.js";
  "./pages/orders/history.js";
  "./pages/records/list.js";
}
const _sfc_main = {
  onLaunch: function() {
    common_vendor.index.__f__("log", "at App.vue:4", "App Launch");
  },
  onShow: function() {
    common_vendor.index.__f__("log", "at App.vue:7", "App Show");
  },
  onHide: function() {
    common_vendor.index.__f__("log", "at App.vue:10", "App Hide");
  }
};
function createApp() {
  const app = common_vendor.createSSRApp(_sfc_main);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
//# sourceMappingURL=../.sourcemap/mp-weixin/app.js.map
