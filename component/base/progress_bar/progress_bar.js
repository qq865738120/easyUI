// component/base/progress_bar/progress_bar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    bgColor: {
      type: String,
      value: '#e5e5e5'
    },
    padding: {
      type: String,
      value: '6'
    },
    textSize: {
      type: String,
      value: '22'
    },
    percent: {
      type: Number,
      value: 60
    },
    textColor: {
      type: String,
      value: "#ffffff"
    },
    radius: {
      type: String,
      value: "30rpx"
    },
    barColor: {
      type: String,
      value: "linear-gradient(to right, #ffd2ae, #FE9036)"
    }
  },

  externalClasses: ['cus', 'cus-container', 'cus-skills'],
})
