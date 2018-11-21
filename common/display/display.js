// common/display/display.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    mId: {
      type: String,
      value: ''
    },
    title: {
      type: String,
      value: '标题'
    },
    sub: {
      type: String,
      value: ''
    },
    code: {
      type: String,
      value: 'code'
    },
    margin: {
      type: String,
      value: '',
      observer: function (newVal) {
        this.setData({
          mbody: newVal == 'true' ? 'body' : ''
        });
      }
    },
    bgColor: {
      type: String,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    mbody: ''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onDetail: function (e) {
      let that = this;
      console.log(that.data);
      wx.navigateTo({
        url: '/detail/detail?name=' + that.data.title + '&index=' + that.data.mId,
      })
    },
    onCopy: function (e) {
      wx: wx.setClipboardData({
        data: e.target.dataset.code,
      })
    }
  }
})
