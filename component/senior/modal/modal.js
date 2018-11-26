// component/senior/modal/modal.js
Component({

  options: {
    multipleSlots: true
  },

  /**
   * 组件的属性列表
   */
  properties: {
    isShow: {
      type: Boolean,
      value: false,
      observer: function (newVal) {
        this.setData({
          mIsShow: newVal
        });
      }
    },
    title: {
      type: String,
      value: '提示'
    },
    radius: {
      type: String,
      value: '12'
    },
    src: {
      type: String,
      value: ''
    },
    iconWidth: {
      type: String,
      value: '30'
    },
    iconHeight: {
      type: String,
      value: '30'
    },
    iconLeft: {
      type: String,
      value: '610'
    },
    iconTop: {
      type: String,
      value: '25'
    },
    titleColor: {
      type: String,
      value: '#000'
    },
    titleSize: {
      type: String,
      value: '34'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    top: '',
    left: '',
    width: '',
    height: '',
    mIsShow: false
  },

  externalClasses: ['cus', 'icon-cus'],

  /**
   * 组件的方法列表
   */
  methods: {
    onMove: function () {},

    onTap: function (e) {
      console.log('modal关闭事件触发', e);
      this.setData({
        isShow: false
      })
      this.triggerEvent('closetap', e, { bubbles: true });
    }
  },

  lifetimes: {
    ready: function () {
      let that = this;
      const sysInfo = wx.getSystemInfoSync();
      const query = wx.createSelectorQuery();
      query.in(this).select('.component').boundingClientRect().selectViewport().scrollOffset()
      query.exec(function (res) {
        that.setData({
          top: 0,
          left: 0,
          width: sysInfo.windowWidth,
          height: sysInfo.windowHeight
        });
      });
    },
  },
})
