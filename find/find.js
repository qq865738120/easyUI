// find/find.js
import regeneratorRuntime from '../lib/runtime.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
    ],
    page: 1
  },

  _loadList: async function (list) {
    let res = await wx.$axios.get('/api/v1/article/createtime', { params: { page: this.data.page } })
    if (res.data.code == 200) {
      for (let item of res.data.data) {
        list.push({
          id: item.id,
          img: item.illustration,
          title: item.title,
          watch: item.watch_count,
          time: item.created_date.split('T')[0]
        })
      }
      this.setData({ list })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this._loadList([])
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
      title: '一行代码的艺术之旅',
      path: '/index/index',
      imageUrl: '/imgs/cover.png'
    }
  }
})