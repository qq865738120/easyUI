// component/senior/sidebar/sidebar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list: {
      type: Array,
      value: '',
      observer: function (newVal) {
        let mList = [];
        for (let i = 0; i < this.data.list.length; i++) {
          mList[i] = {
            text: newVal[i],
            color: this.data.itemColor1,
            size: this.data.itemSize1,
          }
        }
        this.setData({
          mList: mList
        });
      }
    },
    width: {
      type: String,
      value: '200'
    },
    height: {
      type: String,
      value: '100%'
    },
    bgColor: {
      type: String,
      value: '#f4f4f4'
    },
    itemColor1: {
      type: String,
      value: '#333333',
      observer: function (newVal) {
        this.setData({
          itemColor: newVal
        });
      }
    },
    itemSize1: {
      type: String,
      value: '30',
      observer: function (newVal) {
        this.setData({
          itemSize: newVal
        });
      }
    },
    itemBgColor: {
      type: String,
      value: '#fff'
    },
    itemColor2: {
      type: String,
      value: '#FE9036'
    },
    itemSize2: {
      type: String,
      value: '32'
    },
    selected: {
      type: String,
      value: '0'
    },
    dataCus: {
      type: Array,
      value: '',
      observer: function (newVal) {
        this.setData({
          mDataCus: newVal
        });
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    view: '',
    mList: '',
    mDataCus: [],
    itemColor: '#333333',
    itemSize: '30',
    lastIndex: -1
  },

  externalClasses: ['cus'],

  /**
   * 组件的方法列表
   */
  methods: {
    onTap: function (e) {
      e.detail.index = e.currentTarget.dataset.index;
      console.log('sidebar点击事件触发', e);
      let that = this;
      let current = this.data.mList[e.currentTarget.dataset.index];
      if (this.data.lastIndex != -1) {
        this.data.mList[this.data.lastIndex].color = this.data.itemColor1;
        this.data.mList[this.data.lastIndex].size = this.data.itemSize1;
        this.data.mList[this.data.lastIndex].bg = '';
      }
      current.color = this.data.itemColor2;
      current.size = this.data.itemSize2;
      current.bg = this.data.itemBgColor;
      this.setData({
        view: e.currentTarget.id,
        mList: that.data.mList,
        lastIndex: e.currentTarget.dataset.index
      })
      this.triggerEvent('itemtap', e, { bubbles: true });
    }
  },

  lifetimes: {
    ready: function () {
      let mList = [];
      for (let i = 0; i < this.data.list.length; i++) {
        mList[i] = {
          text: this.data.list[i],
          color: this.data.itemColor1,
          size: this.data.itemSize1,
        }
      }
      this.setData({
        mList: mList
      })
      this.onTap({ currentTarget: { dataset: { index: this.data.selected }, id: 'id0' }, detail: { index: '' } })
    },
  },
})
