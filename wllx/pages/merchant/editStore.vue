<template>
  <view class="form-container">
    <view class="header">
      <text class="title">编辑店铺信息</text>
      <text class="subtitle">请填写店铺的基本资料</text>
    </view>

    <view class="form-card">
      <view class="form-item">
        <text class="label">🏪 店铺名称</text>
        <input v-model="store.name" class="input" placeholder="请输入店铺名" />
      </view>

      <view class="form-item">
        <text class="label">📍 地址</text>
        <input v-model="store.address" class="input" placeholder="请输入地址" />
      </view>

      <view class="form-item">
        <text class="label">📞 联系电话</text>
        <input v-model="store.phone" class="input" placeholder="请输入电话" />
      </view>

      <button class="submit-btn" @click="submit">💾 保存修改</button>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      store: {
        name: '',
        address: '',
        phone: ''
      }
    }
  },
  methods: {
    submit() {
      uni.showToast({ title: '保存成功', icon: 'success' })
      // TODO: 发请求更新商家信息表
    }
  }
}
</script>

<style scoped>
.form-container {
  min-height: 100vh;
  background-color: #f0f2f5;
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
  background-color: #ffffff;
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
  color: #444;
}

.input {
  background-color: #f9f9f9;
  border-radius: 12rpx;
  padding: 22rpx;
  font-size: 28rpx;
  border: 1rpx solid #ccc;
}

.submit-btn {
  background-color: #3c9cff;
  color: #fff;
  border-radius: 14rpx;
  padding: 26rpx 0;
  font-size: 30rpx;
  font-weight: bold;
  margin-top: 20rpx;
}
</style>
