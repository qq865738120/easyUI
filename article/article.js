// article/article.js
import regeneratorRuntime from '../lib/runtime.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '',
    author: '',
    watch: '',
    time: '',
    content: '',
    isLoading: true,
    cover: '',
    isShare: false
  },

  onSuspensionTap() {
    if (this.data.isShare) {
      wx.switchTab({
        url: '/index/index',
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    let isShare = options.isShare ? true : false;
    this.setData({ isLoading: true, isShare })
    let res = await wx.$axios.get('/api/v1/article/id', { params: { id: options.id } })
    if (res.code == 200) {
      let res2 = await wx.$axios.get('/api/v1/user/info/id', { params: { id: res.data.author_id } })
      if (res2.code == 200) {
        this.setData({ author: res2.data.nickname })
      }
      let res3 = await wx.$axios.get(res.data.content)
      let content = getApp().towxml.toJson(res3, 'html' );
      this.setData({
        title: res.data.title,
        watch: res.data.watch_count,
        time: res.data.created_date.split('T')[0],
        content,
        cover: res.data.illustration
      }, () => {
        this.setData({ isLoading: false })
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
    return {
      title: this.data.title,
      path: `/${this.route}?isShare=true`,
      imageUrl: this.data.cover
    }
  }
})