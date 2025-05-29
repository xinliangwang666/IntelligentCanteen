<template>
  <view class="page-container">
    <view class="card" v-for="item in favorites" :key="item.id">
      <image class="store-img" :src="item.img" mode="aspectFill" />
      <view class="store-info">
        <text class="store-name">{{ item.name }}</text>
        <text class="store-desc">{{ item.desc }}</text>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      favorites: [
        { id: 1, name: '老王烧烤', desc: '深夜烧烤，香辣过瘾', img: '/static/bbq.jpg' },
        { id: 2, name: '米线女王', desc: '云南特色米线', img: '/static/store2.jpg' },
        { id: 3, name: '日料一番屋', desc: '正宗日式料理', img: '/static/store3.jpg' }
      ]
    }
  }
}
</script>

<style lang="scss">
.page-container {
  padding: 30rpx;
  background: #f5f5f5;
  min-height: 100vh;
}
.card {
  display: flex;
  background: white;
  margin-bottom: 20rpx;
  border-radius: 20rpx;
  overflow: hidden;
  box-shadow: 0 4rpx 10rpx rgba(0, 0, 0, 0.05);

  .store-img {
    width: 160rpx;
    height: 160rpx;
  }

  .store-info {
    padding: 20rpx;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .store-name {
      font-size: 32rpx;
      font-weight: bold;
    }

    .store-desc {
      margin-top: 10rpx;
      color: #888;
    }
  }
}
</style>
