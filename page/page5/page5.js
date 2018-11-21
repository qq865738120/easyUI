// page/page5/page5.js
const com = getApp().globalData.com;
const code = {
  d1: `<e-title-view 
  title='标题'>
  内容
</e-title-view>`,
  d2: `<e-title-view title='标题'>
  <e-icon-button 
    icon='/imgs/button_icon.png'
    text='我的留言'>
  </e-icon-button>
</e-title-view>`,
  d3: `<e-head-view
  title='我的订单'>
  <view slot='sub'>
    <text style='color: #999; font-size: 26rpx;'>查看全部订单</text>
    <image src='/imgs/back.png' style='width: 12rpx; height: 24rpx; margin-left: 10rpx'></image>
  </view>
  <view slot='body' style='margin 0 30rpx;'>内容</view>
</e-head-view>`,
  d4: `<e-head-view
  cus='head-view'
  title='我的订单'
  theme='longLine'>
  <view slot='sub'>
    <text style='color: #999; font-size: 26rpx;'>查看全部订单</text>
    <image src='/imgs/back.png' style='width: 12rpx; height: 24rpx; margin-left: 10rpx'></image>
  </view>
  <view slot='body'>内容</view>
</e-head-view>`
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    com: {
      d1: { id: com[3].id, title: com[3].name, sub: '插入内容', code: code.d1 },
      d2: { id: com[3].id, title: com[3].name, sub: '插入自定义组件', code: code.d2 },
      d3: { id: com[19].id, title: com[19].name, sub: 'default主题', code: code.d3 },
      d4: { id: com[19].id, title: com[19].name, sub: 'longLine主题', code: code.d4 },
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
})