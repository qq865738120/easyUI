// start/start.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperList: [
      { icon: 'icon-number1', title: '从github下载或克隆项目', src: '/imgs/start1.png', sub: 'github地址：https://github.com/qq865738120/easyUI.git' },
      { icon: 'icon-number61', title: '将下载的压缩包解压', src: '/imgs/start2.png' },
      { icon: 'icon-number3', title: '将项目文件夹添加到开发者工具', src: '/imgs/start3.png', sub: 'AppID需要换成自己的' },
      { icon: 'icon-number4', title: '新建一个项目、以及测试页面', src: '/imgs/start4.png' },
      { icon: 'icon-number5', title: '拷贝component目录到新项目', src: '/imgs/start5.png', sub: '也可以只拷贝需要用到的组件' },
      { icon: 'icon-number6', title: '在页面json中引入需要用的组件', src: '/imgs/start6.png', sub: '命名最好以“e-”开头加上组件名' },
      { icon: 'icon-number7', title: '在页面wxml文件中使用组件', src: '/imgs/start7.png' },
      { icon: 'icon-number8', title: '点击“详细说明”查看api文档', src: '/imgs/start8.png', sub: '点击属性名可自动复制' },
      { icon: 'icon-number9', title: '在wxml组件后添加自定义属性', src: '/imgs/start9.png' },
      { title: '更多高级用法，等你探索。', src: '/imgs/easyUI.png' }
    ]
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
    return {
      title: '一行代码的艺术之旅',
      path: '/index/index',
      imageUrl: '/imgs/cover.png'
    }
  }
})