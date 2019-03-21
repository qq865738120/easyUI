// article/article.js
import regeneratorRuntime from '../lib/runtime.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: 'ksjdf',
    author: 'adsf',
    watch: 21,
    time: '2018-10-20',
    content: '<h1>123</h1>'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    let res = await wx.$axios.get('/api/v1/article/id', { params: { id: options.id } })
    if (res.code == 200) {
      let res2 = await wx.$axios.get('/api/v1/user/info/id', { params: { id: res.data.author_id } })
      if (res2.code == 200) {
        this.setData({ author: res2.data.nickname })
      }
      this.setData({
        title: res.data.title,
        watch: res.data.watch_count,
        time: res.data.created_date.split('T')[0]
      })
      
    }
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