<template>
  <view class="page-container">
    <view class="record-item" v-for="record in records" :key="record.id">
      <view class="record-left">
        <text class="store">{{ record.store }}</text>
        <text class="date">{{ record.date }}</text>
      </view>
      <view class="record-right">
        <text class="amount">-￥{{ record.amount }}</text>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      records: [
        { id: 1, store: '米线女王', amount: 18, date: '2025-05-18 12:03' },
        { id: 2, store: '老王烧烤', amount: 56, date: '2025-05-17 21:40' },
        { id: 3, store: '日料一番屋', amount: 88, date: '2025-05-15 19:20' }
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
.record-item {
  background: white;
  padding: 30rpx;
  border-radius: 20rpx;
  margin-bottom: 20rpx;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4rpx 10rpx rgba(0, 0, 0, 0.05);

  .record-left {
    .store {
      font-size: 32rpx;
      font-weight: 600;
    }

    .date {
      font-size: 26rpx;
      color: #999;
    }
  }

  .record-right {
    .amount {
      font-size: 32rpx;
      color: #ff4d4f;
      font-weight: bold;
    }
  }
}
</style>
