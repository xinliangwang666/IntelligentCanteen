"use strict";
const common_vendor = require("./common/vendor.js");
const common_assets = require("./common/assets.js");
const _sfc_main = {
  data() {
    return {
      searchKey: "",
      shopList: [
        {
          id: 1,
          name: "麦当劳（人民广场店）",
          image: "/static/mcdonald.jpg",
          rating: 4.5,
          monthlySales: 2586,
          address: "人民路123号",
          distance: 1.2,
          isChain: true,
          promotions: ["38减15", "免配送费", "新用户立减"]
        },
        {
          id: 2,
          name: "肯德基（世纪大道店）",
          image: "/static/kfc.jpg",
          rating: 4.3,
          monthlySales: 1895,
          address: "世纪大道456号",
          distance: 2.5,
          isChain: true,
          promotions: ["半价桶", "早餐特惠"]
        },
        {
          id: 3,
          name: "老王烧烤（夜宵城店）",
          image: "/static/bbq.jpg",
          rating: 4.8,
          monthlySales: 3267,
          address: "夜宵城A区18号",
          distance: 0.8,
          isChain: false,
          promotions: ["啤酒买一送一"]
        }
      ]
    };
  },
  computed: {
    filteredShops() {
      return this.shopList.filter(
        (shop) => shop.name.includes(this.searchKey) || shop.address.includes(this.searchKey)
      );
    }
  },
  methods: {
    handleSearch() {
      common_vendor.index.showToast({
        title: "搜索：" + this.searchKey,
        icon: "none"
      });
    },
    goToShop(id) {
      common_vendor.index.navigateTo({ url: `/pages/shop/shop?shopId=${id}` });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_assets._imports_0,
    b: $data.searchKey,
    c: common_vendor.o(($event) => $data.searchKey = $event.detail.value),
    d: common_vendor.o((...args) => $options.handleSearch && $options.handleSearch(...args)),
    e: common_vendor.t($options.filteredShops.length),
    f: $options.filteredShops.length > 0
  }, $options.filteredShops.length > 0 ? {
    g: common_vendor.f($options.filteredShops, (shop, k0, i0) => {
      return common_vendor.e({
        a: shop.image,
        b: common_vendor.t(shop.name),
        c: shop.isChain
      }, shop.isChain ? {} : {}, {
        d: common_vendor.f(5, (star, k1, i1) => {
          return {
            a: star,
            b: star <= shop.rating ? "#ffb400" : "#ddd"
          };
        }),
        e: common_vendor.t(shop.rating.toFixed(1)),
        f: common_vendor.t(shop.monthlySales),
        g: common_vendor.t(shop.address),
        h: common_vendor.t(shop.distance),
        i: shop.promotions
      }, shop.promotions ? {
        j: common_vendor.f(shop.promotions, (tag, index, i1) => {
          return {
            a: common_vendor.t(tag),
            b: index
          };
        })
      } : {}, {
        k: common_vendor.o(($event) => $options.goToShop(shop.id), shop.id),
        l: shop.id
      });
    })
  } : {});
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
exports.MiniProgramPage = MiniProgramPage;
//# sourceMappingURL=../.sourcemap/mp-weixin/home.js.map
