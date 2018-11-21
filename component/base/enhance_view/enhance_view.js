// component/base/enhance_view/enhance_view.js
const block = 'display: flex; ';
const inline = 'display: inline-flex; ';

const horizontal = 'flex-direction: row; ';
const vertical = 'flex-direction: column; ';

const line = 'flex-wrap: wrap; ';

const mainStart = 'justify-content: flex-start; ';
const mainEnd = 'justify-content: flex-end; ';
const mainCenter = 'justify-content: center; ';
const mainBetween = 'justify-content: space-between; ';

const secStart = 'align-items: flex-start; ';
const secEnd = 'align-items: flex-end; ';
const secCenter = 'align-items: center; ';

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    inline: {
      type: String,
      value: 'false'
    },
    reverse: { // row表示横向排列 col表示纵向排列
      type: String,
      value: 'row'
    },
    type: {
      type: String,
      value: '',
      observer: function (newVal) {
        const attribute1 = this.data.inline == 'true' ? inline : block;
        const attribute2 = this.data.reverse == 'col' ? vertical : horizontal;
        const prefix = attribute1 + attribute2 + line;
        const types = {
          start: prefix + mainStart + secStart,
          startEnd: prefix + mainStart + secEnd,
          startCenter: prefix + mainStart + secCenter,
          endStart: prefix + mainEnd + secStart,
          end: prefix + mainEnd + secEnd,
          endCenter: prefix + mainEnd + secCenter,
          centerStart: prefix + mainCenter + secStart,
          centerEnd: prefix + mainCenter + secEnd,
          center: prefix + mainCenter + secCenter,
          betweenStart: prefix + mainBetween + secStart,
          betweenEnd: prefix + mainBetween + secEnd,
          betweenCenter: prefix + mainBetween +secCenter
        };
        this.setData({
          mType: types[newVal]
        });
      }
    },
    width: {
      type: String,
      value: '',
      observer: function (newVal) {
        const subStr = newVal.substring(newVal.length - 2);
        const subStr2 = newVal.substring(newVal.length - 1);
        let value = newVal;
        if (subStr != 'px' && subStr2 != '%') {
          value += 'rpx';
        }
        this.setData({
          mWidth: value
        })
      }
    },
    height: {
      type: String,
      value: '',
      observer: function (newVal) {
        const subStr = newVal.substring(newVal.length - 2);
        const subStr2 = newVal.substring(newVal.length - 1);
        let value = newVal;
        if (subStr != 'px' && subStr2 != '%') {
          value += 'rpx';
        }
        this.setData({
          mHeight: value
        })
      }
    },
    margin: {
      type: String,
      value: ''
    },
    padding: {
      type: String,
      value: ''
    },
    bgColor: {
      type: String,
      value: ''
    },
  },

  externalClasses: ['cus'],

  /**
   * 组件的初始数据
   */
  data: {
    mType: '',
    mWidth: '',
    mHeight: ''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTap: function (e) {
      console.log('enhance_view点击事件触发', e);
      this.triggerEvent('viewtap', e, { bubbles: true });
    }
  }
})
