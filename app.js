import plugin from 'lib/plugin.js'
const Towxml = require('/towxml/main');

let config = {
  host: 'https://www.cutey.net.cn',
  ver: 'v1.3.0'
}

App({

  towxml: new Towxml(),

  globalData: {
    version: config.ver,
    com: [
      {},
      { id: '1', name: 'icon_button组件'},
      { id: '2', name: 'base_list组件'},
      { id: '3', name: 'title_view组件'},
      { id: '4', name: 'base_button组件'},
      { id: '5', name: 'head_portrait组件'},
      { id: '6', name: 'search组件'},
      { id: '7', name: 'enhance_text组件'},
      { id: '8', name: 'enhance_view组件'},
      { id: '9', name: 'icon_list组件' },
      { id: '10', name: 'enhance_icon组件' },
      { id: '11', name: 'goods_card组件' },
      { id: '12', name: 'goods_detail组件' },
      { id: '13', name: 'suspension_button组件' },
      { id: '14', name: 'count_button组件' },
      { id: '15', name: 'modal组件' },
      { id: '16', name: 'goods_list组件' },
      { id: '17', name: 'sidebar组件' },
      { id: '18', name: 'enhance_image组件' },
      { id: '19', name: 'head_view组件' },
      { id: '20', name: 'base_card组件' },
      { id: '21', name: 'tabs组件' },
      { id: '22', name: 'load_more组件' },
      { id: '23', name: 'loading组件' },
      { id: '24', name: 'popup组件' },
      { id: '25', name: 'checker组件' },
      { id: '26', name: 'progress_bar组件' },
      { id: '27', name: 'icon组件' },
      { id: '28', name: 'transition组件' },
    ]
  },

  onLaunch: function () {
    const instance = plugin.axios.create({
      baseURL: config.host,
      timeout: 60000,
    })
    instance.interceptors.request.use(function (config) {
      // wx.showLoading({
      //   title: '加载中...',
      // })
      return config;
    }, function (error) {
      wx.showToast({
        title: '网路异常',
        icon: 'none'
      })
      return Promise.reject(error);
    });
    instance.interceptors.response.use(function (response) {
      wx.hideLoading()
      return response.data
    }, function (error) {
      wx.hideLoading()
      wx.showToast({
        title: '服务器无响应',
        icon: 'none'
      })
      return Promise.reject(error);
    });
    instance.defaults.headers.common['Authorization'] = 'I am a token';
    instance.defaults.headers.common['Content-Type'] = "application/json;charset=utf-8";
    wx.$axios = instance
    // wx.$wx = plugin.wx
  }
})