// component/structure/title_view/title_view.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    titleMarginTop: {
      type: String,
      value: '26'
    },
    titleMarginBottom: {
      type: String,
      value: '16'
    },
    margin: {
      type: String,
      value: '25'
    },
    titleColor: {
      type: String,
      value: '#666666'
    },
    fontSize: {
      type: String,
      value: '26'
    },
    title: {
      type: String,
      value: '',
      observer: function (newVal) {
        this.setData({ mTitle: newVal });
      }
    },
    contentMargin: {
      type: String,
      value: '30'
    },
    bgColor: {
      type: String,
      value: '#fff'
    },
  },

  externalClasses: ['cus'],

  /**
   * 组件的初始数据
   */
  data: {
    mTitle: 'title'
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
