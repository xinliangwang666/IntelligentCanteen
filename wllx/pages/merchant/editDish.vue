<template>
  <view class="form-container">
    <view class="header">
      <text class="title">编辑菜品信息</text>
      <text class="subtitle">请完善下方信息后保存</text>
    </view>

    <view class="form-card">
      <view class="form-item">
        <text class="label">🍜 菜名</text>
        <input v-model="dish.name" class="input" placeholder="请输入菜名" />
      </view>

      <view class="form-item">
        <text class="label">💰 价格</text>
        <input v-model="dish.price" type="number" class="input" placeholder="单位：元" />
      </view>

      <view class="form-item">
        <text class="label">📝 描述</text>
        <textarea v-model="dish.description" class="textarea" placeholder="介绍菜品特色…" />
      </view>

      <view class="form-item">
        <text class="label">📦 库存</text>
        <input v-model="dish.stock" type="number" class="input" placeholder="请输入库存数量" />
      </view>

      <button class="submit-btn" @click="submit">💾 保存</button>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      dish: {
        name: '',
        price: 0,
        description: '',
        stock: 0
      }
    }
  },
  onLoad(options) {
    if (options.id) {
      // TODO: 拉取现有菜品信息
    }
  },
  methods: {
    submit() {
      // TODO: 提交接口
      uni.showToast({ title: '保存成功', icon: 'success' })
    }
  }
}
</script>

<style scoped>
.form-container {
  min-height: 100vh;
  background-color: #f2f3f7;
  padding: 40rpx 30rpx;
}

.header {
  margin-bottom: 30rpx;
}

.title {
  font-size: 36rpx;
  font-weight: bold;
  color: #333;
}

.subtitle {
  font-size: 26rpx;
  color: #888;
  margin-top: 8rpx;
}

.form-card {
  background-color: #fff;
  border-radius: 20rpx;
  box-shadow: 0 6rpx 12rpx rgba(0, 0, 0, 0.06);
  padding: 30rpx;
}

.form-item {
  margin-bottom: 36rpx;
}

.label {
  display: block;
  font-size: 28rpx;
  font-weight: 500;
  margin-bottom: 12rpx;
  color: #333;
}

.input {
  background-color: #f8f8f8;
  border-radius: 12rpx;
  padding: 20rpx;
  font-size: 28rpx;
  border: 1rpx solid #ddd;
}

.textarea {
  background-color: #f8f8f8;
  border-radius: 12rpx;
  padding: 20rpx;
  height: 160rpx;
  font-size: 28rpx;
  border: 1rpx solid #ddd;
}

.submit-btn {
  background-color: #4a90e2;
  color: #fff;
  border-radius: 14rpx;
  padding: 24rpx 0;
  font-size: 30rpx;
  font-weight: bold;
  margin-top: 20rpx;
}
</style>
