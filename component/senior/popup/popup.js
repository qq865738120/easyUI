// component/senior/popup/popup.js
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
        if (newVal) {
          this.setData({
            show: newVal
          });
        } else {
          setTimeout(() => {
            this.setData({
              show: newVal
            });
          }, 300)
        }
      }
    },
    bgColor: {
      type: String,
      value: '#fff'
    },
    radius: {
      type: String,
      value: '0'
    },
    hideOnBlur: {
      type: String,
      value: 'true'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    top: '',
    left: '',
    width: '',
    mHeight: '',
    mIsShow: false,
    show: false
  },

  externalClasses: ['cus'],

  /**
   * 组件的方法列表
   */
  methods: {
    onMove: function () { },

    onTap: function () {
      if (this.data.hideOnBlur == 'false') {
        return;
      }
      setTimeout(() => {
        this.setData({
          show: false
        });
      }, 300)
      this.setData({
        mIsShow: false,
        isShow: false
      })
    },

    onContentTap: function () {

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
          mHeight: sysInfo.windowHeight
        });
      });
    },
  },
})
