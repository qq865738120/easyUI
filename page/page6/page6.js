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
</e-goods-detail>`,
  d4: `<e-modal isShow='{{ show1 }}'>
  <text slot='content' style='color: #666; font-size: 30rpx'>确认退出登录吗</text>
  <e-enhance-view
    bgColor='#fff'
    width='600'
    type='betweenCenter'
    slot='bottom'>
    <e-base-button
      id='cancle'
      text='取消' 
      theme='fillingAndGradient2'
      width='285'
      height='60'
      textSize='28'
      color='#FE9036'
      endColor='#FE4E36'
      radius='50'
      catchbuttontap='onModalButtonTap'>
    </e-base-button>
    <e-base-button
      id='ok'
      text='确认' 
      theme='fillingAndGradient2'
      width='285'
      height='60'
      textSize='28'
      color='#FE9036'
      endColor='#FE4E36'
      radius='50'
      catchbuttontap='onModalButtonTap'>
    </e-base-button>
  </e-enhance-view>
</e-modal>`,
  d5: `<e-modal
  src='/imgs/close.png'
  isShow='{{ show2 }}'>
  <text slot='content' style='color: #666; font-size: 30rpx'>确认退出登录吗</text>
  <e-base-button
    id='ok'
    slot='bottom'
    text='确认退出' 
    theme='fillingAndGradient2'
    width='500'
    height='80'
    textSize='32'
    color='#FE9036'
    endColor='#FE4E36'
    radius='70'
    catchbuttontap='onModalButtonTap'>
  </e-base-button>
</e-modal>`,
  d6: `<e-sidebar
  list='{{ sidebarList }}'
  height='600rpx' />`,
  d7: `<e-tabs
  items='{{ ["全部", "最近热点", "发布", "最新" ] }}'
  selected='2'/>`,
  d8: `<e-tabs
  items='{{ ["全部", "最近", "发布", "最新", "热点" ] }}'
  selectColor='#455488'
  theme='smallBar'/>`,
  d9: `<e-popup
  isShow='{{ show3 }}'
  hideOnBlur='false'>
  <view slot='head' style='text-align: center; font-weight: 800; font-size: 38rpx; margin: 40rpx'>标题</view>
  <view slot='content' style='margin: 0rpx 30rpx; font-size: 34rpx; color: #666; height: 300rpx;'>这里放置主体内容</view>
  <view slot='foot' style='font-size: 36rpx; color: #fff; display: flex; align-items: center; justify-content: center; height: 100rpx; background-color: #FE9036; margin-top: 30rpx;' catchtap='testTap'>确定</view>
</e-popup>`
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
      d4: { id: com[15].id, title: com[15].name, sub: '不带关闭按钮', code: code.d4 },
      d5: { id: com[15].id, title: com[15].name, sub: '带关闭按钮', code: code.d5 },
      d6: { id: com[17].id, title: com[17].name, sub: '', code: code.d6 },
      d7: { id: com[21].id, title: com[21].name, sub: 'default主题', code: code.d7 },
      d8: { id: com[21].id, title: com[21].name, sub: 'smallBar主题', code: code.d8 },
      d9: { id: com[24].id, title: com[24].name, sub: '点击遮罩不隐藏', code: code.d9 }
    },
    show1: false,
    show2: false,
    show3: false,
    sidebarList: [ '男装', '女装', '男鞋', '女鞋', '箱包手袋', '美妆护肤', '个护清洁', '手机数码', '电脑办公', '家用电器', '食品生鲜', '酒水饮料' ]
  },

  onButtonTap: function (e) {
    let that = this;
    console.log(e);
    switch (e.target.id) {
      case '1': that.setData({ show1: true }); break;
      case '2': that.setData({ show2: true }); break;
      case '3': that.setData({ show3: true }); break;
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
    this.setData({
      show3: false
    })
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