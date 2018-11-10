// detail/detail.js
const mData = require("/../common/apiData.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    attributes: [],
    mClass: [],
    method: [],
    slot: [],
    other: ''
  },

  onTdTap: function (e) {
    wx.setClipboardData({
      data: e.target.dataset.text + "=''",
    })
  },

  onDetTap: function (e) {
    if (e.target.dataset.data != undefined) {
      wx.setStorageSync('subData', e.target.dataset.data);
      wx.navigateTo({
        url: '/sub_detail/sub_detail?title=' + e.target.dataset.title + '取值：',
        success: function(res) {},
        fail: function(res) {},
        complete: function(res) {},
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx: wx.setNavigationBarTitle({
      title: options.name + '说明',
    })
    console.log(options);
    this.setData({
      attributes: mData.attributes[parseInt(options.index)],
      mClass: mData.mClass[parseInt(options.index)],
      method: mData.method[parseInt(options.index)],
      slot: mData.slot[parseInt(options.index)],
      other: mData.other[parseInt(options.index)],
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.setNavigationBarColor({
      frontColor: '#000000',
      backgroundColor: '#fff',
      animation: {
        duration: 400,
        timingFunc: 'linear'
      }
    })
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