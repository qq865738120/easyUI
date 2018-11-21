// component/structure/head_view/head_view.js
Component({

  options: {
    multipleSlots: true
  },

  /**
   * 组件的属性列表
   */
  properties: {
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
      value: '30'
    },
    tickness: {
      type: String,
      value: '700'
    },
    bgColor: {
      type: String,
      value: '#fff'
    },
    margin: {
      type: String,
      value: '30'
    },
    padding: {
      type: String,
      value: '25'
    },
    lineColor: {
      type: String,
      value: '#e8e8e8'
    },
    theme: {
      type: String,
      value: 'default',
      observer: function (newVal) {
        const padding = this.data.padding;
        const margin = this.data.margin;
        const themes = {
          default: ` padding: ${padding}rpx 0; margin: 0 ${margin}rpx;`,
          longLine: ` padding: ${padding}rpx  ${margin}rpx;`
        }
        this.setData({
          mTitle: themes[newVal]
        })
      }
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
    mTitle: ''
  },

  lifetimes: {
    attached: function () {
      let that = this;
      if (this.data.theme == 'default') {
        this.setData({
          mTitle: ` padding: ${that.data.padding}rpx 0; margin: 0 ${that.data.margin}rpx;`
        })
      }
    },
  },
})
