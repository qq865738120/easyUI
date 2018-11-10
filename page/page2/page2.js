// page/page2/page2.js
const com = getApp().globalData.com;
const code = {
  d1: `<e-icon-button 
  icon='/imgs/button_icon.png'
  text='我的留言'>
</e-icon-button>`,
  d2: `<e-base-button
  text='按钮' 
  theme='default'
  width='200'
  height='60'
  textSize='28'
  color='#FE9036'
  inline='true'>
</e-base-button>`,
  d3: `<e-base-button
  text='按钮' 
  theme='hollow'
  width='200'
  height='60'
  textSize='28'
  color='#FE9036'
  radius='10'>
</e-base-button>`,
  d4: `<e-base-button
  text='按钮' 
  theme='filling'
  width='200'
  height='60'
  textSize='28'
  color='#FE9036'
  radius='20'>
</e-base-button>`,
  d5: `<e-base-button
  text='按钮' 
  theme='fillingAndShine'
  width='200'
  height='60'
  textSize='28'
  color='#FE9036'
  radius='30'>
</e-base-button>`,
  d6: `<e-base-button
  text='按钮' 
  theme='fillingAndGradient1'
  width='200'
  height='60'
  textSize='28'
  color='#FE9036'
  endColor='#FE4E36'
  radius='40'>
</e-base-button>`,
  d7: `<e-base-button
  text='按钮' 
  theme='fillingAndGradient2'
  width='200'
  height='60'
  textSize='28'
  color='#FE9036'
  endColor='#FE4E36'
  radius='50'>
</e-base-button>`,
  d8: `<e-base-button
  text='按钮' 
  theme='default'
  width='200'
  height='60'
  textSize='28'
  color='#FE9036'
  icon='/imgs/button_icon.png'>
</e-base-button>`,
  d9: `<e-base-button
  text='按钮' 
  theme='default'
  width='200'
  height='60'
  textSize='28'
  color='#FE9036'
  icon='/imgs/button_icon.png'
  iconPosition='right'>
</e-base-button>`,
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    com: {
      d1: { id: com[1].id, title: com[1].name, sub: '', code: code.d1 },
      d2: { id: com[2].id, title: com[2].name, sub: 'default主题', code: code.d2 },
      d3: { id: com[2].id, title: com[2].name, sub: 'hollow主题', code: code.d3 },
      d4: { id: com[2].id, title: com[2].name, sub: 'filling主题', code: code.d4 },
      d5: { id: com[2].id, title: com[2].name, sub: 'fillingAndShine主题', code: code.d5 },
      d6: { id: com[2].id, title: com[2].name, sub: 'fillingAndGradient1主题', code: code.d6 },
      d7: { id: com[2].id, title: com[2].name, sub: 'fillingAndGradient2主题', code: code.d7 },
      d8: { id: com[2].id, title: com[2].name, sub: '左边带图标的按钮', code: code.d8 },
      d9: { id: com[2].id, title: com[2].name, sub: '右边带图标的按钮', code: code.d9 },
    }
  },

  testTap: function (e) {
    console.log('test tap');
    console.log(e);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  }
})