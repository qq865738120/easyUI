// component/base/enhance_image/enhance_image.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    width: {
      type: String,
      value: '600'
    },
    height: {
      type: String,
      value: '450'
    },
    src: {
      type: String,
      value: ''
    },
    mode: {
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
    onError: function (e) {
      console.log('enhance_image图片加载错误事件触发', e);
      this.triggerEvent('error', e, { bubbles: true });
    },
    onLoad: function (e) {
      console.log('enhance_image图片加载完毕事件触发', e);
      this.triggerEvent('load', e, { bubbles: true });
    }
  }
})
