// component/button/icon_button/icon_button.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    icon: {
      type: String,
      value: '',
      observer: function (newVal) {
        this.setData({ mSrc: newVal }); // 初始化mSrc
      }
    },
    text: {
      type: String,
      value: '',
      observer: function (newVal) {
        this.setData({ mText: newVal }); // 初始化mText
      }
    },
    iconWidth: { // 图标大小
      type: String,
      value: '50',
    },
    iconHeight: { // 图标大小
      type: String,
      value: '50',
    },
    width: { // 组件大小
      type: String,
      value: '188'
    },
    height: { // 组件大小
      type: String,
      value: '188'
    },
    spacing: { // 图标与文字间距
      type: String,
      value: '14'
    },
    fontSize: {
      type: String,
      value: '24'
    },
    fontColor: {
      type: String,
      value: '#333333'
    },
    dataCus: {
      type: String,
      value: ''
    },
    badge: {
      type: String,
      value: ''
    },
    badgeSize: {
      type: String,
      value: '18'
    },
    badgeColor: {
      type: String,
      value: '#F23030'
    },
    formType: {
      type: String,
      value: ''
    },
    openType: {
      type: String,
      value: ''
    }
  },

  externalClasses: ['cus', 'cus-icon'],

  /**
   * 组件的初始数据
   */
  data: {
    mSrc: '',
    mText: '按钮文本',
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTap: function (e) {
      console.log('icon_button点击事件触发', e);
      this.triggerEvent('buttontap', e, { bubbles: true });
    },
    submit: function (e) {
      console.log('icon_button提交事件触发', e);
      this.triggerEvent('submit', e.detail, { bubbles: true });
    },
    reset: function (e) {
      console.log('icon_button重置事件触发', e);
      this.triggerEvent('submit', e, { bubbles: true });
    }
  }
})
