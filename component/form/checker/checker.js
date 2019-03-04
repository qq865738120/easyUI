// component/form/checker/checker.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    label: {
      type: String,
      value: ''
    },
    labelSize: {
      type: String,
      value: '26'
    },
    labelColor: {
      type: String,
      value: '#333333'
    },
    list: {
      type: Array,
      value: []
    },
    itemSize: {
      type: String,
      value: '24'
    },
    selected: {
      type: String,
      observer: function (newVal) {
        this.setData({ mselected: newVal, hadSelected: true })
      }
    },
    selectColor: {
      type: String,
      value: '#FE9036'
    },
    theme: {
      type: String,
      value: 'default',
      observer: function (newVal) {
        const selectColor = this.data.selectColor;
        const themeColor = this.data.themeColor;
        console.log('newVal', newVal)
        const themes = {
          default: `background-color: ${selectColor}; color: white;`,
          open: `border: 1px solid ${selectColor}; color: ${selectColor}; background-color: ${themeColor};`
        }
        this.setData({
          itemStyle: themes[newVal]
        })
      }
    },
    themeColor: {
      type: String,
      value: 'rgba(254, 144, 54, 0.1)'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    itemStyle: '',
    mselected: '',
    hadSelected: false
  },

  externalClasses: ['cus'],

  /**
   * 组件的方法列表
   */
  methods: {
    onTap(e) {
      this.setData({ mselected: this.data.list[e.currentTarget.dataset.id].id })
      this.triggerEvent('select', e.currentTarget.dataset, { bubbles: true });
    }
  },

  lifetimes: {
    attached() {
      if (!this.data.hadSelected) {
        this.setData({ mselected: this.data.list[0].id })
      }
      if (this.data.theme == 'default') {
        this.setData({ itemStyle: `background-color: ${this.data.selectColor}; color: white` })
      }
    }
  },
})
