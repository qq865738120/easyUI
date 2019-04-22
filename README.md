![home](https://github.com/qq865738120/easyUI/blob/master/imgs/easyUI.png)
# easyUI

>一款简单易用的微信小程序组库，封装开发中常用的组件，提高开发效率，以及代码的可维护性。
>超越一行代码的极限，体验开箱即用开发方式。默认配置即可满足大部分需求，特殊情况可自定义相关属性来满足需求。

>组件库中的任何一个组件都可以单独使用，不依赖任何组件，可以根据业务需求添加真正使用到的组件，让您的小程序一小再小。

>根据官方组件设计api以及api文档，及其容易上手，对新手十分友好。

*************************************

# 基础库版本

>请使用1.9.90以上的基础库。

# 使用方法
>打开项目，选择需要的组件（组件位于component目录下），将包含组件4个文件的文件夹复制到您的项目中。  
然后在您项目的代码中引用即可，详细引用说明请查看[小程序官方文档](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/)。

# 组件目录

| 组件名      | 路径                              | 说明                  |
| ----------- | --------------------------------- | -------------------- |
| icon_button | [component/button/icon_button](component/button/icon_button) | 带图标的按钮 |
| base_list | [component/list/base_list](component/list/base_list) | 带有标题和副标题的列表项 |
| title_view | [component/structure/title_view](component/structure/title_view) | 带有标题的view |
| base_button | [component/button/base_button](component/button/base_button) | 按钮 |
| head_portrait | [component/base/head_portrait](component/base/head_portrait) | 头像 |
| search | [component/form/search](component/form/search) | 带有标题和副标题的列表项 |
| enhance_text | [component/base/enhance_text](component/base/enhance_text) | 增强text |
| enhance_view | [component/base/enhance_view](component/base/enhance_view) | 增强view |
| icon_list | [component/list/icon_list](component/list/icon_list) | 图标列表，可满足大部分列表需求 |
| enhance_icon | [component/base/enhance_icon](component/base/enhance_icon) | 增强icon，可用于展示图标或图片 |
| goods_card | [component/senior/goods_card](component/senior/goods_card) | 商品展示卡 |
| goods_detail | [component/senior/goods_detail](component/senior/goods_detail) | 商品详情展示 |
| suspension_button | [component/button/suspension_button](component/button/suspension_button) | 浮动按钮 |
| count_button | [component/form/count_button](component/form/count_button) | 计数按钮 |
| modal | [component/senior/modal](component/senior/modal) | 模态框 |
| goods_list | [component/list/goods_list](component/list/goods_list) | 商品列表 |
| sidebar | [component/senior/sidebar](component/senior/sidebar) | 侧边栏菜单 |
| enhance_image | [component/base/enhance_image](component/base/enhance_image) | 增强image，可用于需要背景图片的场景 |
| head_view | [component/structure/head_view](component/structure/head_view) | 带有头部标题栏的view |
| base_card | [component/list/base_card](component/list/base_card) | 基础卡片组件 |
| tabs | [component/senior/tabs](component/senior/tabs) | 标签栏 |
| load_more | [component/base/load_more](component/base/load_more) | 加载更多组件 |
| loading | [component/base/loading](component/base/loading) | 加载动画组件 |
| popup | [component/senior/popup](component/senior/popup) | 弹出框组件 |
| checker | [component/form/checker](component/form/checker) | 选项组件，常用于商品规格选择 |

# 版本说明

### v1.2.1 last
- 新增组件
- 修复&优化
1. 优化小程序，并新增发现页面
2. 优化suspension_button组件，新增openType属性兼容原生button组件特殊使用场景
3. 优化suspension_button组件，新增img-cus自定义类，可用于使用阿里图标库的场景
4. 优化icon_button组件，增加对小程序原生button组件的form-type以及open-type属性的支持
5. goods_detail组件底部添加自定义插槽bottom
6. 修复loading组件设置width和height属性不起作用的bug
7. 修复tabs组件selected属性使用数据绑定时界面显示异常的bug

### v1.2.0
- 新增组件
- 修复&优化
1. goods_detail组件支持视频展示
2. search组件bug修复

### v1.1.0
- 新增组件
1. tabs
2. load_more
3. loading
4. popup
5. checker
- 修复&优化
1. modal组件关闭按钮支持阿里图标库  
2. icon_button新增dataCus属性  
3. 修复sidebar组件使用setData更新数据时候不显示的bug
4. sidebar新增dataCus属性以及selected属性
5. search新增onclean事件函数
6. goods_card新增dataCus属性
7. goods_list新增dataCus属性
8. tabs组件优化
9. suspension_button组件点击事件不触发bug修复
10. suspension_button组件不使用图标时的文本布局问题修复
11. goods_detail组件新增点击banner图可预览图片，以及样式优化
12. base_list组件自定义样式类bug修复
13. icon_button组件新增徽章效果，可通过badge属性设置，并且支持使用阿里图标库使用cus-icon自定义类设置

### v1.0.7
- 新增组件
1. goods_list  
2. sidebar
3. enhance_image
4. head_view  
5. base_card
- 修复&优化
1. search组件新增默认搜索图标。
2. search组件删除清除图标。
3. enhance_text支持使用阿里图标库引入图标（增加icon-cus自定义样式类）。
4. enhance_icon支持使用阿里图标库引入图标。
5. enhance_icon新增color属性。

### v1.0.6 
- 新增组件
1. goods_card  
2. goods_detail  
3. suspension_button
4. count_button
5. modal
- 修复&优化
1. 删除enhance_icon组件插槽。  
2. 修复小程序base_button的详细说明不正确的bug。  
3. search组件新增focus属性。  
4. base_button新增filling2主题。  
5. icon_button删除size属性，新增width和height属性。

### v1.0.5   
- 修复&优化
1. 修复enhance_icon在手机上无法显示图片的bug。
2. 将icon_list的subTitle属性默认值由24调整到28。
3. 将icon_list的detail属性默认值由22调整到24。

# 关于
- 作者：code_xia
- 个人邮箱：zwj865738120@163.com
- 单位：[搜空集团](http://www.soonking.com/soukongweb/pages/index.html)

# 写在最后

>使用组件前请详细查看组件提供的接口。  
>查看方法：打开小程序选择页面，点击对应组件下方的“详细说明”按钮。

### 扫码查看api文档
![home](https://github.com/qq865738120/easyUI/blob/master/imgs/QR.jpg)

