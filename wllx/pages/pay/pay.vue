<template>
  <view class="pay-container">
    <view class="title">🔐 支付订单</view>

    <view class="order-info">
      <text>订单编号：{{ orderId }}</text>
      <text>支付金额：<text class="price">￥{{ totalPrice }}</text></text>
    </view>

    <view class="qrcode-area">
      <image src="/static/qrcode-placeholder.png" class="qrcode" />
      <text class="tip">请使用微信/支付宝扫码支付</text>
    </view>

    <view class="countdown">
      <text v-if="timeLeft > 0">
        请在 <text class="highlight">{{ formatTime(timeLeft) }}</text> 内完成支付
      </text>
      <text v-else class="expired">订单已过期</text>
    </view>

    <button class="pay-btn" @click="simulatePay" :disabled="timeLeft <= 0">
      模拟支付成功
    </button>
  </view>
</template>

<script>
export default {
  data() {
    return {
      totalPrice: 0,
      timeLeft: 600, // 10分钟 = 600秒
      timer: null,
      orderId: ''
    }
  },
  onLoad(options) {
    this.totalPrice = options.totalPrice || 0
    this.orderId = 'OD' + Date.now()
    this.startCountdown()
  },
  methods: {
    startCountdown() {
      this.timer = setInterval(() => {
        if (this.timeLeft > 0) {
          this.timeLeft--
        } else {
          clearInterval(this.timer)
        }
      }, 1000)
    },
    formatTime(seconds) {
      const minutes = String(Math.floor(seconds / 60)).padStart(2, '0')
      const secs = String(seconds % 60).padStart(2, '0')
      return `${minutes}:${secs}`
    },
    simulatePay() {
      uni.showToast({
        title: '支付成功',
        icon: 'success'
      })
      setTimeout(() => {
        uni.navigateBack()
      }, 1500)
    }
  },
  onUnload() {
    if (this.timer) clearInterval(this.timer)
  }
}
</script>

<style lang="scss">
$theme-color: #ff6b6b;

.pay-container {
  padding: 60rpx 40rpx;
  background: #fff;
  min-height: 100vh;

  .title {
    font-size: 40rpx;
    font-weight: bold;
    color: $theme-color;
    text-align: center;
    margin-bottom: 40rpx;
  }

  .order-info {
    text-align: center;
    font-size: 28rpx;
    color: #444;
    margin-bottom: 50rpx;

    .price {
      font-size: 36rpx;
      color: $theme-color;
      font-weight: bold;
    }
  }

  .qrcode-area {
    display: flex;
    flex-direction: column;
    align-items: center;

    .qrcode {
      width: 300rpx;
      height: 300rpx;
      margin-bottom: 20rpx;
    }

    .tip {
      font-size: 26rpx;
      color: #888;
    }
  }

  .countdown {
    margin: 50rpx auto 30rpx;
    text-align: center;
    font-size: 28rpx;

    .highlight {
      color: $theme-color;
      font-weight: bold;
    }

    .expired {
      color: red;
      font-weight: bold;
    }
  }

  .pay-btn {
    width: 100%;
    height: 90rpx;
    background: $theme-color;
    color: white;
    font-size: 32rpx;
    border-radius: 12rpx;

    &:disabled {
      background: #ccc;
    }
  }
}
</style>
