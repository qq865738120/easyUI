// component/list/icon_list/icon_list.js
Component({

  options: {
    multipleSlots: true
  },

  /**
   * 组件的属性列表
   */
  properties: {
    bgColor: {
      type: String,
      value: '#fff'
    },
    margin: {
      type: String,
      value: '30'
    },
    title: {
      type: String,
      value: ''
    },
    subTitle: {
      type: String,
      value: ''
    },
    detail: {
      type: String,
      value: ''
    },
    spacing: {
      type: String,
      value: '30'
    },
    lineColor: {
      type: String,
      value: ''
    },
    titleColor: {
      type: String,
      value: '#030302'
    },
    titleSize: {
      type: String,
      value: '34'
    },
    subTitleColor: {
      type: String,
      value: '#666666'
    },
    subTitleSize: {
      type: String,
      value: '28'
    },
    detailColor: {
      type: String,
      value: '#999999'
    },
    detailSize: {
      type: String,
      value: '24'
    },
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  externalClasses: ['cus'],

  /**
   * 组件的方法列表
   */
  methods: {
    onTap: function (e) {
      console.log('icon_list点击事件触发', e);
      this.triggerEvent('listtap', e, { bubbles: true });
    }
  }
})
