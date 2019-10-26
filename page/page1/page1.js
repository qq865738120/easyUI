// page1/page1.js
const com = getApp().globalData.com;
const code = {
  d1: `<e-enhance-view
  bgColor='#fff'
  height='120'
  width='450'
  margin='0 30rpx'
  type='start'>
</e-enhance-view>`,
  d2: `<e-enhance-view
  bgColor='#fff'
  height='120'
  width='450'
  margin='0 30rpx'
  type='startEnd'>
</e-enhance-view>`,
  d3: `<e-enhance-view
  bgColor='#fff'
  height='120'
  width='450'
  margin='0 30rpx'
  type='startCenter'>
</e-enhance-view>`,
  d4: `<e-enhance-view
  bgColor='#fff'
  height='120'
  width='450'
  margin='0 30rpx'
  type='endStart'>
</e-enhance-view>`,
  d5: `<e-enhance-view
  bgColor='#fff'
  height='120'
  width='450'
  margin='0 30rpx'
  type='end'>
</e-enhance-view>`,
  d6: `<e-enhance-view
  bgColor='#fff'
  height='120'
  width='450'
  margin='0 30rpx'
  type='endCenter'>
</e-enhance-view>`,
  d7: `<e-enhance-view
  bgColor='#fff'
  height='120'
  width='450'
  margin='0 30rpx'
  type='centerStart'>
</e-enhance-view>`,
  d8: `<e-enhance-view
  bgColor='#fff'
  height='120'
  width='450'
  margin='0 30rpx'
  type='centerEnd'>
</e-enhance-view>`,
  d9: `<e-enhance-view
  bgColor='#fff'
  height='120'
  width='450'
  margin='0 30rpx'
  type='center'>
</e-enhance-view>`,
  d10: `<e-enhance-view
  bgColor='#fff'
  height='120'
  width='450'
  margin='0 30rpx'
  type='betweenStart'>
</e-enhance-view>`,
  d11: `<e-enhance-view
  bgColor='#fff'
  height='120'
  width='450'
  margin='0 30rpx'
  type='betweenEnd'>
</e-enhance-view>`,
  d12: `<e-enhance-view
  bgColor='#fff'
  height='120'
  width='450'
  margin='0 30rpx'
  type='betweenCenter'>
</e-enhance-view>`,
  d13: `<e-enhance-text
  icon='/imgs/good.png'>
</e-enhance-text>`,
  d14: `<e-enhance-text
  icon='/imgs/good.png'
  title='点赞'>
</e-enhance-text>`,
  d15: `<e-enhance-text
  title='点赞'
  text='6'>
</e-enhance-text>`,
  d16: `<e-enhance-text
  icon='/imgs/good.png'
  title='点赞'
  text='10'>`,
  d17: `<e-head-portrait
  src='/imgs/default_head.jpg'>
</e-head-portrait>`,
  d18: `<e-head-portrait
  src='/imgs/default_head.jpg'
  textColor='#666'
  text='小明'>
</e-head-portrait>`,
  d19: `<e-head-portrait
  src='/imgs/default_head.jpg'
  text='小红'
  textColor='#666'
  spacing='20'
  size='160'
  bindheadtap='testTap'>
  <e-base-button
    text='我的好友' 
    theme='filling'
    width='120'
    height='36'
    textSize='20'
    color='#FE9036'
    radius='30'>
  </e-base-button>
</e-head-portrait>`,
  d20: `<e-enhance-icon
  src='/imgs/icon.png'>
</e-enhance-icon>`,
  d21: `<e-enhance-image
  src='/imgs/img.jpg'>
  <text>插入text</text>
  <view>插入view</view>
</e-enhance-image>`,
  d22: `<e-enhance-icon
  cus='iconfont icon-shezhi'>
</e-enhance-icon>`,
  d23: `<e-load-more />`,
  d24: `<e-load-more loading='true' text='加载中' />`,
  d25: `<e-loading color='#FE9036'/>`,
  d26: `<e-loading type='doubleBounce' color='#455488'/>`,
  d27: `<e-loading type='wave' color='#FE9036'/>`,
  d28: `<e-loading type='wanderingCubes' color='#455488'/>`,
  d29: `<e-loading type='spinnerPulse' color='#FE9036'/>`,
  d30: `<e-loading type='chasingDots' color='#455488'/>`,
  d31: `<e-loading type='threeBounce' color='#FE9036'/>`,
  d32: `<e-loading type='cubeGrid' color='#455488'/>`,
  d33: `<e-progress-bar />`,
  d34: `<e-icon name="mine" />`,
  d35: `<e-transition cus='transition' name="rotate-down-left" isShow='{{ isShowTransition }}' duration='400' bindfinish='testTap'>
  <e-enhance-image src='/imgs/img.jpg' />
</e-transition>`
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShowTransition: true,
    icons: [
      "sfilter", "refresh", "consult", "store", "local", 
      "mine", "crowd", "money", "mail", "complain",
      "favorite", "servicer", "minus", "checked", "add",
      "confirm-border", "offical", "delete-border", "collect", "eye",
      "prompt", "help", "progress", "warning", "config",
      "home", "radio-button", "minus-border", "search", "hotline",
      "add-border", "sort-by-down", "close", "sort-by-up", "back-to-top",
      "clock", "setup", "calendar", "share", "delete",
      "edit", "upload", "detail", "download-app", "more-border",
      "voice", "message", "scan", "qrcode", "collapse",
      "forward", "return", "dropdown", "suggest"
    ],
    com: {
      d1: { id: com[8].id, title: com[8].name, sub: 'type设置为start', code: code.d1 },
      d2: { id: com[8].id, title: com[8].name, sub: 'type设置为startEnd', code: code.d2 },
      d3: { id: com[8].id, title: com[8].name, sub: 'type设置为startCenter', code: code.d3 },
      d4: { id: com[8].id, title: com[8].name, sub: 'type设置为endStart', code: code.d4 },
      d5: { id: com[8].id, title: com[8].name, sub: 'type设置为end', code: code.d5 },
      d6: { id: com[8].id, title: com[8].name, sub: 'type设置为endCenter', code: code.d6 },
      d7: { id: com[8].id, title: com[8].name, sub: 'type设置为centerStart', code: code.d7 },
      d8: { id: com[8].id, title: com[8].name, sub: 'type设置为centerEnd', code: code.d8 },
      d9: { id: com[8].id, title: com[8].name, sub: 'type设置为center', code: code.d9 },
      d10: { id: com[8].id, title: com[8].name, sub: 'type设置为betweenStart', code: code.d10 },
      d11: { id: com[8].id, title: com[8].name, sub: 'type设置为betweenEnd', code: code.d11 },
      d12: { id: com[8].id, title: com[8].name, sub: 'type设置为betweenCenter', code: code.d12 },
      d13: { id: com[7].id, title: com[7].name, sub: '只有图标', code: code.d13 },
      d14: { id: com[7].id, title: com[7].name, sub: '带有图标和文字', code: code.d14 },
      d15: { id: com[7].id, title: com[7].name, sub: '只有文字和辅助文字', code: code.d15 },
      d16: { id: com[7].id, title: com[7].name, sub: '带有图标、文字以及辅助文字', code: code.d16 },
      d17: { id: com[5].id, title: com[5].name, sub: '只有头像', code: code.d17 },
      d18: { id: com[5].id, title: com[5].name, sub: '带有昵称', code: code.d18 },
      d19: { id: com[5].id, title: com[5].name, sub: '带有昵称和标签', code: code.d19 },
      d20: { id: com[10].id, title: com[10].name, sub: '引用普通图标', code: code.d20 },
      d21: { id: com[18].id, title: com[18].name, sub: '插入文本', code: code.d21 },
      d22: { id: com[10].id, title: com[10].name, sub: '引用阿里图标库', code: code.d22 },
      d23: { id: com[22].id, title: com[22].name, sub: '', code: code.d23 },
      d24: { id: com[22].id, title: com[22].name, sub: '带loading属性', code: code.d24 },
      d25: { id: com[23].id, title: com[23].name, sub: 'type值为rotatePlane', code: code.d25 },
      d26: { id: com[23].id, title: com[23].name, sub: 'type值为doubleBounce', code: code.d26 },
      d27: { id: com[23].id, title: com[23].name, sub: 'type值为wave', code: code.d27 },
      d28: { id: com[23].id, title: com[23].name, sub: 'type值为wanderingCubes', code: code.d28 },
      d29: { id: com[23].id, title: com[23].name, sub: 'type值为spinnerPulse', code: code.d29 },
      d30: { id: com[23].id, title: com[23].name, sub: 'type值为chasingDots', code: code.d30 },
      d31: { id: com[23].id, title: com[23].name, sub: 'type值为threeBounce', code: code.d31 },
      d32: { id: com[23].id, title: com[23].name, sub: 'type值为cubeGrid', code: code.d32 },
      d33: { id: com[26].id, title: com[26].name, sub: '', code: code.d33 },
      d34: { id: com[27].id, title: com[27].name, sub: '', code: code.d34 },
      d35: { id: com[28].id, title: com[28].name, sub: '', code: code.d35 },
    }
  },

  testTap: function (e) {
    console.log('test tap');
    console.log(e);
  },

  onTransition: function (e) {
    this.setData({ isShowTransition: !this.data.isShowTransition })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },
})