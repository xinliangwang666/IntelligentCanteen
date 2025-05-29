"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  data() {
    return {
      totalPrice: 0,
      timeLeft: 600,
      // 10分钟 = 600秒
      timer: null,
      orderId: ""
    };
  },
  onLoad(options) {
    this.totalPrice = options.totalPrice || 0;
    this.orderId = "OD" + Date.now();
    this.startCountdown();
  },
  methods: {
    startCountdown() {
      this.timer = setInterval(() => {
        if (this.timeLeft > 0) {
          this.timeLeft--;
        } else {
          clearInterval(this.timer);
        }
      }, 1e3);
    },
    formatTime(seconds) {
      const minutes = String(Math.floor(seconds / 60)).padStart(2, "0");
      const secs = String(seconds % 60).padStart(2, "0");
      return `${minutes}:${secs}`;
    },
    simulatePay() {
      common_vendor.index.showToast({
        title: "支付成功",
        icon: "success"
      });
      setTimeout(() => {
        common_vendor.index.navigateBack();
      }, 1500);
    }
  },
  onUnload() {
    if (this.timer)
      clearInterval(this.timer);
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.t($data.orderId),
    b: common_vendor.t($data.totalPrice),
    c: common_assets._imports_0$1,
    d: $data.timeLeft > 0
  }, $data.timeLeft > 0 ? {
    e: common_vendor.t($options.formatTime($data.timeLeft))
  } : {}, {
    f: common_vendor.o((...args) => $options.simulatePay && $options.simulatePay(...args)),
    g: $data.timeLeft <= 0
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/pay/pay.js.map
