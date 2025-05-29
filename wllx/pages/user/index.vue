<template>
  <view class="container">
    <!-- 主体内容 -->
    <view class="content">
      <Home v-if="tab === 'home'" />
      <Cart v-if="tab === 'cart'" />
      <User v-if="tab === 'user'" />
    </view>

    <!-- 自定义 TabBar -->
    <view class="tabbar">
      <view
        class="tab-item"
        :class="{ active: tab === 'home' }"
        @click="switchTab('home')"
      >
        <text>首页</text>
      </view>
      <view
        class="tab-item"
        :class="{ active: tab === 'cart' }"
        @click="switchTab('cart')"
      >
        <text>购物车</text>
      </view>
      <view
        class="tab-item"
        :class="{ active: tab === 'user' }"
        @click="switchTab('user')"
      >
        <text>我的</text>
      </view>
    </view>
  </view>
</template>

<script>
import Home from '@/pages/home/home.vue'
import Cart from '@/pages/cart/cart.vue'
import User from '@/pages/user/user.vue'

export default {
  components: {
    Home,
    Cart,
    User
  },
  data() {
    return {
      tab: 'home'
    }
  },
  methods: {
    switchTab(tab) {
      this.tab = tab
    }
  }
}
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.content {
  flex: 1;
  padding-bottom: 100rpx; /* 避免内容被tabbar遮挡 */
  overflow-y: auto;
}

.tabbar {
  display: flex;
  justify-content: space-around;
  background-color: #ffffff;
  border-top: 1px solid #ddd;
  padding: 10rpx 0;
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 999;
}

.tab-item {
  flex: 1;
  text-align: center;
  padding: 20rpx 0;
  color: #999;
}

.tab-item.active {
  color: #ff0000;
  font-weight: bold;
}
</style>
