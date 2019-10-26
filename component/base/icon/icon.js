// component/base/icon/icon.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    name: {
      type: String,
      value: 'mine'
    },
    size: {
      type: String,
      value: '46rpx'
    },
    color: {
      type: String,
      value: '#454545'
    },
    padding: {
      type: String,
      value: '10rpx'
    },
  },

  externalClasses: ['cus'],

  methods: {
    onTap: function (e) {
      console.log('icon点击事件触发', e);
      this.triggerEvent('icontap', e, { bubbles: true });
    }
  }
})
