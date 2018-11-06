// page1/page1.js
const content = '/detail/detail'
const paths = [
  '',
  '?name=icon_button组件&index=1',
  '?name=base_list组件&index=2'
]

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  onTap: function (e) {
    wx.navigateTo({
      url: content + paths[e.target.id],
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
})