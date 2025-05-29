<template>
  <view class="shop-list-container">
    <!-- 添加 logo -->
    <image class="logo" src="/static/logo1.png" alt="Logo" />

    <!-- 顶部标题栏 -->
    <view class="header-bar">
      <text class="header-title">附近美食</text>
    </view>

    <!-- 搜索栏 -->
    <view class="search-bar">
      <input 
        v-model="searchKey" 
        class="search-input" 
        placeholder="搜索商家或菜品" 
        placeholder-style="color: #999"
      />
      <button class="search-btn" @click="handleSearch">搜索</button>
    </view>

    <!-- 统计信息 -->
    <view class="summary">
      <text>共找到 {{ filteredShops.length }} 家商家</text>
    </view>

    <!-- 商家列表 -->
    <scroll-view class="shop-list" scroll-y>
      <template v-if="filteredShops.length > 0">
        <view 
          v-for="shop in filteredShops" 
          :key="shop.id" 
          class="shop-card"
        >
          <image class="shop-image" :src="shop.image" mode="aspectFill" />
          <view class="shop-info">
            <view class="shop-header">
              <text class="shop-name">{{ shop.name }}</text>
              <view class="shop-tag" v-if="shop.isChain">品牌</view>
            </view>

            <view class="rating-section">
              <view class="stars">
                <text 
                  v-for="star in 5" 
                  :key="star" 
                  class="star-icon"
                  :style="{ color: star <= shop.rating ? '#ffb400' : '#ddd' }"
                >★</text>
              </view>
              <text class="rating-text">{{ shop.rating.toFixed(1) }}</text>
              <text class="sales">月售{{ shop.monthlySales }}单</text>
            </view>

            <view class="info-line">
              <text class="info-item">
                <text class="icon">📍</text>
                {{ shop.address }}
              </text>
              <text class="info-item">
                <text class="icon">⏰</text>
                距离{{ shop.distance }}km
              </text>
            </view>

            <view class="promotion-section" v-if="shop.promotions">
              <text 
                v-for="(tag, index) in shop.promotions" 
                :key="index" 
                class="promo-tag"
              >{{ tag }}</text>
            </view>

            <button class="enter-btn" @click="goToShop(shop.id)">进入店铺</button>
          </view>
        </view>
      </template>

      <!-- 无搜索结果时 -->
      <view class="empty-tip" v-else>
        <text>未找到相关商家</text>
      </view>
    </scroll-view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      searchKey: '',
      shopList: [
        {
          id: 1,
          name: '麦当劳（人民广场店）',
          image: '/static/mcdonald.jpg',
          rating: 4.5,
          monthlySales: 2586,
          address: '人民路123号',
          distance: 1.2,
          isChain: true,
          promotions: ['38减15', '免配送费', '新用户立减']
        },
        {
          id: 2,
          name: '肯德基（世纪大道店）',
          image: '/static/kfc.jpg',
          rating: 4.3,
          monthlySales: 1895,
          address: '世纪大道456号',
          distance: 2.5,
          isChain: true,
          promotions: ['半价桶', '早餐特惠']
        },
        {
          id: 3,
          name: '老王烧烤（夜宵城店）',
          image: '/static/bbq.jpg',
          rating: 4.8,
          monthlySales: 3267,
          address: '夜宵城A区18号',
          distance: 0.8,
          isChain: false,
          promotions: ['啤酒买一送一']
        }
      ]
    }
  },
  computed: {
    filteredShops() {
      return this.shopList.filter(shop => 
        shop.name.includes(this.searchKey) || 
        shop.address.includes(this.searchKey)
      );
    }
  },
  methods: {
    handleSearch() {
      uni.showToast({
        title: '搜索：' + this.searchKey,
        icon: 'none'
      });
    },
    goToShop(id) {
      uni.navigateTo({ url: `/pages/shop/shop?shopId=${id}` });
    }
  }
}
</script>

<style lang="scss">
.shop-list-container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: #f8f8f8;
}

.logo {
  position: absolute;
  top: 1rpx; /* 距离顶部的距离 */
  left: 10rpx; /* 距离左边的距离 */
  width: 250rpx; /* 设置图片宽度 */
  height: 100rpx; /* 设置图片高度 */
  z-index: 10; /* 确保 logo 显示在最前面 */
}

.header-bar {
  padding: 30rpx;
  background: #ffffff;
  text-align: center;
  box-shadow: 0 4rpx 12rpx rgba(0, 0, 0, 0.05);
  position: relative; /* 确保子元素可以使用绝对定位 */
  
  .header-title {
    font-size: 36rpx;
    font-weight: bold;
    color: #333;
  }
}

.search-bar {
  display: flex;
  align-items: center;
  padding: 20rpx 30rpx;
  background: white;
  box-shadow: 0 4rpx 12rpx rgba(0, 0, 0, 0.06);

  .search-input {
    flex: 1;
    height: 80rpx;
    padding: 0 30rpx;
    background: #f5f5f5;
    border-radius: 40rpx;
    font-size: 28rpx;
    margin-right: 20rpx;
  }

  .search-btn {
    width: 140rpx;
    height: 80rpx;
    line-height: 80rpx;
    background: #007aff;
    color: white;
    border-radius: 40rpx;
    font-size: 28rpx;
    &::after { border: none; }
  }
}

.summary {
  padding: 20rpx 30rpx;
  font-size: 26rpx;
  color: #999;
}

.shop-list {
  flex: 1;
  padding: 30rpx 0;
}

.shop-card {
  background: white;
  border-radius: 16rpx;
  margin-bottom: 30rpx;
  box-shadow: 0 4rpx 12rpx rgba(0, 0, 0, 0.06);
  overflow: hidden;
  width: 100%;

  .shop-image {
    width: 100%;
    height: 360rpx;
  }

  .shop-info {
    padding: 30rpx;
  }

  .shop-header {
    display: flex;
    align-items: center;
    margin-bottom: 20rpx;

    .shop-name {
      font-size: 36rpx;
      font-weight: bold;
      margin-right: 20rpx;
    }

    .shop-tag {
      padding: 6rpx 16rpx;
      background: #ffeaea;
      color: #ff4444;
      font-size: 24rpx;
      border-radius: 8rpx;
    }
  }

  .rating-section {
    display: flex;
    align-items: center;
    margin-bottom: 25rpx;
    color: #666;

    .stars {
      margin-right: 15rpx;

      .star-icon {
        font-size: 32rpx;
      }
    }

    .rating-text {
      margin-right: 30rpx;
      color: #ffb400;
      font-weight: bold;
    }

    .sales {
      font-size: 26rpx;
    }
  }

  .info-line {
    display: flex;
    justify-content: space-between;
    margin-bottom: 25rpx;
    font-size: 26rpx;
    color: #666;

    .icon {
      margin-right: 8rpx;
    }
  }

  .promotion-section {
    display: flex;
    flex-wrap: wrap;
    gap: 16rpx;
    margin-bottom: 20rpx;

    .promo-tag {
      padding: 8rpx 16rpx;
      background: #fff0f0;
      color: #ff4444;
      font-size: 24rpx;
      border-radius: 8rpx;
      border: 1rpx solid #ffcccc;
    }
  }

  .enter-btn {
    width: 100%;
    height: 64rpx;
    line-height: 64rpx;
    background: #007aff;
    color: #fff;
    text-align: center;
    border-radius: 8rpx;
    font-size: 28rpx;
    &::after { border: none; }
  }
}

.empty-tip {
  text-align: center;
  color: #999;
  padding: 80rpx 0;
  font-size: 28rpx;
}
</style>
