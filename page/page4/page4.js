// page/page4/page4.js
const com = getApp().globalData.com;
const code = {
  d1: `<e-base-list
  title='编辑名片'
  subTitle='2018-09-27 11:41:48'>
</e-base-list>`,
  d2: `<e-icon-list
  title='小姐姐'
  subTitle='13066666666'
  detail='2018-06-01 13:12'>
  <e-head-portrait
    slot='icon'
    size='150'
    src='/imgs/default_head.jpg'>
  </e-head-portrait>
  <e-enhance-icon
    slot='right'
    width='20'
    height='40'
    src='/imgs/back.png'>
  </e-enhance-icon>
</e-icon-list>`,
  d3: `<e-icon-list
  title='系统设置'
  lineColor='1px solid #e0e0e0'>
  <e-enhance-icon
    style='height: 48rpx;'
    width='48'
    height='48'
    slot='icon'
    src='/imgs/icon.png'>
  </e-enhance-icon>
  <e-enhance-view
    slot='right'
    type='endCenter'>
    <text style='color: #909090; font-size: 28rpx; margin-right: 12rpx;'>版本V1.1.2</text>
    <e-enhance-icon
      slot='right'
      width='15'
      height='30'
      src='/imgs/back.png'>
    </e-enhance-icon>
  </e-enhance-view>
</e-icon-list>`,
  d4: `<e-icon-list
  title='小嘎子'
  subTitle='16666669999'
  detail=''>
  <e-head-portrait
    slot='icon'
    src='/imgs/default_head.jpg'
    textColor='#666'
    spacing='20'
    size='150'>
    <e-base-button
      text='我的好友' 
      theme='filling'
      width='120'
      height='36'
      textSize='20'
      color='#FE9036'
      radius='30'
      bindbuttontap='testTap'></e-base-button>
  </e-head-portrait>
  <e-base-button
    slot='right'
    text='金牌会员' 
    theme='fillingAndGradient2'
    width='155'
    height='50'
    textSize='24'
    color='#FE9036'
    endColor='#FE4E36'
    radius='50'>
  </e-base-button>
</e-icon-list>`,
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    com: {
      d1: { id: com[2].id, title: com[2].name, sub: '', code: code.d1 },
      d2: { id: com[9].id, title: com[9].name, sub: '中间三行', code: code.d2 },
      d3: { id: com[9].id, title: com[9].name, sub: '中间一行', code: code.d3 },
      d4: { id: com[9].id, title: com[9].name, sub: '中间两行', code: code.d4 }
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

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})