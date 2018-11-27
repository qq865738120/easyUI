// component/list/goods_list/goods_list.js
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
    theme: {
      type: String,
      value: 'default',
      observer: function (newVal) {
        const color = this.data.color;
        const endColor = this.data.endColor;
        const line = this.data.showLine == 'true' ? 'border-bottom: 1rpx solid #e0e0e0; ' : '';
        const themes = {
          default: {
            com: ``,
            img: ``,
            right: `${line}`,
            tit: '',
            bottom: ''
          },
          longLine: {
            com: `${line}`,
            img: `margin: 30rpx 20rpx 30rpx 30rpx;`,
            right: ``,
            tit: 'margin-top: 0rpx',
            bottom: 'margin-bottom: 0rpx'
          },
          rounded: {
            com: ``,
            img: `margin: 30rpx 20rpx 30rpx 30rpx; border-radius: 14rpx;`,
            right: ``,
            tit: '',
            bottom: ''
          }
        }
        this.setData({
          com: themes[newVal].com,
          img: themes[newVal].img,
          right: themes[newVal].right,
          tit: themes[newVal].tit,
          bottom: themes[newVal].bottom
        })
      }
    },
    src: {
      type: String,
      value: ''
    },
    width: {
      type: String,
      value: '750'
    },
    imgSize: {
      type: String,
      value: '240'
    },
    title: {
      type: String,
      value: ''
    },
    titleColor: {
      type: String,
      value: ''
    },
    titleSize: {
      type: String,
      value: '30'
    },
    price: {
      type: String,
      value: ''
    },
    priceColor: {
      type: String,
      value: '#FA3B54'
    },
    priceSize: {
      type: String,
      value: '38'
    },
    thickness: {
      type: String,
      value: ''
    },
    showLine: {
      type: String,
      value: 'true'
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
    com: '',
    img: '',
    right: '',
    tit: '',
    bottom: ''
  },

  externalClasses: ['cus'],

  /**
   * 组件的方法列表
   */
  methods: {
    onTap: function (e) {
      console.log('goods_list点击事件触发', e);
      this.triggerEvent('listtap', e, { bubbles: true });
    }
  },

  lifetimes: {
    attached: function () {
      let that = this;
      const line = this.data.showLine == 'true' ? 'border-bottom: 1rpx solid #e0e0e0; ' : '';
      if (this.data.theme == 'default') {
        this.setData({
          com: ``,
          img: ``,
          right: `${line}`,
          tit: '',
          bottom: ''
        })
      }
    },
  },
})
