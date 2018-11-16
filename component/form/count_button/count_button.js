// component/form/count_button/count_button.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    width: {
      type: String,
      value: '130'
    },
    height: {
      type: String,
      value: '34'
    },
    fontSize: {
      type: String,
      value: '24'
    },
    theme: {
      type: String,
      value: 'default',
      observer: function (newVal) {
        const mainColor = this.data.mainColor;
        const color1 = this.data.color1;
        const color2 = this.data.color2;
        const themes = {
          default: {
            comp: `border: 1rpx solid ${color1}; border-radius: 6rpx`,
            left: `border-right: 1rpx solid ${color1}; color: ${color1};`,
            center: `color: ${mainColor}`,
            right: `border-left: 1rpx solid ${color1}; color: ${color1};`
          },
          open: {
            comp: ``,
            left: `color: ${color1};`,
            center: `color: ${mainColor}; background-color: ${color1}`,
            right: `color: ${color1};`
          }
        }
        this.setData({
          comp: themes[newVal].comp,
          left: themes[newVal].left,
          center: themes[newVal].center,
          right: themes[newVal].right
        })
      }
    },
    color1: {
      type: String,
      value: '#ddd'
    },
    color2: {
      type: String,
      value: '#999'
    },
    mainColor: {
      type: String,
      value: '#FF3657'
    },
    maxCount: {
      type: String,
      value: '20'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    count: 1,
    comp: '',
    left: '',
    center: '',
    right: '',
    leftBtn: '',
    rightBtn: ''
  },

  externalClasses: ['cus'],

  /**
   * 组件的方法列表
   */
  methods: {
    onTap: function (e) {
      let that = this;
      const id = e.target.id;
      let leftBtn = '';
      let rightBtn = '';
      let count = that.data.count;
      let lastCount = that.data.count;
      if (id == 'left') {
        leftBtn = `color: ${that.data.color2}`;
        that.data.count < 2 ? '' : count--;
      } else {
        rightBtn = `color: ${that.data.color2}`;
        that.data.count >= that.data.maxCount ? '' : count++;
      }
      that.setData({
        leftBtn: leftBtn,
        rightBtn: rightBtn,
        count: count
      })
      if (lastCount != count) {
        e.detail.count = count;
        console.log('count_button数值改变事件触发', e);
        this.triggerEvent('countChange', e, { bubbles: true });
      }
    }
  },

  lifetimes: {
    attached: function () {
      let that = this;
      if (this.data.theme == 'default') {
        this.setData({
          comp: `border: 1rpx solid ${that.data.color1}; border-radius: 6rpx`,
          left: `border-right: 1rpx solid ${that.data.color1}; color: ${that.data.color1};`,
          center: `color: ${that.data.mainColor}`,
          right: `border-left: 1rpx solid ${that.data.color1}; color: ${that.data.color1};`
        });
      }
    },
  },
})
