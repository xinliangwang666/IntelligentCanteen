"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      orders: [
        { id: 101, status: "待接单" },
        { id: 102, status: "制作中" },
        { id: 103, status: "已完成" }
      ]
    };
  },
  methods: {
    updateStatus(id, status) {
      const order = this.orders.find((o) => o.id === id);
      if (order) {
        order.status = status;
        common_vendor.index.showToast({ title: `状态已更新为 ${status}`, icon: "success" });
      }
    },
    resetStatus(id) {
      const order = this.orders.find((o) => o.id === id);
      if (order) {
        order.status = "待接单";
        common_vendor.index.showToast({ title: "订单已重置为 待接单", icon: "none" });
      }
    },
    statusClass(status) {
      switch (status) {
        case "待接单":
          return "status-pending";
        case "制作中":
          return "status-processing";
        case "已完成":
          return "status-completed";
        case "已拒绝":
          return "status-rejected";
        default:
          return "";
      }
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.orders, (order, k0, i0) => {
      return {
        a: common_vendor.t(order.id),
        b: common_vendor.t(order.status),
        c: common_vendor.n($options.statusClass(order.status)),
        d: order.status !== "待接单",
        e: common_vendor.o(($event) => $options.updateStatus(order.id, "制作中"), order.id),
        f: order.status !== "待接单",
        g: common_vendor.o(($event) => $options.updateStatus(order.id, "已拒绝"), order.id),
        h: order.status !== "制作中",
        i: common_vendor.o(($event) => $options.updateStatus(order.id, "已完成"), order.id),
        j: common_vendor.o(($event) => $options.resetStatus(order.id), order.id),
        k: order.id
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-79f50a25"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/merchant/orderList.js.map
