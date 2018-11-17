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
  d2: `<e-goods-detail
  imgList='{{ ["/imgs/image.png", "/imgs/image.png"] }}'
  title='可爱的小猫咪 圆脸白色装 高颜值会撒娇有点皮 毛色纯正舒适 1只/盒'
  price='¥6666.00~¥9999.00'
  detail='订单提交后可立即领取优惠券使用'
  sales='月销售:358'>
  <e-base-button
    slot='titleLast'
    theme='fillingAndGradient2'
    icon='/imgs/share.png'
    spacing='0'
    width='80'
    height='80'
    textSize='28'
    color='#FF9600'
    endColor='#FCB000'
    radius='50'>
  </e-base-button>
  <e-enhance-text
    slot='priceLast'
    iconSize='32'
    icon='/imgs/hot.png'>
  </e-enhance-text>
</e-goods-detail>`,
  d3: `<e-goods-detail
  imgList='{{ ["/imgs/image.png", "/imgs/image.png"] }}'
  title='可爱的小猫咪 圆脸白色装 高颜值会撒娇有点皮 毛色纯正舒适 1只/盒'
  price='¥6666.00~¥9999.00'
  detail='快递：免运费'
  detailColor='#999'
  subDetail='月销436'
  sales='广州深圳'>
  <e-enhance-text
    slot='priceLast'
    iconSize='32'
    icon='/imgs/hot.png'>
  </e-enhance-text>
</e-goods-detail>`
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    com: {
      d1: { id: com[11].id, title: com[11].name, sub: '两列布局', code: code.d1 },
      d2: { id: com[12].id, title: com[12].name, sub: '不带subDetail属性', code: code.d2 },
      d3: { id: com[12].id, title: com[12].name, sub: '带subDetail属性', code: code.d3 },
      d4: { id: com[15].id, title: com[15].name, sub: '不带关闭按钮', code: code.d3 },
      d5: { id: com[15].id, title: com[15].name, sub: '带关闭按钮', code: code.d3 }
    },
    show1: false,
    show2: false
  },

  onButtonTap: function (e) {
    let that = this;
    console.log(e);
    switch (e.target.id) {
      case '1': that.setData({ show1: true }); break;
      case '2': that.setData({ show2: true }); break;
    }
  },

  onModalButtonTap: function (e) {
    let that = this;
    switch (e.target.id) {
      case 'ok': that.setData({
        show1: false,
        show2: false
      });
      break;
      case 'cancle': that.setData({
        show1: false,
        show2: false
      });
      break;
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