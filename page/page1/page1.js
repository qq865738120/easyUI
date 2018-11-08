// page1/page1.js
const content = '/detail/detail?name='
const paths = [
  '',
  'icon_button组件',
  'base_list组件',
  'title_view组件',
  'base_button组件',
  'head_portrait组件',
  'search组件',
  'enhance_text组件'
]

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  onTap: function (e) {
    wx.navigateTo({
      url: content + paths[e.target.id] + '&index=' + e.target.id,
    })
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
})