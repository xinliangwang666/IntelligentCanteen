"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  data() {
    return {
      activeRole: "user",
      roles: [
        { label: "用户登录", value: "user" },
        { label: "商家登录", value: "merchant" },
        { label: "管理员", value: "admin" }
      ],
      username: "",
      password: "",
      showPassword: false
    };
  },
  methods: {
    handleRoleSelect(role) {
      this.activeRole = role;
    },
    handleLogin() {
      const roleMap = {
        user: "/pages/user/index",
        merchant: "/pages/merchant/index",
        admin: "/pages/admin/index"
      };
      common_vendor.index.navigateTo({ url: roleMap[this.activeRole] });
    },
    wechatLogin() {
      common_vendor.index.login({
        provider: "weixin",
        success: (res) => {
          common_vendor.index.__f__("log", "at pages/login/login.vue:98", "微信登录成功", res);
        }
      });
    },
    navigateTo(type) {
      const paths = {
        forget: "/pages/login/forget",
        register: "/pages/login/register"
      };
      common_vendor.index.navigateTo({ url: paths[type] });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_assets._imports_0,
    b: common_vendor.f($data.roles, (role, k0, i0) => {
      return {
        a: common_vendor.t(role.label),
        b: role.value,
        c: common_vendor.n($data.activeRole === role.value ? "active" : ""),
        d: common_vendor.o(($event) => $options.handleRoleSelect(role.value), role.value)
      };
    }),
    c: common_assets._imports_1,
    d: $data.username,
    e: common_vendor.o(($event) => $data.username = $event.detail.value),
    f: common_assets._imports_2,
    g: $data.password,
    h: common_vendor.o(($event) => $data.password = $event.detail.value),
    i: common_vendor.t($data.showPassword ? "👁️" : "👁️️"),
    j: common_vendor.o(($event) => $data.showPassword = !$data.showPassword),
    k: common_vendor.o((...args) => $options.handleLogin && $options.handleLogin(...args)),
    l: common_vendor.o(($event) => $options.navigateTo("forget")),
    m: common_vendor.o(($event) => $options.navigateTo("register")),
    n: common_assets._imports_3,
    o: common_vendor.o((...args) => $options.wechatLogin && $options.wechatLogin(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/login/login.js.map
