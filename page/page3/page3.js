// page/page3/page3.js
const com = getApp().globalData.com;
const code = {
  d1: `<e-search
  catchonsearch='testTap'
  bgColor='#fff'
  width='520'
  buttonText=''>
</e-search>`,
  d2: `<e-search
  catchonsearch='testTap'
  placeholder='双11狂欢夜'
  bgColor='#fff'
  color='#FE9036'
  buttonColor='#FE9036'>
</e-search>`,
  d3: `<e-count-button />`,
  d4: `<e-count-button
  theme='open' />`,
  d5: `<e-checker
  label='重量'
  list='{{ [ { id: "0", text: "20000g" }, { id: "1", text: "300000g" }, { id: "2", text: "400000g" }, { id: "3", text: "5000000g" }, { id: "4", text: "6000000g" } ] }}' />`,
  d6: `<e-checker
  label='套餐'
  theme='open'
  catchselect='testTap'
  list='{{ [ { id: "0", text: "官方标准套餐" }, { id: "1", text: "套餐1" }, { id: "2", text: "套餐2" }, { id: "3", text: "套餐3" }, { id: "4", text: "套餐4" } ] }}' />`,
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    com: {
      d1: { id: com[6].id, title: com[6].name, sub: '不带搜索按钮', code: code.d1 },
      d2: { id: com[6].id, title: com[6].name, sub: '带搜索按钮', code: code.d2 },
      d3: { id: com[14].id, title: com[14].name, sub: 'default主题', code: code.d3 },
      d4: { id: com[14].id, title: com[14].name, sub: 'open主题', code: code.d4 },
      d5: { id: com[25].id, title: com[25].name, sub: 'default主题', code: code.d5 },
      d6: { id: com[25].id, title: com[25].name, sub: 'open主题', code: code.d6 },
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