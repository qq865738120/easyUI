// component/senior/goods_detail/goods_detail.js
Component({

  options: {
    multipleSlots: true
  },

  /**
   * 组件的属性列表
   */
  properties: {
    bgColor: {
      type: String,
      value: '#fff'
    },
    imgList: {
      type: Array,
      value: '',
      observer: function (newVal) {
        let list = []
        for (let item of newVal) {
          let str = item.url ? item.url.split(".")[item.url.split(".").length - 1] : item.split(".")[item.split(".").length - 1]
          let type = 'image';
          let poster = item.poster ? item.poster : '';
          let url = item.url ? item.url : item;
          if (str == 'mp4' || str == 'mov' || str == 'm4v' || str == '3gp' || str == 'avi' || str == 'm3u8' || str == 'webm') {
            type = "video"
          }
          list.push({
            url,
            poster,
            type
          })
        }
        this.setData({
          mImgList: list
        });
      }
    },
    title: {
      type: String,
      value: ''
    },
    titleColor: {
      type: String,
      value: '#333333'
    },
    titleSize: {
      type: String,
      value: '32'
    },
    price: {
      type: String,
      value: ''
    },
    priceColor: {
      type: String,
      value: '#F23030'
    },
    priceSize: {
      type: String,
      value: '36'
    },
    detail: {
      type: String,
      value: ''
    },
    detailColor: {
      type: String,
      value: '#F23030'
    },
    detailSize: {
      type: String,
      value: '26'
    },
    subDetail: {
      type: String,
      value: '',
      observer: function (newVal) {
        this.setData({
          mDetail: ''
        });
      }
    },
    sales: {
      type: String,
      value: ''
    },
    salesColor: {
      type: String,
      value: '#999999'
    },
    salesSize: {
      type: String,
      value: '26'
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    mDetail: 'border: 1rpx solid; padding: 2rpx 8rpx; border-radius: 10rpx;',
    mImgList: []
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTapImg: function(e) {
      console.log('e', e)
      let index = e.currentTarget.dataset.index;
      if (e.currentTarget.dataset.src.type == 'image') {
        let urls = []
        for (let i = 0; i < this.data.mImgList.length; i++) {
          if (this.data.mImgList[i].type == "video" && i < index) {
            index--
          }
          if (this.data.mImgList[i].type == "image") {
            urls.push(this.data.mImgList[i].url)
          }
        }
        wx.previewImage({
          current: e.currentTarget.dataset.src.url,
          urls,
          complete: function (res) {
            console.log(res)
          }
        })
      } else if (e.currentTarget.dataset.src.type == 'video') {

      }
      
    }
  }
})
