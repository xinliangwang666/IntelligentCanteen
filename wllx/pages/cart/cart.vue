<template>
  <view class="cart-container">
    <!-- 顶部导航 -->
    <view class="nav-bar">
      <text class="title">🛒 我的购物车</text>
      <text class="clear-btn" @click="clearCart">清空</text>
    </view>

    <!-- 购物车列表 -->
    <scroll-view class="cart-list" scroll-y>
      <view v-if="cartList.length > 0">
        <view 
          v-for="item in cartList" 
          :key="item.id" 
          class="cart-item"
        >
          <image class="dish-image" :src="item.image" mode="aspectFill" />
          
          <view class="info">
            <view class="name">{{ item.name }}</view>
            <view class="spec">{{ item.spec }}</view>
            <view class="price">￥{{ item.price }}</view>
          </view>

          <view class="quantity-control">
            <button 
              class="btn minus" 
              @click.stop="adjustQuantity(item, -1)"
              :disabled="item.count <= 1"
            >-</button>
            <text class="count">{{ item.count }}</text>
            <button 
              class="btn plus" 
              @click.stop="adjustQuantity(item, 1)"
            >+</button>
          </view>
        </view>
      </view>

      <view v-else class="empty-tip">
        <image class="empty-icon" src="/static/empty-cart.png" />
        <text class="tip-text">购物车还是空的哦~</text>
      </view>
    </scroll-view>

    <!-- 底部结算栏 -->
    <view class="checkout-bar">
      <view class="total-info">
        <text class="total-count">共{{ totalCount }}件</text>
        <text class="total-price">合计：<text class="price">￥{{ totalPrice }}</text></text>
      </view>
      <button 
        class="checkout-btn" 
        :class="{ disabled: cartList.length === 0 }"
        @click="handleCheckout"
      >去结算</button>
    </view>
	
	<!-- 添加 logo -->
	<image class="footer-logo" src="/static/logo1.png" alt="Footer Logo" />
  
  </view>
</template>

<script>
export default {
  data() {
    return {
      cartList: [
        {
          id: 1,
          name: '巨无霸汉堡',
          price: 28,
          count: 2,
          image: '/static/burger.jpg',
          spec: '正常辣'
        },
        {
          id: 2,
          name: '黄金薯条',
          price: 12,
          count: 1,
          image: '/static/fries.jpg',
          spec: '大份'
        }
      ]
    }
  },
  computed: {
    totalPrice() {
      return this.cartList.reduce((sum, item) => sum + item.count * item.price, 0)
    },
    totalCount() {
      return this.cartList.reduce((sum, item) => sum + item.count, 0)
    }
  },
  methods: {
    adjustQuantity(item, delta) {
      item.count = Math.max(1, item.count + delta)
    },
    clearCart() {
      uni.showModal({
        title: '提示',
        content: '确定要清空购物车吗？',
        success: (res) => {
          if (res.confirm) {
            this.cartList = []
          }
        }
      })
    },
    handleCheckout() {
      if (this.cartList.length === 0) {
        uni.showToast({
          title: '购物车为空',
          icon: 'none'
        })
        return
      }
  // 模拟生成订单并跳转，传递订单总价
	uni.navigateTo({
		url: `/pages/pay/pay?totalPrice=${this.totalPrice}`
	})
    }
  }
}
</script>

<style lang="scss">
$theme-color: #ff6b6b;

.cart-container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: #f9f9f9;
}

  
.footer-logo {
  position: relative; // 启用相对定位
  top: -375rpx; // 向上移动 10rpx
  width: 600rpx; // 设置图片宽度
  height: 350rpx; // 设置图片高度
  display: block; // 确保图片块级显示
  margin: 200rpx auto 0; // 上边距 20rpx，水平居中对齐
  opacity: 0.5; // 透明度 50%
}

.nav-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32rpx;
  background: white;
  box-shadow: 0 4rpx 10rpx rgba(0, 0, 0, 0.05);

  .title {
    font-size: 36rpx;
    font-weight: bold;
    color: $theme-color;
  }

  .clear-btn {
    color: #999;
    font-size: 28rpx;
    padding: 10rpx 20rpx;
    border-radius: 30rpx;
    &:active {
      background: #f0f0f0;
    }
  }
}

.cart-list {
  flex: 1;
  padding: 10rpx 0rpx;

  .cart-item {
    display: flex;
    align-items: center;
    padding: 24rpx;
    margin-bottom: 24rpx;
    background: white;
    border-radius: 20rpx;
    box-shadow: 0 4rpx 12rpx rgba(0, 0, 0, 0.05);
    transition: transform 0.2s;

    &:active {
      transform: scale(0.98);
    }

    .dish-image {
      width: 140rpx;
      height: 140rpx;
      border-radius: 16rpx;
      margin-right: 24rpx;
    }

    .info {
      flex: 1;

      .name {
        font-size: 30rpx;
        font-weight: 600;
        margin-bottom: 8rpx;
        color: #333;
      }

      .spec {
        color: #999;
        font-size: 24rpx;
        margin-bottom: 12rpx;
      }

      .price {
        color: $theme-color;
        font-size: 30rpx;
        font-weight: bold;
      }
    }

    .quantity-control {
      display: flex;
      align-items: center;
      margin-left: 20rpx;

      .btn {
        width: 60rpx;
        height: 60rpx;
        line-height: 60rpx;
        border-radius: 50%;
        font-size: 32rpx;
        text-align: center;
        background: #f0f0f0;
        color: #666;

        &.plus {
          background: $theme-color;
          color: white;
        }

        &[disabled] {
          opacity: 0.5;
        }
      }

      .count {
        width: 60rpx;
        text-align: center;
        font-size: 30rpx;
        margin: 0 12rpx;
      }
    }
  }

  .empty-tip {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 160rpx 0;

    .empty-icon {
      width: 260rpx;
      height: 260rpx;
      margin-bottom: 30rpx;
      opacity: 0.6;
    }

    .tip-text {
      color: #aaa;
      font-size: 28rpx;
    }
  }
}

.checkout-bar {
  position: fixed; // 固定定位
  bottom: 90rpx; // 距离屏幕底部 90rpx（与导航栏高度一致）
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20rpx 32rpx;
  background: white;
  box-shadow: 0 -4rpx 10rpx rgba(0, 0, 0, 0.05);

  .total-info {
    flex: 1;

    .total-count {
      color: #666;
      font-size: 28rpx;
      margin-right: 16rpx;
    }

    .total-price {
      font-size: 30rpx;

      .price {
        color: $theme-color;
        font-weight: bold;
      }
    }
  }

  .checkout-btn {
    width: 220rpx;
    height: 80rpx;
    line-height: 80rpx;
    background: $theme-color;
    color: white;
    border-radius: 40rpx;
    font-size: 30rpx;
    text-align: center;
    transition: background 0.3s;

    &.disabled {
      background: #ccc;
      opacity: 0.7;
    }
  }
}
</style>
