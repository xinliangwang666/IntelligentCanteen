<template>
  <view class="shop-container">
    <!-- 顶部操作栏 -->
    <view class="top-bar">
      <view class="delivery-type">
        <button 
          v-for="type in deliveryTypes" 
          :key="type.value"
          :class="['type-btn', delivery === type.value ? 'active' : '']"
          @click="delivery = type.value"
        >
          {{ type.label }}
        </button>
      </view>
      <input 
        v-model="searchKey" 
        class="search-input" 
        placeholder="搜索菜品" 
        placeholder-style="color: #999"
      />
    </view>

    <!-- 主体内容 -->
    <view class="main-content">
      <!-- 左侧分类栏 -->
      <scroll-view class="category-list" scroll-y>
        <view 
          v-for="(cat, index) in categories" 
          :key="index"
          :class="['category-item', currentTab === index ? 'active' : '']"
          @click="currentTab = index"
        >
          {{ cat.name }}
          <text class="category-count"></text>
        </view>
      </scroll-view>

      <!-- 右侧菜品列表 -->
      <scroll-view class="dish-list" scroll-y>
        <view 
          v-for="dish in filteredDishes" 
          :key="dish.id" 
          class="dish-card"
        >
          <image class="dish-image" :src="dish.image" mode="aspectFill" />
          <view class="dish-info">
            <view class="dish-header">
              <view class="dish-name">{{ dish.name }}</view>
              <view class="dish-tag" v-if="dish.isHot">热销</view>
            </view>
            <view class="dish-desc">{{ dish.desc }}</view>
            <view class="dish-footer">
              <text class="price">￥{{ dish.price }}</text>
              <view class="quantity-control">
                <button 
                  class="btn-minus" 
                  @click.stop="adjustQuantity(dish, -1)"
                  :disabled="dish.quantity <= 0"
                >-</button>
                <text class="quantity">{{ dish.quantity || 0 }}</text>
                <button 
                  class="btn-plus" 
                  @click.stop="adjustQuantity(dish, 1)"
                >+</button>
              </view>
            </view>
          </view>
        </view>
      </scroll-view>
    </view>

    <!-- 底部结算栏 -->
    <view class="checkout-bar">
      <view class="total-price">
        合计：<text class="price">￥{{ totalPrice }}</text>
      </view>
      <button 
        class="checkout-btn" 
        @click="handleCheckout"
        :disabled="totalQuantity === 0"
      >去结算({{ totalQuantity }})</button>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      currentTab: 0,
      searchKey: '',
      delivery: 'pickup',
      deliveryTypes: [
        { label: '自提', value: 'pickup' },
        { label: '外送', value: 'delivery' }
      ],
      categories: [
        { name: '汉堡主食', count: 2 },
        { name: '小吃配餐', count: 2 },
        { name: '甜品饮料', count: 2 },
        { name: '超值套餐', count: 2 }
      ],
      dishList: [
        // 汉堡主食
        {
          id: 1,
          name: '巨无霸汉堡',
          price: 28,
          desc: '双层牛肉经典风味',
          image: '/static/burger.jpg',
          category: '汉堡主食',
          isHot: true,
          quantity: 0
        },
        {
          id: 2,
          name: '安格斯厚牛堡',
          price: 38,
          desc: '澳洲进口牛肉制作',
          image: '/static/burger1.jpg',
          category: '汉堡主食',
          quantity: 0
        },
        // 小吃配餐
        {
          id: 3,
          name: '黄金薯条',
          price: 12,
          desc: '外酥里嫩经典小吃',
          image: '/static/fries.jpg',
          category: '小吃配餐',
          isHot: true,
          quantity: 0
        },
        {
          id: 4,
          name: '麦乐鸡块',
          price: 15,
          desc: '10块欢乐分享装',
          image: '/static/chicken.png',
          category: '小吃配餐',
          quantity: 0
        },
        // 甜品饮料
        {
          id: 5,
          name: '草莓圣代',
          price: 10,
          desc: '丝滑冰淇淋配草莓酱',
          image: '/static/sundae.jpg',
          category: '甜品饮料',
          quantity: 0
        },
        {
          id: 6,
          name: '冰镇可乐',
          price: 8,
          desc: '500ml畅爽饮品',
          image: '/static/cola.jpg',
          category: '甜品饮料',
          quantity: 0
        },
        // 超值套餐
        {
          id: 7,
          name: '超值全家桶',
          price: 88,
          desc: '3汉堡+2小食+4饮料',
          image: '/static/combo1.jpg',
          category: '超值套餐',
          quantity: 0
        },
        {
          id: 8,
          name: '双人分享餐',
          price: 66,
          desc: '2汉堡+2小食+2饮料',
          image: '/static/combo2.jpg',
          category: '超值套餐',
          quantity: 0
        }
      ]
    }
  },
  computed: {
    filteredDishes() {
      return this.dishList.filter(item => 
        item.name.includes(this.searchKey) && 
        item.category === this.categories[this.currentTab].name
      )
    },
    totalPrice() {
      return this.dishList.reduce((sum, item) => sum + (item.price * (item.quantity || 0)), 0)
    },
    totalQuantity() {
      return this.dishList.reduce((sum, item) => sum + (item.quantity || 0), 0)
    }
  },
  methods: {
    adjustQuantity(dish, delta) {
      this.$set(dish, 'quantity', Math.max(0, (dish.quantity || 0) + delta))
    },
    handleCheckout() {
      uni.navigateTo({
        url: '/pages/pay/pay'
      })
    }
  }
}
</script>
<style lang="scss">
.shop-container {
  height: 100vh;
  display: flex;
  flex-direction: column;

  .top-bar {
    display: flex;
    align-items: center;
    padding: 20rpx 30rpx;
    background: #fff;
    box-shadow: 0 4rpx 12rpx rgba(0,0,0,0.06);

    .delivery-type {
      display: flex;
      margin-right: 30rpx;
      
      .type-btn {
        height: 60rpx;
        line-height: 60rpx;
        padding: 0 30rpx;
        margin: 0;
        font-size: 28rpx;
        border-radius: 30rpx;
        background: #f5f5f5;
        color: #666;
        
        &.active {
          background: #007aff;
          color: white;
        }
        
        &::after { border: none; }
      }
    }

    .search-input {
      flex: 1;
      height: 70rpx;
      padding: 0 30rpx;
      background: #f5f5f5;
      border-radius: 35rpx;
      font-size: 28rpx;
    }
  }

  .main-content {
    flex: 1;
    display: flex;
    overflow: hidden;

    .category-list {
      width: 200rpx;
      background: #f8f8f8;
      
      .category-item {
        height: 100rpx;
        line-height: 100rpx;
        padding: 0 20rpx;
        font-size: 28rpx;
        color: #666;
        border-left: 6rpx solid transparent;
        
        &.active {
          background: white;
          color: #007aff;
          border-left-color: #007aff;
          font-weight: bold;
        }
      }
    }

    .dish-list {
      flex: 1;
      padding: 20rpx 30rpx;

      .dish-card {
        display: flex;
        margin-bottom: 30rpx;
        background: white;
        border-radius: 16rpx;
        box-shadow: 0 4rpx 12rpx rgba(0,0,0,0.06);

        .dish-image {
          width: 200rpx;
          height: 200rpx;
          border-radius: 16rpx;
        }

        .dish-info {
          flex: 1;
          padding: 20rpx;
          
          .dish-name {
            font-size: 32rpx;
            font-weight: bold;
            margin-bottom: 10rpx;
          }
          
          .dish-desc {
            font-size: 24rpx;
            color: #999;
            margin-bottom: 20rpx;
          }

          .dish-footer {
            display: flex;
            justify-content: space-between;
            align-items: center;

            .price {
              color: #ff4444;
              font-size: 36rpx;
              font-weight: bold;
            }

            .quantity-control {
              display: flex;
              align-items: center;
              
              button {
                width: 60rpx;
                height: 60rpx;
                line-height: 60rpx;
                padding: 0;
                margin: 0 10rpx;
                border-radius: 50%;
                background: #f5f5f5;
                
                &[disabled] {
                  opacity: 0.5;
                }
              }
              
              .btn-plus {
                background: #007aff;
                color: white;
              }
              
              .quantity {
                min-width: 40rpx;
                text-align: center;
              }
            }
          }
        }
      }
    }
  }

  .checkout-bar {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100rpx;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 30rpx;
    background: white;
    box-shadow: 0 -4rpx 12rpx rgba(0,0,0,0.06);

    .total-price {
      font-size: 32rpx;
      
      .price {
        color: #ff4444;
        font-weight: bold;
      }
    }

    .checkout-btn {
      height: 80rpx;
      line-height: 80rpx;
      padding: 0 60rpx;
      background: #007aff;
      color: white;
      border-radius: 40rpx;
      font-size: 32rpx;
      
      &::after { border: none; }
    }
  }
  .category-list {
      .category-item {
        position: relative;
        &.active {
          background: linear-gradient(90deg, #f8f8f8, white);
          .category-count {
            color: #007aff;
          }
        }
        .category-count {
          position: absolute;
          right: 20rpx;
          top: 50%;
          transform: translateY(-50%);
          font-size: 24rpx;
          color: #999;
        }
      }
    }
  
    .dish-card {
      position: relative;
      transition: all 0.3s ease;
      
      &:active {
        transform: scale(0.98);
      }
  
      .dish-header {
        display: flex;
        align-items: center;
        .dish-tag {
          margin-left: 15rpx;
          padding: 4rpx 12rpx;
          background: #ffeaea;
          color: #ff4444;
          font-size: 20rpx;
          border-radius: 8rpx;
        }
      }
  
      .dish-image {
        border: 4rpx solid rgba(0,0,0,0.06);
      }
  
      // .price {
      //   &::before {
      //     content: '¥';
      //     font-size: 0.8em;
      //   }
      // }
  
      .quantity-control {
        button {
          transition: all 0.2s ease;
          &:active {
            transform: scale(0.9);
          }
        }
      }
    }
  
    .checkout-btn {
      transition: all 0.3s ease;
      &[disabled] {
        background: #ccc !important;
        opacity: 0.8;
      }
    }
}
</style>
