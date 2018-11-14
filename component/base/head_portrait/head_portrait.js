// component/base/head_portrait/head_portrait.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    inline: {
      type: String,
      value: '',
      observer: function (newVal) {
        this.setData({
          mInline: newVal == 'true' ? 'inline-flex' : 'flex'
        });
      }
    },
    src: {
      type: String,
      value: ''
    },
    size: {
      type: String,
      value: '120'
    },
    radius: {
      type: String,
      value: '120'
    },
    border: {
      type: String,
      value: '1px solid #fff'
    },
    text: {
      type: String,
      value: ''
    },
    textSize: {
      type: String,
      value: '32'
    },
    textColor: {
      type: String,
      value: '#fff'
    },
    spacing: {
      type: String,
      value: '10'
    }
  },

  externalClasses: ['cus'],

  /**
   * 组件的初始数据
   */
  data: {
    mInline: 'inline-flex'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTap: function (e) {
      console.log('head_portrait点击事件触发', e);
      this.triggerEvent('headtap', e, { bubbles: true });
    }
  }
})
