"use strict";
const common_vendor = require("./common/vendor.js");
const common_assets = require("./common/assets.js");
const _sfc_main = {
  data() {
    return {
      userInfo: {
        avatar: "/static/avatar-default.png",
        username: "美食探索家",
        phone: "138****5678"
      }
    };
  },
  methods: {
    changeAvatar() {
      common_vendor.index.chooseImage({
        count: 1,
        success: (res) => {
          this.userInfo.avatar = res.tempFilePaths[0];
        }
      });
    },
    editUsername() {
      common_vendor.index.showModal({
        title: "修改用户名",
        content: "请输入新用户名",
        editable: true,
        success: (res) => {
          if (res.confirm) {
            this.userInfo.username = res.content;
          }
        }
      });
    },
    changePhone() {
      common_vendor.index.navigateTo({
        url: "/pages/profile/change-phone"
      });
    },
    navigateTo(type) {
      const routes = {
        favorites: "/pages/favorites/list",
        orders: "/pages/orders/history",
        records: "/pages/records/list"
      };
      common_vendor.index.navigateTo({ url: routes[type] });
    },
    logout() {
      common_vendor.index.showModal({
        title: "确认退出",
        content: "确定要退出登录吗？",
        success: (res) => {
          if (res.confirm) {
            common_vendor.index.redirectTo({ url: "/pages/login/login" });
          }
        }
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.userInfo.avatar,
    b: common_vendor.o((...args) => $options.changeAvatar && $options.changeAvatar(...args)),
    c: $data.userInfo.username,
    d: common_vendor.o(($event) => $data.userInfo.username = $event.detail.value),
    e: common_vendor.o((...args) => $options.editUsername && $options.editUsername(...args)),
    f: $data.userInfo.phone,
    g: common_vendor.o(($event) => $data.userInfo.phone = $event.detail.value),
    h: common_vendor.o((...args) => $options.changePhone && $options.changePhone(...args)),
    i: common_assets._imports_0$3,
    j: common_vendor.o(($event) => $options.navigateTo("favorites")),
    k: common_assets._imports_1$1,
    l: common_vendor.o(($event) => $options.navigateTo("orders")),
    m: common_assets._imports_2$1,
    n: common_vendor.o(($event) => $options.navigateTo("records")),
    o: common_vendor.o((...args) => $options.logout && $options.logout(...args)),
    p: common_assets._imports_0
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
exports.MiniProgramPage = MiniProgramPage;
//# sourceMappingURL=../.sourcemap/mp-weixin/user.js.map
