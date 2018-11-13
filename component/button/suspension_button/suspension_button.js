// component/button/suspension_button/suspension_button.js
let windowWidth = 0;
let windowHeight = 0;
let lastPoint = [0, 0];
let currentTime = 0;
let position = [0, 0];

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
          shine: `border-radius: 100%; background-color: ${color}; box-shadow: 0 8rpx 40rpx ${color};`,
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
    width: {
      type: String,
      value: '100'
    },
    height: {
      type: String,
      value: '100'
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
    left: '',
    top: ''
  },

  /**
   * 组件的方法列表
   */
  methods: {

    _getScreenSizeRpx: function () {
      if (windowWidth == 0 || windowHeight == 0) {
        windowWidth = wx.getSystemInfoSync().screenWidth;
        windowHeight = wx.getSystemInfoSync().screenHeight;
      }
      var height = 750 / windowWidth * windowHeight;
      var size = [];
      size[0] = 750
      size[1] = 750 / windowWidth * windowHeight;
      return size;
    },

    _px2Rpx: function (x, y) {
      var point = [0, 0];
      var size = this._getScreenSizeRpx();
      point[0] = parseInt(x * (750 / windowWidth));
      point[1] = parseInt(y * (size[1] / windowHeight));
      return point;
    },

    onTap: function (e) {
      console.log('suspension_button点击事件触发');
      console.log(e);
      this.triggerEvent('buttontap', e, { bubbles: true });
    },

    onMove: function (e) {
      console.log(e);
      let point = this._px2Rpx(e.touches[0].clientX, e.touches[0].clientY);
      const temp = point;
      if (currentTime != 0) {
        let offsetPoint = this._px2Rpx(e.currentTarget.offsetLeft, e.currentTarget.offsetTop);
        console.log('current', point);
        console.log('last', lastPoint);
        point[0] = offsetPoint[0] + (point[0] - lastPoint[0]) - this.data.width / 2;
        point[1] = point[1] + offsetPoint[1] - point[1];
        console.log(point);
        if (point[0] >= 0 && point[0] <= 750 - this.data.width) {
          this.setData({
            left: point[0]
          })
        }
      } else if (currentTime == 0) {
        position = this._px2Rpx(e.currentTarget.offsetLeft, e.currentTarget.offsetTop);
      }
      lastPoint = temp;
      currentTime = e.timeStamp;
      console.log(position);
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
