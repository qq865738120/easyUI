// sub_detail/sub_detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    attributes: '',
    title: ''
  },

  onTdTap: function (e) {
    wx: wx.setClipboardData({
      data: e.target.dataset.text,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      title: options.title
    })
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
    this.setData({
      attributes: wx.getStorageSync('subData')
    })
  },
})