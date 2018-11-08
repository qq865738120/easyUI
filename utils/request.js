
//获取服务器地址
var servser = getApp().globalData.context;
//默认请求
function sendRequest(url, params, method) {
  let promisevariable = new Promise(function (resolve) {
    let interval = setInterval(doService, getApp().globalData.timeFilm);
    function doService () {
      wx.request({
        url: servser + url,
        data: params,
        method: method,
        dataType: 'json',
        responseType: 'text',
        success: function (result) {
          var status = result.statusCode;
          if (status == 404) {
            //程序抛出异常
            wx.showToast({
              title: '小程序出错啦',
              icon: 'loading',
              duration: 1000
            });
            resolve(null);
            return;
          }
          if (status != 200 && status != 500) {
            //系统未知异常
            wx.showToast({
              title: '未知错误',
              icon: 'loading',
              duration: 1000
            });
            resolve(null);
            return;
          }
          resolve(result);
        },
      });
    }
  });
  return promisevariable;
}

module.exports = {
  sendRequest: sendRequest,
}
