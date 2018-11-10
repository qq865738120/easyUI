// page/page3/page3.js
const com = getApp().globalData.com;
const code = {
  d1: `<e-search
  icon='/imgs/search.png'
  catchonsearch='testTap'
  bgColor='#fff'
  width='520'
  buttonText=''>
</e-search>`,
  d2: `<e-search
  icon='/imgs/search.png'
  catchonsearch='testTap'
  placeholder='双11狂欢夜'
  bgColor='#fff'
  color='#FE9036'
  buttonColor='#FE9036'>
</e-search>`,
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    com: {
      d1: { id: com[6].id, title: com[6].name, sub: '不带搜索按钮', code: code.d1 },
      d2: { id: com[6].id, title: com[6].name, sub: '带搜索按钮', code: code.d2 },
    }
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
})