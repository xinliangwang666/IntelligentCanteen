<template>
  <view class="order-list">
    <view v-for="order in orders" :key="order.id" class="order-item">
      <view class="order-info">
        <text class="order-id">订单 #{{ order.id }}</text>
        <text :class="['order-status', statusClass(order.status)]">{{ order.status }}</text>
      </view>

      <view class="actions">
        <button
          class="btn accept-btn"
          :disabled="order.status !== '待接单'"
          @click="updateStatus(order.id, '制作中')"
        >接单</button>

        <button
          class="btn reject-btn"
          :disabled="order.status !== '待接单'"
          @click="updateStatus(order.id, '已拒绝')"
        >拒绝</button>

        <button
          class="btn finish-btn"
          :disabled="order.status !== '制作中'"
          @click="updateStatus(order.id, '已完成')"
        >出餐</button>

        <button
          class="btn reset-btn"
          @click="resetStatus(order.id)"
        >重置</button>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      orders: [
        { id: 101, status: '待接单' },
        { id: 102, status: '制作中' },
        { id: 103, status: '已完成' }
      ]
    }
  },
  methods: {
    updateStatus(id, status) {
      const order = this.orders.find(o => o.id === id)
      if (order) {
        order.status = status
        uni.showToast({ title: `状态已更新为 ${status}`, icon: 'success' })
      }
    },
    resetStatus(id) {
      const order = this.orders.find(o => o.id === id)
      if (order) {
        order.status = '待接单'
        uni.showToast({ title: '订单已重置为 待接单', icon: 'none' })
      }
    },
    statusClass(status) {
      switch(status) {
        case '待接单': return 'status-pending'
        case '制作中': return 'status-processing'
        case '已完成': return 'status-completed'
        case '已拒绝': return 'status-rejected'
        default: return ''
      }
    }
  }
}
</script>

<style scoped>
.order-list {
  padding: 30rpx;
  background-color: #f0f2f5;
  min-height: 100vh;
}

.order-item {
  background: #fff;
  border-radius: 16rpx;
  padding: 24rpx 30rpx;
  margin-bottom: 24rpx;
  box-shadow: 0 4rpx 12rpx rgba(0, 0, 0, 0.06);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.order-info {
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 160rpx;
}

.order-id {
  font-weight: 700;
  font-size: 32rpx;
  color: #333;
}

.order-status {
  margin-top: 8rpx;
  font-weight: 600;
  font-size: 28rpx;
  padding: 6rpx 14rpx;
  border-radius: 14rpx;
  width: fit-content;
  user-select: none;
}

.status-pending {
  background-color: #fff7e6;
  color: #faad14;
}

.status-processing {
  background-color: #e6f7ff;
  color: #1890ff;
}

.status-completed {
  background-color: #f6ffed;
  color: #52c41a;
}

.status-rejected {
  background-color: #fff1f0;
  color: #f5222d;
}

.actions {
  display: flex;
  gap: 20rpx;
  margin-top: 10rpx;
  flex-wrap: nowrap;
}

.btn {
  padding: 12rpx 28rpx;
  border-radius: 16rpx;
  font-weight: 600;
  font-size: 28rpx;
  border: none;
  cursor: pointer;
  user-select: none;
  transition: background-color 0.3s ease;
  outline: none;
  white-space: nowrap;
}

/* 接单按钮 */
.accept-btn {
  background-color: #1890ff;
  color: white;
}
.accept-btn:disabled {
  background-color: #a0cfff;
  cursor: not-allowed;
}
.accept-btn:hover:not(:disabled) {
  background-color: #096dd9;
}

/* 拒绝按钮 */
.reject-btn {
  background-color: #f5222d;
  color: white;
}
.reject-btn:disabled {
  background-color: #ffa39e;
  cursor: not-allowed;
}
.reject-btn:hover:not(:disabled) {
  background-color: #cf1322;
}

/* 出餐按钮 */
.finish-btn {
  background-color: #52c41a;
  color: white;
}
.finish-btn:disabled {
  background-color: #b7eb8f;
  cursor: not-allowed;
}
.finish-btn:hover:not(:disabled) {
  background-color: #389e0d;
}

/* 重置按钮 */
.reset-btn {
  background-color: #d9d9d9;
  color: #333;
}
.reset-btn:hover {
  background-color: #bfbfbf;
}
</style>
