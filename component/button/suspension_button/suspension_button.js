// component/button/suspension_button/suspension_button.js
let sysInfo = wx.getSystemInfoSync();

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    theme: {
      type: String,
      value: 'default',
      observer: function (newVal) {
        const color = this.data.color;
        const endColor = this.data.endColor;
        const themes = {
          default: `border-radius: 100%; background-color: ${color}`,
          shine1: `border-radius: 100%; background-color: ${color}; box-shadow: 0 8rpx 40rpx ${color};`,
          shine2: `border-radius: 50% 0 0 50%; background-color: ${color}; box-shadow: 0 8rpx 40rpx ${color};`,
          shine3: `border-radius: 0 50% 50% 0; background-color: ${color}; box-shadow: 0 8rpx 40rpx ${color};`,
          gradient1: `border-radius: 100%; background: linear-gradient(to right, ${color}, ${endColor});`,
          gradient2: `border-radius: 100%; background: linear-gradient(${color}, ${endColor});`,
          shineAndgradient1: `border-radius: 100%; background: linear-gradient(to right, ${color}, ${endColor}); box-shadow: 0 8rpx 40rpx ${endColor};`,
          shineAndgradient2: `border-radius: 100%; background: linear-gradient(${color}, ${endColor}); box-shadow: 0 8rpx 40rpx ${endColor};`,
        }
        this.setData({
          mTheme: themes[newVal]
        })
      }
    },
    removable: {
      type: String,
      value: 'false'
    },
    width: {
      type: String,
      value: '100'
    },
    height: {
      type: String,
      value: '100'
    },
    left: {
      type: String,
      value: '',
      observer: function (newVal) {
        this.setData({ mLeft: newVal + 'rpx' })
      }
    },
    top: {
      type: String,
      value: '',
      observer: function (newVal) {
        this.setData({ mTop: newVal + 'rpx' })
      }
    },
    color: {
      type: String,
      value: ''
    },
    endColor: {
      type: String,
      value: ''
    },
    src: {
      type: String,
      value: ''
    },
    imgMargin: {
      type: String,
      value: ''
    },
    text: {
      type: String,
      value: ''
    },
    textColor: {
      type: String,
      value: '#fff'
    },
    textSize: {
      type: String,
      value: '30'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    mTheme: ``,
    mLeft: '',
    mTop: '',
    lastTime: 0,
  },

  externalClasses: ['cus'],

  /**
   * 组件的方法列表
   */
  methods: {

    _getScreenSizeRpx: function (isWindow) {
      let windowWidth = isWindow ? sysInfo.windowWidth : sysInfo.screenWidth;
      let windowHeight = isWindow ? sysInfo.windowHeight : sysInfo.screenHeight;
      var height = 750 / windowWidth * windowHeight;
      var size = [];
      size[0] = 750
      size[1] = height;
      return size;
    },

    _rpx2Px: function (x, y) {
      var point = [0, 0];
      var size = this._getScreenSizeRpx(false);
      point[0] = parseInt(x * (sysInfo.screenWidth / 750));
      point[1] = parseInt(x * (sysInfo.screenHeight / size[1]));
      return point;
    },

    onTap: function (e) {
      
    },

    onMove: function (e) {
      if (this.data.removable == 'false') return;
      if (e.timeStamp - this.data.lastTime > 30) {
        // lastTime = e.timeStamp;
        this.setData({ lastTime: e.timeStamp });
        const point = this._rpx2Px(this.data.width / 2, this.data.height / 2);
        const left = parseInt(e.touches[0].clientX - point[0]);
        const top = parseInt(e.touches[0].clientY - point[1]);
        const mLeft = this.data.mLeft;
        const mTop = this.data.mTop;
        this.setData({
          mLeft: (left > 0 && left < sysInfo.windowWidth - point[0] * 2 ? left + 'px' : mLeft),
          mTop: (top > 0 && top < sysInfo.windowHeight - point[1] * 2 ? top + 'px' : mTop)
        })
        this.triggerEvent('buttonMove', e, { bubbles: true });
      }
    },

    onMoveStart: function (e) {
      console.log('suspension_button点击事件触发', e);
      this.triggerEvent('buttontap', e, { bubbles: true });
      if (this.data.removable == 'false') return;
      const point = this._rpx2Px(this.data.width / 2, this.data.height / 2);
      this.setData({
        mLeft: (e.touches[0].clientX - point[0]) + 'px',
        mTop: (e.touches[0].clientY - point[1]) + 'px'
      })
    },

  },

  lifetimes: {
    attached: function () { 
      let that = this;
      if (this.data.theme == 'default') {
        this.setData({
          mTheme: `border-radius: 100%; background-color: ${that.data.color}`
        });
      }
    },
  },
})
