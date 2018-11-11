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

# 版本说明

### v1.0.5 last  
- 新增组件  
- 修复&优化
1. 修复enhance_icon在手机上无法显示图片的bug。
2. 将icon_list的subTitle属性默认值由24调整到28。
3. 将icon_list的detail属性默认值由22调整到24。

### v1.0.4
- 新增组件
1. icon_list
2. enhance_icon

### v1.0.3  
- 修复&优化  
1. 修复view/enhance_view中添加base_list组件时候导致base_list宽度不正常的bug。
2. 重写小程序界面，提升阅读体验。

### v1.0.2
- 新增组件  
1. enhance_view

### v1.0.1
- 新增组件  
1. title_view  
2. base_button  
3. head_portrait  
4. head_portrait  
5. search  
6. enhance_text

### v1.0.0
- 新增组件  
1. icon_button  
2. base_list

# 关于
- 作者：code_xia
- 个人邮箱：zwj865738120@163.com
- 单位：[搜空集团](http://www.soonking.com/soukongweb/pages/index.html)

# 写在最后

>使用组件前请详细查看组件提供的接口。  
>查看方法：打开小程序选择页面，点击对应组件下方的“详细说明”按钮。

### 扫码查看api文档
![home](https://github.com/qq865738120/easyUI/blob/master/imgs/QR.jpg)

