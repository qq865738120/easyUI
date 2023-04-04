// qrcode/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    options: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({ options })
    wx.startWifi({
      fail(err) {
        console.log('---2-',err);
        wx.showToast({
          title: '初始化失败',
          icon: 'error'
        })
      }
    })
    wx.onWifiConnected((info) => {
      console.log('---info', info);
      wx.showToast({
        title: '连接成功',
      })
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    wx.setNavigationBarTitle({
      title: '一键连WI-FI',
    })
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
  onShow() {

  },

  buttonTap() {
    console.log('====', this.data.options);
    wx.connectWifi({
      SSID: this.data.options.ssid,
      password: this.data.options.password,
      fail(err) {
        console.log('---1-',err);
        wx.showToast({
          title: '连接wifi失败',
          icon: 'error'
        })
      }
    })
  }
})