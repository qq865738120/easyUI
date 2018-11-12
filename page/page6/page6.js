// page/page6/page6.js
const com = getApp().globalData.com;
const code = {
  d1: `<e-enhance-view
  margin='0 30rpx'
  width='750'
  margin='0'
  type='betweenCenter'>
  <e-goods-card
    src='/imgs/image.png'
    title='可爱的小猫咪 圆脸白色装 1只/盒'
    price='￥6666'
    detail='233人付款'>
  </e-goods-card>
  <e-goods-card
    src='/imgs/image.png'
    title='可爱的小猫咪 圆脸白色装 1只/盒'
    price='￥6666'
    detail='233人付款'>
  </e-goods-card>
</e-enhance-view>`,
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    com: {
      d1: { id: com[11].id, title: com[11].name, sub: '两列布局', code: code.d1 },
      d2: { id: com[12].id, title: com[12].name, sub: '两列布局', code: code.d1 }
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

  }
})