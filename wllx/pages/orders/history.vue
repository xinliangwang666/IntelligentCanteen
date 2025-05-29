<template>
  <view class="page-container">
    <view class="order-card" v-for="order in orders" :key="order.id">
      <view class="order-header">
        <text>{{ order.store }}</text>
        <text class="status">{{ order.status }}</text>
      </view>
      <view class="order-body">
        <text>{{ order.items }}</text>
        <text class="total">￥{{ order.total }}</text>
      </view>
      <view class="order-footer">
        <text>{{ order.date }}</text>
      </view>
    </view>
	<!-- 添加 logo -->
	<image class="footer-logo" src="/static/logo1.png" alt="Footer Logo" />
  </view>
</template>

<script>
export default {
  data() {
    return {
      orders: [
        { id: 1, store: '米线女王', items: '酸辣米线 ×1', total: 18, status: '已完成', date: '2025-05-18 12:03' },
        { id: 2, store: '老王烧烤', items: '烤串 ×3，啤酒 ×2', total: 56, status: '已完成', date: '2025-05-17 21:40' },
        { id: 3, store: '日料一番屋', items: '寿司套餐 ×1', total: 88, status: '已取消', date: '2025-05-15 19:20' }
      ]
    }
  }
}
</script>

<style lang="scss">
.page-container {
  padding: 30rpx;
  background: #f5f5f5;
}

.footer-logo {
  position: relative; // 启用相对定位
  top: -300rpx; // 向上移动 10rpx
  width: 600rpx; // 设置图片宽度
  height: 350rpx; // 设置图片高度
  display: block; // 确保图片块级显示
  margin: 500rpx auto 0; // 上边距 20rpx，水平居中对齐
  opacity: 0.5; // 透明度 50%
}

.order-card {
  background: white;
  border-radius: 20rpx;
  padding: 30rpx;
  margin-bottom: 20rpx;
  box-shadow: 0 4rpx 10rpx rgba(0, 0, 0, 0.05);

  .order-header {
    display: flex;
    justify-content: space-between;
    font-size: 30rpx;
    font-weight: 600;
    margin-bottom: 10rpx;

    .status {
      color: #007aff;
    }
  }

  .order-body {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10rpx;
    color: #666;

    .total {
      font-weight: bold;
    }
  }

  .order-footer {
    font-size: 24rpx;
    color: #999;
  }
}
</style>
