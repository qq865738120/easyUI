// index/index.js
const path = [
  '',
  '/page/page1/page1',
  '/page/page2/page2',
  '/page/page3/page3',
  '/page/page4/page4',
]

Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
      { title: '基础组件', text: '5', titleColor: '#9BDEDE', textColor: '#9BDEDE' },
      { title: '按钮组件', text: '2', titleColor: '#9BDEDE', textColor: '#9BDEDE' },
      { title: '表单组件', text: '6', titleColor: '#9BDEDE', textColor: '#9BDEDE' },
      { title: '列表组件', text: '3', titleColor: '#9BDEDE', textColor: '#9BDEDE' },
      { title: '结构组件', text: '1', titleColor: '#9BDEDE', textColor: '#9BDEDE' },
    ]
  },

  onTap: function (e) {
    wx.navigateTo({
      url: path[parseInt(e.target.id)]
    })
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