"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      currentTab: 0,
      searchKey: "",
      delivery: "pickup",
      deliveryTypes: [
        { label: "自提", value: "pickup" },
        { label: "外送", value: "delivery" }
      ],
      categories: [
        { name: "汉堡主食", count: 2 },
        { name: "小吃配餐", count: 2 },
        { name: "甜品饮料", count: 2 },
        { name: "超值套餐", count: 2 }
      ],
      dishList: [
        // 汉堡主食
        {
          id: 1,
          name: "巨无霸汉堡",
          price: 28,
          desc: "双层牛肉经典风味",
          image: "/static/burger.jpg",
          category: "汉堡主食",
          isHot: true,
          quantity: 0
        },
        {
          id: 2,
          name: "安格斯厚牛堡",
          price: 38,
          desc: "澳洲进口牛肉制作",
          image: "/static/burger1.jpg",
          category: "汉堡主食",
          quantity: 0
        },
        // 小吃配餐
        {
          id: 3,
          name: "黄金薯条",
          price: 12,
          desc: "外酥里嫩经典小吃",
          image: "/static/fries.jpg",
          category: "小吃配餐",
          isHot: true,
          quantity: 0
        },
        {
          id: 4,
          name: "麦乐鸡块",
          price: 15,
          desc: "10块欢乐分享装",
          image: "/static/chicken.png",
          category: "小吃配餐",
          quantity: 0
        },
        // 甜品饮料
        {
          id: 5,
          name: "草莓圣代",
          price: 10,
          desc: "丝滑冰淇淋配草莓酱",
          image: "/static/sundae.jpg",
          category: "甜品饮料",
          quantity: 0
        },
        {
          id: 6,
          name: "冰镇可乐",
          price: 8,
          desc: "500ml畅爽饮品",
          image: "/static/cola.jpg",
          category: "甜品饮料",
          quantity: 0
        },
        // 超值套餐
        {
          id: 7,
          name: "超值全家桶",
          price: 88,
          desc: "3汉堡+2小食+4饮料",
          image: "/static/combo1.jpg",
          category: "超值套餐",
          quantity: 0
        },
        {
          id: 8,
          name: "双人分享餐",
          price: 66,
          desc: "2汉堡+2小食+2饮料",
          image: "/static/combo2.jpg",
          category: "超值套餐",
          quantity: 0
        }
      ]
    };
  },
  computed: {
    filteredDishes() {
      return this.dishList.filter(
        (item) => item.name.includes(this.searchKey) && item.category === this.categories[this.currentTab].name
      );
    },
    totalPrice() {
      return this.dishList.reduce((sum, item) => sum + item.price * (item.quantity || 0), 0);
    },
    totalQuantity() {
      return this.dishList.reduce((sum, item) => sum + (item.quantity || 0), 0);
    }
  },
  methods: {
    adjustQuantity(dish, delta) {
      this.$set(dish, "quantity", Math.max(0, (dish.quantity || 0) + delta));
    },
    handleCheckout() {
      common_vendor.index.navigateTo({
        url: "/pages/pay/pay"
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.deliveryTypes, (type, k0, i0) => {
      return {
        a: common_vendor.t(type.label),
        b: type.value,
        c: common_vendor.n($data.delivery === type.value ? "active" : ""),
        d: common_vendor.o(($event) => $data.delivery = type.value, type.value)
      };
    }),
    b: $data.searchKey,
    c: common_vendor.o(($event) => $data.searchKey = $event.detail.value),
    d: common_vendor.f($data.categories, (cat, index, i0) => {
      return {
        a: common_vendor.t(cat.name),
        b: index,
        c: common_vendor.n($data.currentTab === index ? "active" : ""),
        d: common_vendor.o(($event) => $data.currentTab = index, index)
      };
    }),
    e: common_vendor.f($options.filteredDishes, (dish, k0, i0) => {
      return common_vendor.e({
        a: dish.image,
        b: common_vendor.t(dish.name),
        c: dish.isHot
      }, dish.isHot ? {} : {}, {
        d: common_vendor.t(dish.desc),
        e: common_vendor.t(dish.price),
        f: common_vendor.o(($event) => $options.adjustQuantity(dish, -1), dish.id),
        g: dish.quantity <= 0,
        h: common_vendor.t(dish.quantity || 0),
        i: common_vendor.o(($event) => $options.adjustQuantity(dish, 1), dish.id),
        j: dish.id
      });
    }),
    f: common_vendor.t($options.totalPrice),
    g: common_vendor.t($options.totalQuantity),
    h: common_vendor.o((...args) => $options.handleCheckout && $options.handleCheckout(...args)),
    i: $options.totalQuantity === 0
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/shop/shop.js.map
