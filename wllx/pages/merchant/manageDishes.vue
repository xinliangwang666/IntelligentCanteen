<template>
  <view class="dish-list">
    <view 
      v-for="dish in dishes" 
      :key="dish.id" 
      class="dish-item"
    >
      <view class="dish-info">
        <text class="dish-name">{{ dish.name }}</text>
        <text class="dish-stock">库存：{{ dish.stock }}</text>
        <text class="dish-price">¥{{ dish.price }}</text>
      </view>

      <view class="actions">
        <button class="btn edit-btn" @click="editDish(dish.id)">编辑</button>
        <button class="btn delete-btn" @click="deleteDish(dish.id)">删除</button>
      </view>
    </view>

    <button class="add-btn" @click="addDish">＋ 新增菜品</button>
  </view>
</template>

<script>
export default {
  data() {
    return {
      dishes: [
        { id: 1, name: '红烧肉', price: 28, stock: 15 },
        { id: 2, name: '宫保鸡丁', price: 22, stock: 8 }
      ]
    }
  },
  methods: {
    editDish(id) {
      uni.navigateTo({ url: `/pages/merchant/editDish?id=${id}` })
    },
    deleteDish(id) {
      this.dishes = this.dishes.filter(d => d.id !== id)
      uni.showToast({ title: '删除成功', icon: 'success' })
    },
    addDish() {
      uni.navigateTo({ url: `/pages/merchant/editDish` })
    }
  }
}
</script>

<style scoped>
.dish-list {
  padding: 30rpx;
  background-color: #f7f8fa;
  min-height: 100vh;
}

.dish-item {
  background-color: #fff;
  border-radius: 16rpx;
  padding: 24rpx 30rpx;
  margin-bottom: 24rpx;
  box-shadow: 0 4rpx 12rpx rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.dish-info {
  display: flex;
  flex-direction: column;
}

.dish-name {
  font-size: 32rpx;
  font-weight: 600;
  color: #333;
}

.dish-stock {
  font-size: 26rpx;
  color: #888;
  margin: 6rpx 0;
}

.dish-price {
  font-size: 28rpx;
  color: #ff4d4f;
}

.actions {
  display: flex;
  gap: 20rpx;
}

.btn {
  padding: 10rpx 22rpx;
  border-radius: 12rpx;
  font-size: 26rpx;
  font-weight: 600;
  cursor: pointer;
  user-select: none;
  border: none;
  outline: none;
}

.edit-btn {
  background-color: #40a9ff;
  color: white;
  transition: background-color 0.3s;
}

.edit-btn:hover {
  background-color: #1890ff;
}

.delete-btn {
  background-color: #ff7875;
  color: white;
  transition: background-color 0.3s;
}

.delete-btn:hover {
  background-color: #ff4d4f;
}

.add-btn {
  width: 100%;
  background-color: #52c41a;
  color: white;
  border-radius: 20rpx;
  font-size: 32rpx;
  padding: 20rpx 0;
  font-weight: 700;
  margin-top: 40rpx;
  user-select: none;
  border: none;
  outline: none;
}

.add-btn:hover {
  background-color: #389e0d;
}
</style>
