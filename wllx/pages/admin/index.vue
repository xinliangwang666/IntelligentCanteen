<template>
  <view class="admin-dashboard">
	<!-- 添加 logo -->
	<image class="header-logo" src="/static/logo1.png" alt="Header Logo" />
    <view class="card user-card" @click="go('user')">
      <text class="card-title">用户信息管理</text>
      <text class="card-subtitle">管理所有注册用户数据</text>
    </view>
    <view class="card merchant-card" @click="go('merchant')">
      <text class="card-title">商家信息管理</text>
      <text class="card-subtitle">管理所有商家资料</text>
    </view>
  </view>
</template>

<script>
export default {
  methods: {
    go(type) {
      const urlMap = {
        user: '/pages/admin/userList',
        merchant: '/pages/admin/merchantList'
      }
      uni.navigateTo({ url: urlMap[type] })
    }
  }
}
</script>

<style lang="scss" scoped>
	
.admin-dashboard {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  gap: 48rpx;
  background: #f5f7fa;
  padding: 0 30rpx;
}
.header-logo {
  width: 500rpx; // 设置图片宽度
  height: 250rpx; // 设置图片高度
  margin-bottom: 20rpx; // 底部间距
  margin-top: 10px; // 上移 10px
  display: block; // 确保图片块级显示
  margin: 0 auto; // 水平居中对齐
}
.card {
  width: 550rpx;
  padding: 40rpx 36rpx;
  border-radius: 24rpx;
  box-shadow: 0 8rpx 20rpx rgba(0,0,0,0.1);
  background-color: white;
  cursor: pointer;
  transition: box-shadow 0.3s ease;
  user-select: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.card:hover {
  box-shadow: 0 12rpx 30rpx rgba(0,0,0,0.15);
}

.user-card {
  border-left: 8rpx solid #409EFF;
}

.merchant-card {
  border-left: 8rpx solid #67C23A;
}

.card-title {
  font-size: 36rpx;
  font-weight: 700;
  color: #303133;
  margin-bottom: 16rpx;
  line-height: 44rpx;
}

.card-subtitle {
  font-size: 28rpx;
  color: #606266;
  line-height: 38rpx;
}
</style>
