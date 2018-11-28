// component/senior/goods_card/goods_card.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    width: {
      type: String,
      value: '370'
    },
    bgColor: {
      type: String,
      value: '#fff'
    },
    radius: {
      type: String,
      value: ''
    },
    src: {
      type: String,
      value: ''
    },
    imgHeight: {
      type: String,
      value: '380'
    },
    title: {
      type: String,
      value: ''
    },
    titleColor: {
      type: String,
      value: '#323232'
    },
    titleSize: {
      type: String,
      value: '26'
    },
    price: {
      type: String,
      value: ''
    },
    priceColor: {
      type: String,
      value: '#F62135'
    },
    priceSize: {
      type: String,
      value: '30'
    },
    detail: {
      type: String,
      value: ''
    },
    detailColor: {
      type: String,
      value: '#999'
    },
    detailSize: {
      type: String,
      value: '22'
    },
    spacing: {
      type: String,
      value: '10'
    },
    dataCus: {
      type: String,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  externalClasses: ['cus'],

  /**
   * 组件的方法列表
   */
  methods: {
    onTap: function (e) {
      console.log('goods_card点击事件触发', e);
      this.triggerEvent('goodstap', e, { bubbles: true });
    }
  }
})
