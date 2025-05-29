<template>
  <view class="login-container">
    <!-- 添加 logo -->
    <image class="logo" src="/static/logo1.png" alt="Logo" />
	
	<!-- 身份选择 -->
    <view class="identity-picker">
      <view 
        v-for="role in roles" 
        :key="role.value"
        :class="['role-item', activeRole === role.value ? 'active' : '']"
        @click="handleRoleSelect(role.value)"
      >
        {{ role.label }}
      </view>
    </view>

    <!-- 登录表单 -->
    <view class="login-form">
      <view class="input-group">
        <image class="input-icon" src="/static/icon-user.png" />
        <input 
          v-model="username" 
          placeholder="请输入用户名/手机号" 
          placeholder-class="placeholder"
          class="form-input"
        />
      </view>
      
      <view class="input-group">
        <image class="input-icon" src="/static/icon-lock.png" />
        <input 
          v-model="password" 
          password 
          placeholder="请输入密码" 
          placeholder-class="placeholder"
          class="form-input"
        />
        <text class="eye-icon" @click="showPassword = !showPassword">
          {{ showPassword ? '👁️' : '👁️️' }}
        </text>
      </view>

      <button class="login-btn" @click="handleLogin">立即登录</button>
      
      <!-- 辅助功能 -->
      <view class="assist-links">
        <text @click="navigateTo('forget')">忘记密码</text>
        <text @click="navigateTo('register')">立即注册</text>
      </view>
    </view>

    <!-- 第三方登录 -->
    <view class="third-login">
      <view class="divider">
        <text class="divider-text">其他登录方式</text>
      </view>
      <button class="wechat-btn" @click="wechatLogin">
        <image class="wechat-icon" src="/static/icon-wechat.png" />
        微信一键登录
      </button>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      activeRole: 'user',
      roles: [
        { label: '用户登录', value: 'user' },
        { label: '商家登录', value: 'merchant' },
        { label: '管理员', value: 'admin' }
      ],
      username: '',
      password: '',
      showPassword: false
    }
  },
  methods: {
    handleRoleSelect(role) {
      this.activeRole = role
    },
    handleLogin() {
      // 根据身份跳转不同页面
      const roleMap = {
        user: '/pages/user/index',
        merchant: '/pages/merchant/index',
        admin: '/pages/admin/index'
      }
      uni.navigateTo({ url: roleMap[this.activeRole] })
    },
    wechatLogin() {
      uni.login({
        provider: 'weixin',
        success: res => {
          console.log('微信登录成功', res)
        }
      })
    },
    navigateTo(type) {
      const paths = {
        forget: '/pages/login/forget',
        register: '/pages/login/register'
      }
      uni.navigateTo({ url: paths[type] })
    }
  }
}
</script>

<style lang="scss">
.login-container {
  padding: 60rpx 40rpx;
  background: linear-gradient(to bottom right, #f5f7fa, #dbeafe);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  // 新增 logo 样式
 .logo {
  width: 500rpx; // 设置图片宽度
  height: 230rpx; // 设置图片高度
  margin-bottom: 50rpx; // 底部间距
  display: block; // 确保图片块级显示
  margin: 0 auto; // 水平居中
  position: relative;
  top: -50rpx;
  }
} 

.identity-picker {
  display: flex;
  margin-bottom: 50rpx;
  background: #ffffff;
  border-radius: 50rpx;
  padding: 12rpx;
  box-shadow: 0 6rpx 16rpx rgba(0, 0, 0, 0.06);

  .role-item {
    flex: 1;
    text-align: center;
    padding: 28rpx 0;
    font-size: 30rpx;
    color: #666;
    border-radius: 40rpx;
    transition: all 0.2s;

    &.active {
      background: linear-gradient(to right, #007aff, #00c6ff);
      color: white;
      font-weight: bold;
      box-shadow: 0 6rpx 12rpx rgba(0, 122, 255, 0.25);
    }
  }
}

.login-form {
  background: #ffffff;
  padding: 40rpx;
  border-radius: 30rpx;
  box-shadow: 0 10rpx 24rpx rgba(0, 0, 0, 0.05);

  .input-group {
    display: flex;
    align-items: center;
    position: relative;
    margin-bottom: 40rpx;

    .input-icon {
      width: 40rpx;
      height: 40rpx;
      margin-right: 20rpx;
    }

    .form-input {
      flex: 1;
      height: 80rpx;
      font-size: 30rpx;
      padding: 0 20rpx;
      border: 2rpx solid #eee;
      border-radius: 12rpx;
      background: #f8f8f8;

      &:focus {
        border-color: #007aff;
        background: #ffffff;
      }
    }

    .eye-icon {
      position: absolute;
      right: 10rpx;
      font-size: 34rpx;
      color: #999;
    }
  }

  .login-btn {
    background: linear-gradient(to right, #007aff, #00c6ff);
    color: white;
    height: 90rpx;
    line-height: 90rpx;
    border-radius: 45rpx;
    font-size: 34rpx;
    margin: 20rpx 0;
    box-shadow: 0 8rpx 18rpx rgba(0, 122, 255, 0.25);
    transition: all 0.2s;

    &:active {
      opacity: 0.8;
    }
  }
}

.assist-links {
  display: flex;
  justify-content: space-between;
  color: #666;
  font-size: 28rpx;
  margin-top: 10rpx;

  text {
    padding: 12rpx;
    &:active {
      opacity: 0.7;
    }
  }
}

.third-login {
  margin-top: 80rpx;

  .divider {
    position: relative;
    height: 1rpx;
    background: #ccc;
    margin: 40rpx 0;

    .divider-text {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      background: linear-gradient(to bottom right, #f5f7fa, #dbeafe);
      padding: 0 20rpx;
      color: #999;
      font-size: 24rpx;
    }
  }

  .wechat-btn {
    background: #07c160;
    color: white;
    height: 90rpx;
    border-radius: 45rpx;
    font-size: 30rpx;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 8rpx 18rpx rgba(7, 193, 96, 0.25);

    .wechat-icon {
      width: 44rpx;
      height: 44rpx;
      margin-right: 16rpx;
    }
  }
}

.placeholder {
  color: #bbb;
}
</style>
