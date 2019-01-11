// component/base/load_more/load_more.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    lineColor: {
      type: String,
      value: '#e5e5e5'
    },
    text: {
      type: String,
      value: '暂无数据'
    },
    textSize: {
      type: String,
      value: '28'
    },
    textColor: {
      type: String,
      value: '#999999'
    },
    loading: {
      type: String,
      value: 'false'
    },
    loadingColor: {
      type: String,
      value: '#36BCBC'
    }
  },

  externalClasses: ['cus']
})
