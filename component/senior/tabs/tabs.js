// component/senior/tabs/tabs.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    items: {
      type: Array,
      value: ['item1', 'item2', 'item3', 'item3', 'item3', 'item3', 'item3', 'item3', 'item3'],
      observer: function (newVal) {
        if (newVal) {

        }
      }
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    itemWidth: 33.3,
    isScroll: true,
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
