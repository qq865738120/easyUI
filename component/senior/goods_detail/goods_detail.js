// component/senior/goods_detail/goods_detail.js
Component({

  options: {
    multipleSlots: true
  },

  /**
   * 组件的属性列表
   */
  properties: {
    bgColor: {
      type: String,
      value: '#fff'
    },
    imgList: {
      type: Array,
      value: ''
    },
    title: {
      type: String,
      value: ''
    },
    titleColor: {
      type: String,
      value: '#333333'
    },
    titleSize: {
      type: String,
      value: '32'
    },
    price: {
      type: String,
      value: ''
    },
    priceColor: {
      type: String,
      value: '#F23030'
    },
    priceSize: {
      type: String,
      value: '36'
    },
    detail: {
      type: String,
      value: ''
    },
    detailColor: {
      type: String,
      value: '#F23030'
    },
    detailSize: {
      type: String,
      value: '22'
    },
    subDetail: {
      type: String,
      value: '',
      observer: function (newVal) {
        this.setData({
          mDetail: ''
        });
      }
    },
    sales: {
      type: String,
      value: ''
    },
    salesColor: {
      type: String,
      value: '#999999'
    },
    salesSize: {
      type: String,
      value: '22'
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    mDetail: 'border: 1rpx solid; padding: 2rpx 8rpx; border-radius: 6rpx;'
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
