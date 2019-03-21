// component/list/base_card/base_card.js
Component({

  options: {
    multipleSlots: true
  },

  /**
   * 组件的属性列表
   */
  properties: {
    src: {
      type: String,
      value: '',
    },
    imgWidth: {
      type: String,
      value: '160'
    },
    imgHeight: {
      type: String,
      value: '160'
    },
    bgColor: {
      type: String,
      value: '#fff'
    },
    title: {
      type: String,
      value: ''
    },
    titleColor: {
      type: String,
      value: '#333'
    },
    titleSize: {
      type: String,
      value: '28'
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
      console.log('base_card点击事件触发', e);
      this.triggerEvent('cardtap', e, { bubbles: true });
    }
  }
})
