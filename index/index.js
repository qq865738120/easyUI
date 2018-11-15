// index/index.js
const path = [
  '',
  '/page/page1/page1',
  '/page/page2/page2',
  '/page/page3/page3',
  '/page/page4/page4',
  '/page/page5/page5',
  '/page/page6/page6',
]

Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
      { title: '基础组件', text: '4', lineColor: '#e8e8e8' },
      { title: '按钮组件', text: '3', lineColor: '#e8e8e8' },
      { title: '表单组件', text: '1', lineColor: '#e8e8e8' },
      { title: '列表组件', text: '2', lineColor: '#e8e8e8' },
      { title: '结构组件', text: '1', lineColor: '#e8e8e8' },
      { title: '高级组件', text: '2', lineColor: 'rgba(0,0,0,0)' },
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
})