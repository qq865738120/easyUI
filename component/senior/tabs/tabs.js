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
        if (newVal && newVal.length < 5) {
          console.log('newVal',newVal)
          this.setData({
            itemWidth: 750 / newVal.length
          })
        }
      }
    },
    height: {
      type: String,
      value: '120'
    },
    selectColor: {
      type: String,
      value: '#FE9036'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    itemWidth: 187.5,
    isScroll: true,
    scrollStyle: 'border-bottom: 1px solid #e5e5e5;'
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
