// component/base/transition/transition.js

const enter = "In";
const leave = "Out";
const up = "Up";
const left = "Left";
const right = "Right";
const down = "Down";

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    name: {
      type: String,
      value: ""
    },
    isShow: {
      type: Boolean,
      value: true,
      observer: function(newVal, oldVal) {
        if (new Date().getTime() - this.data.time > 6) {
          if (newVal && !oldVal) { // 由隐藏到显示
            clearTimeout(this.data.timerId)
            clearTimeout(this.data.timerId2)
            this.setData({
              mIsShow: newVal
            })
            const timerId2 = setTimeout(() => {
              console.log('transition完成事件触发');
              this.triggerEvent('finish', "", { bubbles: true });
            }, this.properties.duration)
            this.setData({ timerId2 })
            this.switchShow(enter);
          } else { // 由显示到隐藏
            clearTimeout(this.data.timerId)
            clearTimeout(this.data.timerId2)
            this.switchShow(leave);
            const timerId = setTimeout(() => {
              this.setData({
                mIsShow: newVal
              }, () => {
                console.log('transition完成事件触发');
                this.triggerEvent('finish', "", { bubbles: true });
              })
            }, this.properties.duration)
            this.setData({ timerId })
          }
        }
      }
    },
    duration: {
      type: Number,
      value: 200
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    mIsShow: true,
    cusEnter: "",
    cusLeave: "",
    enter: "",
    leave: "",
    time: "",
    timerId: false,
    timerId2: false
  },

  externalClasses: ['cus', 'cus-enter', 'cus-leave'],

  /**
   * 组件的方法列表
   */
  methods: {
    setClass: function (cusEnter, cusLeave) {
      this.setData({
        cusEnter,
        cusLeave
      })
    },
    switchShow: function (action) {
      const name = this.properties.name.split("-");
      name[1] = name[1] ? name[1] : "";
      name[2] = name[2] ? name[2] : "";
      (name || []).map((item, index) => {
        if (index !== 0) {
          if ((name[index] || "").length === 1) {
            name[index] = name[index].charAt(0).toUpperCase() || ""
          } else if ((name[index] || "").length >= 2) {
            name[index] = name[index].charAt(0).toUpperCase() + name[index].slice(1) || ""
          } else {
            name[index] = "";
          }
        }
      })
      
      this.setData({
        enter: action === enter ? name[0] + action + name[1] + name[2] : '',
        leave: action === leave ? name[0] + action + name[1] + name[2] : '',
        cusEnter: action === enter ? "cus-enter" : "",
        cusLeave: action === leave ? "cus-leave" : "",
      });
      console.log
    }
  },

  lifetimes: {
    created: function() {
      this.setData({
        time: new Date().getTime()
      })
    },

    attached: function() {
      this.setData({
        mIsShow: this.properties.isShow,
      })
    },
  },
})