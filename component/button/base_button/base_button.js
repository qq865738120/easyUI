// component/button/base_button/base_button.js
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
    text: {
      type: String,
      value: '',
      observer: function (newVal) {
        this.setData({ mText: newVal });
      }
    },
    theme: {
      type: String,
      value: '',
      observer: function (newVal) {
        const color = this.data.color;
        const endColor = this.data.endColor;
        const themes = { // 定义主题样式数组
          default: `border: 1px solid ${color} `,
          hollow: `border: 1px solid ${color}; color: ${color}`,
          filling: `background-color: ${color}; color: #fff`,
          filling2: `background-color: ${color}; color: ${endColor}`,
          fillingAndShine: `background-color: ${color}; color: #fff; box-shadow: 0 5rpx 40rpx ${color};`,
          fillingAndGradient1: `background: linear-gradient(to right, ${color}, ${endColor}); color: #fff`,
          fillingAndGradient2: `background: linear-gradient(${color}, ${endColor}); color: #fff`
        }
        this.setData({
          mTheme: themes[newVal]
        });
      }
    },
    width: {
      type: String,
      value: ''
    },
    height: {
      type: String,
      value: ''
    },
    radius: {
      type: String,
      value: ''
    },
    textSize: {
      type: String,
      value: ''
    },
    color: {
      type: String,
      value: ''
    },
    endColor: {
      type: String,
      value: ''
    },
    icon: {
      type: String,
      value: '',
      observer: function (newVal) {
        this.setData({
          mIcon: newVal
        })
      }
    },
    iconSize: {
      type: String,
      value: '36'
    },
    iconPosition: {
      type: String,
      value: 'left',
      observer: function (newVal) {
        this.setData({
          mIconPosition: newVal
        })
      }
    },
    spacing: {
      type: String,
      value: '18'
    }
  },

  externalClasses: ['cus'],

  /**
   * 组件的初始数据
   */
  data: {
    mText: '',
    mTheme: '',
    mIcon: '',
    mIconPosition: 'left',
    mInline: 'inline-flex'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * 按钮点击事件
     */
    onTap: function (e) {
      console.log('base_button点击事件触发', e);
      this.triggerEvent('buttontap', e, { bubbles: true });
    }
  }
})
