// component/button/suspension_button/suspension_button.js
let lastPoint = [0, 0];
let currentTime = 0;
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
    left: {
      type: String,
      value: ''
    },
    top: {
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

    _clone: function (obj) {
      return JSON.parse(JSON.stringify(obj));
    },

    _getScreenSizeRpx: function (isWindow) {
      let windowWidth = isWindow ? sysInfo.windowWidth : sysInfo.screenWidth;
      let windowHeight = isWindow ? sysInfo.windowHeight : sysInfo.screenHeight;
      var height = 750 / windowWidth * windowHeight;
      var size = [];
      size[0] = 750
      size[1] = height;
      return size;
    },

    _px2Rpx: function (x, y) {
      var point = [0, 0];
      var size = this._getScreenSizeRpx(false);
      point[0] = parseInt(x * (750 / sysInfo.screenWidth));
      point[1] = parseInt(y * (size[1] / sysInfo.screenHeight));
      return point;
    },

    onTap: function (e) {
      console.log('suspension_button点击事件触发');
      console.log(e);
      this.triggerEvent('buttontap', e, { bubbles: true });
    },

    onMove: function (e) {
      console.log(e);
      let windowSize = this._getScreenSizeRpx(true);
      let point = this._px2Rpx(e.touches[0].clientX, e.touches[0].clientY);
      const temp = this._clone(point);
      if (currentTime != 0) {
        let offsetPoint = this._px2Rpx(e.currentTarget.offsetLeft, e.currentTarget.offsetTop);
        console.log('current', point);
        console.log('last', lastPoint);
        console.log('offsetPoint', offsetPoint);
        point[0] = offsetPoint[0] + (point[0] - lastPoint[0]) ;
        point[1] = offsetPoint[1] + (point[1] - lastPoint[1]) ;
        if (point[0] >= 0 && point[0] <= windowSize[0] - this.data.width) {
          console.log('x', point[0]);
          this.setData({
            // left: point[0]
          })
        }
        if (point[1] >= 0 && point[1] <= windowSize[1] -this.data.height ) {
          console.log('y', point[1]);
          this.setData({
            // top: point[1]
          })
        }
      }
      lastPoint = this._clone(temp);
      currentTime = e.timeStamp;
      console.log(point);
    },

    onMoveEnd: function (e) {
      currentTime = 0;
      console.log('sysInfo', sysInfo);
    }

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
