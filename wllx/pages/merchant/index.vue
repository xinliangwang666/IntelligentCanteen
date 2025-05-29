<template>
  <view class="merchant-dashboard">
    <!-- 欢迎区域 -->
    <view class="header">
      <text class="welcome">欢迎回来，{{ merchantName }}</text>
      <text class="sub">今天也是为顾客服务的一天 😊</text>
    </view>

    <!-- 三个操作卡片区域 -->
    <view class="quick-actions">
      <view
        v-for="action in actions"
        :key="action.key"
        class="action-card"
        :style="{ backgroundColor: action.bgColor }"
        @click="navigateTo(action.key)"
      >
        <image :src="action.icon" class="icon" />
        <text class="label">{{ action.label }}</text>
      </view>
    </view>
	
  </view>
</template>

<script>
export default {
  data() {
    return {
      merchantName: '张记餐厅',
      actions: [
        {
          key: 'editStore',
          label: '编辑店铺',
          icon: '/static/icons/store.png',
          bgColor: '#4a90e2'
        },
        {
          key: 'manageDishes',
          label: '菜品管理',
          icon: '/static/icons/dishes.png',
          bgColor: '#50e3c2'
        },
        {
          key: 'orderList',
          label: '订单管理',
          icon: '/static/icons/orders.png',
          bgColor: '#f5a623'
        }
      ]
    }
  },
  methods: {
    navigateTo(page) {
      const urlMap = {
        editStore: '/pages/merchant/editStore',
        manageDishes: '/pages/merchant/manageDishes',
        orderList: '/pages/merchant/orderList'
      }
      uni.navigateTo({ url: urlMap[page] })
    }
  }
}
</script>

<style scoped>
.merchant-dashboard {
  min-height: 100vh;
  background-color: #f2f3f7;
  padding: 0 30rpx 60rpx;
}

/* 欢迎区域 */
.header {
  background-color: #7b68ee;
  border-radius: 20rpx;
  padding: 50rpx 30rpx;
  color: #fff;
  margin-top: 40rpx;
  margin-bottom: 40rpx;
  box-shadow: 0 8rpx 16rpx rgba(0, 0, 0, 0.1);
}

.welcome {
  font-size: 36rpx;
  font-weight: bold;
}

.sub {
  font-size: 26rpx;
  margin-top: 10rpx;
  opacity: 0.9;
}

/* 操作卡片区域 */
.quick-actions {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30rpx;
}

.action-card {
  width: 90%;
  height: 180rpx;
  border-radius: 20rpx;
  padding: 20rpx;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  box-shadow: 0 6rpx 12rpx rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
}

.action-card:active {
  transform: scale(0.97);
}



.icon {
  width: 80rpx;
  height: 80rpx;
  margin-bottom: 16rpx;
}

.label {
  font-size: 28rpx;
  font-weight: bold;
}
</style>
