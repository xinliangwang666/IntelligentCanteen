<template>
  <view class="profile-container">
    <!-- 用户信息 -->
    <view class="user-info-card">
      <view class="avatar-section" @click="changeAvatar">
        <image class="avatar" :src="userInfo.avatar" mode="aspectFill" />
        <text class="edit-icon">✎</text>
      </view>
      <view class="info-section">
        <view class="info-item">
          <text class="label">用户名：</text>
          <input class="value" v-model="userInfo.username" />
          <text class="edit-btn" @click="editUsername">编辑</text>
        </view>
        <view class="info-item">
          <text class="label">手机号：</text>
          <input class="value" v-model="userInfo.phone" disabled />
          <text class="edit-btn" @click="changePhone">更换</text>
        </view>
      </view>
    </view>

    <!-- 功能入口 -->
    <view class="menu-card">
      <view class="menu-item" @click="navigateTo('favorites')">
        <view class="menu-left">
          <image class="menu-icon" src="/static/icon-fav.png" />
          <text>收藏的店铺</text>
        </view>
        <text class="arrow">›</text>
      </view>

      <view class="menu-item" @click="navigateTo('orders')">
        <view class="menu-left">
          <image class="menu-icon" src="/static/icon-order.png" />
          <text>历史订单</text>
        </view>
        <text class="arrow">›</text>
      </view>

      <view class="menu-item" @click="navigateTo('records')">
        <view class="menu-left">
          <image class="menu-icon" src="/static/icon-record.png" />
          <text>红包餐券</text>
        </view>
        <text class="arrow">›</text>
      </view>
    </view>

    <!-- 退出登录 -->
    <button class="logout-btn" @click="logout">退出登录</button>
	
	<!-- 添加产品 logo -->
	<image class="logo" src="/static/logo1.png" alt="Logo" />
  </view>
</template>

<script>
export default {
  data() {
    return {
      userInfo: {
        avatar: '/static/avatar-default.png',
        username: '美食探索家',
        phone: '138****5678'
      }
    }
  },
  methods: {
    changeAvatar() {
      uni.chooseImage({
        count: 1,
        success: (res) => {
          this.userInfo.avatar = res.tempFilePaths[0]
        }
      })
    },
    editUsername() {
      uni.showModal({
        title: '修改用户名',
        content: '请输入新用户名',
        editable: true,
        success: (res) => {
          if (res.confirm) {
            this.userInfo.username = res.content
          }
        }
      })
    },
    changePhone() {
      uni.navigateTo({
        url: '/pages/profile/change-phone'
      })
    },
    navigateTo(type) {
      const routes = {
        favorites: '/pages/favorites/list',
        orders: '/pages/orders/history',
        records: '/pages/records/list'
      }
      uni.navigateTo({ url: routes[type] })
    },
    logout() {
      uni.showModal({
        title: '确认退出',
        content: '确定要退出登录吗？',
        success: (res) => {
          if (res.confirm) {
            uni.redirectTo({ url: '/pages/login/login' })
          }
        }
      })
    }
  }
}
</script>

<style lang="scss">
	
.logo {
  width: 600rpx; // 设置图片宽度
  height: 300rpx; // 设置图片高度
  display: block; // 确保图片块级显示
  margin: 0 auto; // 水平居中
  margin-top: 80rpx;
}

.profile-container {
  padding: 30rpx;
  background: #f5f5f5;
  min-height: 100vh;
  position: relative; // 确保子元素可以使用绝对定位
}

.user-info-card {
  margin-top: 40rpx;
  background: white;
  border-radius: 20rpx;
  padding: 40rpx 20rpx;
  margin-bottom: 30rpx;
  box-shadow: 0 4rpx 12rpx rgba(0,0,0,0.06);
  display: flex;
  align-items: center;

  .avatar-section {
    position: relative;
    margin-right: 40rpx;
    .avatar {
      width: 140rpx;
      height: 140rpx;
      border-radius: 50%;
      border: 4rpx solid #f0f0f0;
	  margin-top: -20rpx;
    }
    .edit-icon {
      position: absolute;
      right: 0;
      bottom: 0;
      background: #007aff;
      color: white;
      width: 50rpx;
      height: 50rpx;
      border-radius: 50%;
      text-align: center;
      line-height: 50rpx;
      font-size: 28rpx;
    }
  }

  .info-item {
    margin-bottom: 30rpx;
    display: flex;
    align-items: center;
    .label {
      color: #666;
      width: 140rpx;
    }
    .value {
      flex: 1;
      color: #333;
      font-weight: 500;
      &[disabled] {
        opacity: 0.8;
      }
    }
    .edit-btn {
      color: #007aff;
      margin-left: 20rpx;
      padding: 8rpx 20rpx;
      border-radius: 30rpx;
      background: #f0f6ff;
    }
  }
}

.menu-card {
  margin-top: 40rpx; // 向下移动 80rpx
  background: white;
  border-radius: 20rpx;
  box-shadow: 0 4rpx 12rpx rgba(0,0,0,0.06);
  
  .menu-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30rpx;
    border-bottom: 1rpx solid #eee;
    
    &:last-child {
      border-bottom: none;
    }

    .menu-left {
      display: flex;
      align-items: center;
      .menu-icon {
        width: 50rpx;
        height: 50rpx;
        margin-right: 20rpx;
      }
    }

    .arrow {
      font-size: 50rpx;
      color: #999;
    }
  }
}

.logout-btn {
  margin-top: 60rpx;
  background: #ff4d4f;
  color: white;
  border-radius: 50rpx;
  height: 90rpx;
  line-height: 90rpx;
  font-size: 32rpx;
  
  &::after {
    border: none;
  }
  
  &:active {
    opacity: 0.8;
  }
}
</style>