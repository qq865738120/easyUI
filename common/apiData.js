const attributes = [
  [],
  [ // icon_button
    { name: 'icon', type: 'String', deff: '-', detail: '图标资源路径' },
    { name: 'text', type: 'String', deff: '-', detail: '文本' },
    { name: 'iconWidth', type: 'String', deff: '50', detail: '图标宽度' },
    { name: 'iconHeight', type: 'String', deff: '50', detail: '图标高度' },
    { name: 'width', type: 'String', deff: '188', detail: '组件高度,默认188rpx*188rpx' },
    { name: 'height', type: 'String', deff: '188', detail: '组件宽带,默认188rpx*188rpx' },
    { name: 'spacing', type: 'String', deff: '14', detail: '图标与文字间距' },
    { name: 'fontSize', type: 'String', deff: '24', detail: '文字大小' },
    { name: 'fontColor', type: 'String', deff: '#333333', detail: '文本颜色' },
  ],
  [ // base_list
    { name: 'title', type: 'String', deff: '-', detail: '左边标题' },
    { name: 'subTitle', type: 'String', deff: '-', detail: '右边副标题' },
    { name: 'lineColor', type: 'String', deff: '#E0E0E0', detail: '底部线条颜色' },
    { name: 'icon', type: 'String', deff: 'back.png', detail: '右边图标，默认为向右的小箭头' },
    { name: 'iconWidth', type: 'String', deff: '10', detail: '右边图标宽度' },
    { name: 'iconHeight', type: 'String', deff: '20', detail: '右边图标高度' },
    { name: 'showIcon', type: 'String', deff: 'true', detail: '是否显示图标' },
  ],
  [ // title_view
    { name: 'titleMarginTop', type: 'String', deff: '26', detail: '标题上边距' },
    { name: 'titleMarginBottom', type: 'String', deff: '16', detail: '标题底部边距' },
    { name: 'margin', type: 'String', deff: '25', detail: '组件左右边距' },
    { name: 'titleColor', type: 'String', deff: '#666666', detail: '标题颜色' },
    { name: 'fontSize', type: 'String', deff: '26', detail: '标题字体大小' },
    { name: 'title', type: 'String', deff: 'title', detail: '标题内容，支持数据绑定动态更新' },
    { name: 'contentMargin', type: 'String', deff: '30', detail: '组件内容部分上下边距' },
    { name: 'bgColor', type: 'String', deff: '#fff', detail: '组件内容背景色' },
  ],
  [ // base_button
    { name: 'text', type: 'String', deff: '-', detail: '按钮文本内容，支持数据绑定动态更新' },
    { name: 'theme', type: 'String', deff: '-', detail: '按钮主题，详情见展示页面', show: [
      { name: 'default', detail: '默认主题，带颜色边框加黑色文字' },
      { name: 'hollow', detail: 'hollow主题，带颜色边框加带颜色文字' },
      { name: 'filling', detail: 'filling主题，带填充颜色加白色文字' },
      { name: 'filling2', detail: 'filling2主题，带填充颜色加enColor颜色文字' },
      { name: 'fillingAndShine', detail: 'fillingAndShine主题，带填充颜色加白色文字加发光色' },
      { name: 'fillingAndGradient1', detail: 'fillingAndGradient1主题，背景色左右渐变加白色文字' },
      { name: 'fillingAndGradient2', detail: 'fillingAndGradient2主题，背景色上下渐变加白色文字' }
    ] },
    { name: 'width', type: 'String', deff: '-', detail: '按钮宽度' },
    { name: 'height', type: 'String', deff: '-', detail: '按钮高度' },
    { name: 'radius', type: 'String', deff: '-', detail: '圆角，单位rpx' },
    { name: 'textSize', type: 'String', deff: '-', detail: '字体大小' },
    { name: 'color', type: 'String', deff: '-', detail: '颜色，根据主题变换' },
    { name: 'endColor', type: 'String', deff: '-', detail: '渐变主题必填此项，否则没有渐变效果' },
    { name: 'icon', type: 'String', deff: '-', detail: '按钮图标，不填写则默认没有图标' },
    { name: 'iconSize', type: 'String', deff: '36', detail: '设置图标大小，默认36*36rpx' },
    { name: 'iconPosition', type: 'String', deff: 'left', detail: '图标位置，默认在文字左边。right表示右边' },
    { name: 'spacing', type: 'String', deff: '18', detail: '图标与文字间距，默认18rpx' },
    { name: 'inline', type: 'String', deff: 'true', detail: 'true表示行内元素，false表示块级元素，即独占一行' },
  ],
  [ // head_portrait
    { name: 'inline', type: 'String', deff: 'true', detail: 'true表示行内元素，false表示块级元素，即独占一行' },
    { name: 'src', type: 'String', deff: '-', detail: '头像资源文件路径' },
    { name: 'size', type: 'String', deff: '120', detail: '头像大小，默认120*120rpx' },
    { name: 'radius', type: 'String', deff: '120', detail: '头像圆角，默认120rpx' },
    { name: 'border', type: 'String', deff: '1px solid #fff', detail: '头像边框，语法参考css中的border属性' },
    { name: 'text', type: 'String', deff: '-', detail: '昵称文本，默认不显示' },
    { name: 'textSize', type: 'String', deff: '32', detail: '如需显示昵称则使用此属性设置昵称字体大小' },
    { name: 'textColor', type: 'String', deff: '#fff', detail: '如需显示昵称则使用此属性设置昵称文本颜色' },
    { name: 'spacing', type: 'String', deff: '10', detail: '如需显示昵称则使用此属性设置昵称与头像图片间距' },
  ],
  [ // search
    { name: 'icon', type: 'String', deff: '-', detail: '搜索图标资源文件路径' },
    { name: 'iconSize', type: 'String', deff: '36', detail: '搜索图标大小' },
    { name: 'textSize', type: 'String', deff: '28', detail: '搜索框中文字大小' },
    { name: 'placeholder', type: 'String', deff: '输入搜索内容', detail: '搜索框为空时显示的占位字符' },
    { name: 'buttonText', type: 'String', deff: '搜索', detail: '搜索按钮文本，默认为“搜索”，不需要按钮则可以设置为空字符串' },
    { name: 'focus', type: 'Boolean', deff: 'false', detail: '是否自动获取焦点' },
    { name: 'bgColor', type: 'String', deff: '#F4F4F4', detail: '搜索框背景色' },
    { name: 'radius', type: 'String', deff: '60', detail: '圆角' },
    { name: 'color', type: 'String', deff: '#333', detail: '搜索框文字颜色' },
    { name: 'buttonTextSize', type: 'String', deff: '30', detail: '按钮文本字体大小，如不需要搜索按钮则可以不设置' },
    { name: 'buttonColor', type: 'String', deff: '#333', detail: '按钮文本颜色，如不需要搜索按钮则可以不设置' },
    { name: 'spacing', type: 'String', deff: '26', detail: '按钮与搜索框间距，如不需要搜索按钮则可以不设置' },
    { name: 'width', type: 'String', deff: '460', detail: '搜索框宽度' },
    { name: 'height', type: 'String', deff: '60', detail: '搜索框高度' },
  ],
  [ // enhance_text
    { name: 'icon', type: 'String', deff: '-', detail: '图标资源文件路径，支持动态更新' },
    { name: 'iconSize', type: 'String', deff: '38', detail: '图标资源文件大小。当使用icon-cus自定义类引入阿里图标库中的图标时，该属性不生效' },
    { name: 'title', type: 'String', deff: '-', detail: '标题文本' },
    { name: 'titleFontSize', type: 'String', deff: '28', detail: '标题文字大小' },
    { name: 'titleColor', type: 'String', deff: '#666', detail: '标题文字颜色，支持动态更新' },
    { name: 'titleSpacing', type: 'String', deff: '10', detail: '图标与标题间距' },
    { name: 'text', type: 'String', deff: '-', detail: '文本内容，支持动态更新' },
    { name: 'textFontSize', type: 'String', deff: '28', detail: '文本字体大小' },
    { name: 'textColor', type: 'String', deff: '#666', detail: '文本文字颜色，支持动态更新' },
    { name: 'textSpacing', type: 'String', deff: '10', detail: '标题与文本间距' },
  ],
  [ // enhance_view
    { name: 'inline', type: 'String', deff: 'false', detail: 'true表示行内元素，false表示块级元素' },
    { name: 'reverse', type: 'String', deff: 'row', detail: 'row表示横向排列，col表示纵向排列' },
    { name: 'type', type: 'String', deff: '-', detail: '总共12种取值', show: [
      { name: 'start', detail: '排列方向上开始处对齐，垂直排列方向上开始处对齐' },
      { name: 'startEnd', detail: '排列方向上开始处对齐，垂直排列方向上结束处对齐' },
      { name: 'startCenter', detail: '排列方向上开始处对齐，垂直排列方向上居中对齐' },
      { name: 'endStart', detail: '排列方向上结束处对齐，垂直排列方向上开始处对齐' },
      { name: 'end', detail: '排列方向上结束处对齐，垂直排列方向上结束处对齐' },
      { name: 'endCenter', detail: '排列方向上结束处对齐，垂直排列方向上居中对齐' },
      { name: 'centerStart', detail: '排列方向上居中对齐，垂直排列方向上开始处对齐' },
      { name: 'centerEnd', detail: '排列方向上居中对齐，垂直排列方向上结束处对齐' },
      { name: 'center', detail: '排列方向上居中对齐，垂直排列方向上居中对齐' },
      { name: 'betweenStart', detail: '排列方向上两端对齐，垂直排列方向上开始处对齐' },
      { name: 'betweenEnd', detail: '排列方向上两端对齐，垂直排列方向上结束处对齐' },
      { name: 'betweenCenter', detail: '排列方向上两端对齐，垂直排列方向上居中对齐' },
    ] },
    { name: 'width', type: 'String', deff: '-', detail: '组件宽度，默认根据子元素自适应。默认单位是rpx，支持px及%单位' },
    { name: 'height', type: 'String', deff: '-', detail: '组件高度，默认根据子元素自适应。默认单位是rpx，支持px及%单位' },
    { name: 'margin', type: 'String', deff: '-', detail: '外边距，取值为符合css语法的字符串' },
    { name: 'padding', type: 'String', deff: '-', detail: '内边距，取值为符合css语法的字符串' },
    { name: 'bgColor', type: 'String', deff: '-', detail: '背景色' },
  ],
  [ // icon_list
    { name: 'bgColor', type: 'String', deff: '#fff', detail: '背景色' },
    { name: 'margin', type: 'String', deff: '30', detail: '左右边距' },
    { name: 'title', type: 'String', deff: '-', detail: '标题内容' },
    { name: 'subTitle', type: 'String', deff: '-', detail: '副标题内容' },
    { name: 'detail', type: 'String', deff: '-', detail: '描述信息内容' },
    { name: 'spacing', type: 'String', deff: '30', detail: '图标与标题间距' },
    { name: 'lineColor', type: 'String', deff: '-', detail: '底部线条颜色，默认没有线条。语法参考css中border属性' },
    { name: 'titleColor', type: 'String', deff: '#030302', detail: '标题颜色' },
    { name: 'titleSize', type: 'String', deff: '34', detail: '标题大小' },
    { name: 'subTitleColor', type: 'String', deff: '#666', detail: '副标题颜色' },
    { name: 'subTitleSize', type: 'String', deff: '28', detail: '副标题大小' },
    { name: 'detailColor', type: 'String', deff: '#999', detail: '描述信息颜色' },
    { name: 'detailSize', type: 'String', deff: '24', detail: '描述信息大小' },
  ],
  [ // enhance_icon
    { name: 'width', type: 'String', deff: '64', detail: '图标宽度，单位rpx。使用阿里图标库时此属性为图标大小' },
    { name: 'height', type: 'String', deff: '64', detail: '图标高度，单位rpx' },
    { name: 'src', type: 'String', deff: '-', detail: '图标资源文件路径' },
    { name: 'color', type: 'String', deff: '#666', detail: '图标颜色，使用阿里图标库时生效' },
  ],
  [ // goods_card
    { name: 'width', type: 'String', deff: '370', detail: '组件宽度' },
    { name: 'bgColor', type: 'String', deff: '#fff', detail: '组件背景色' },
    { name: 'radius', type: 'String', deff: '-', detail: '圆角' },
    { name: 'src', type: 'String', deff: '-', detail: '展示图资源文件路径' },
    { name: 'imgHeight', type: 'String', deff: '380', detail: '展示图高度' },
    { name: 'title', type: 'String', deff: '-', detail: '商品标题' },
    { name: 'titleColor', type: 'String', deff: '#323232', detail: '商品标题颜色' },
    { name: 'titleSize', type: 'String', deff: '26', detail: '商品标题大小' },
    { name: 'price', type: 'String', deff: '-', detail: '价格' },
    { name: 'priceColor', type: 'String', deff: '#F62135', detail: '价格文字颜色' },
    { name: 'priceSize', type: 'String', deff: '30', detail: '价格文字大小' },
    { name: 'detail', type: 'String', deff: '-', detail: '描述信息' },
    { name: 'detailColor', type: 'String', deff: '#999', detail: '描述信息颜色' },
    { name: 'detailSize', type: 'String', deff: '22', detail: '描述信息大小' },
    { name: 'spacing', type: 'String', deff: '10', detail: '价格与描述信息间隔大小' },
  ],
  [ // goods_detail
    { name: 'bgColor', type: 'String', deff: '#fff', detail: '组件背景色' },
    { name: 'imgList', type: 'Array', deff: '-', detail: '展示图片路径的数组，例：["image1.png", "image2.png"]' },
    { name: 'title', type: 'String', deff: '-', detail: '商品标题' },
    { name: 'titleColor', type: 'String', deff: '#333333', detail: '商品标题颜色' },
    { name: 'titleSize', type: 'String', deff: '32', detail: '商品标题大小' },
    { name: 'price', type: 'String', deff: '-', detail: '商品价格' },
    { name: 'priceColor', type: 'String', deff: '#F23030', detail: '商品价格文字颜色' },
    { name: 'priceSize', type: 'String', deff: '36', detail: '商品价格文字大小' },
    { name: 'detail', type: 'String', deff: '-', detail: '描述信息' },
    { name: 'detailColor', type: 'String', deff: '#F23030', detail: '描述信息的颜色' },
    { name: 'detailSize', type: 'String', deff: '22', detail: '描述信息的大小' },
    { name: 'subDetail', type: 'String', deff: '-', detail: '副描述信息，设置后会呈现另一种主题风格，不设置则为默认主题风格' },
    { name: 'sales', type: 'String', deff: '-', detail: '销售额' },
    { name: 'salesColor', type: 'String', deff: '#999999', detail: '销售额的颜色' },
    { name: 'salesSize', type: 'String', deff: '22', detail: '销售额的文字大小' },
  ],
  [ // suspension_button
    { name: 'theme', type: 'String', deff: 'default', detail: '按钮主题，点击查看详细参数说明', show: [
      { name: 'default', detail: '默认主题，即圆形加背景填充' },
      { name: 'shine1', detail: 'shine1主题，即圆形加背景填充加发光阴影' },
      { name: 'shine2', detail: 'shine2主题，即左边半圆加背景填充加发光阴影' },
      { name: 'shine3', detail: 'shine3主题，即右边半圆加背景填充加发光阴影' },
      { name: 'gradient1', detail: 'gradient1主题，即圆形加背景左右渐变' },
      { name: 'gradient2', detail: 'gradient2主题，即圆形加背景上下渐变' },
      { name: 'shineAndgradient1', detail: 'shineAndgradient1主题，即圆形加背景左右渐变加发光阴影' },
      { name: 'shineAndgradient2', detail: 'shineAndgradient2主题，即圆形加背景上下渐变加发光阴影' }
    ] },
    { name: 'removable', type: 'String', deff: 'false', detail: '设置按钮是否可移动，true表示可移动' },
    { name: 'width', type: 'String', deff: '100', detail: '按钮宽度' },
    { name: 'height', type: 'String', deff: '100', detail: '按钮高度' },
    { name: 'left', type: 'String', deff: '0', detail: '按钮左上角距离屏幕可用区域最左边距离' },
    { name: 'top', type: 'String', deff: '0', detail: '按钮左上角距离屏幕可用区域最上边距离' },
    { name: 'color', type: 'String', deff: '', detail: '背景色' },
    { name: 'endColor', type: 'String', deff: '', detail: 'shine主题（背景渐变主题）需要设置该颜色来实现两个颜色的渐变' },
    { name: 'src', type: 'String', deff: '', detail: '按钮图片文件路径，如果不需要图片则可用不设置' },
    { name: 'imgMargin', type: 'String', deff: '', detail: '图片距离按钮边缘的距离' },
    { name: 'text', type: 'String', deff: '', detail: '按钮文字，如果不需要文字可不设置' },
    { name: 'textColor', type: 'String', deff: '', detail: '文字颜色，如果不设置text则可以不设置该属性' },
    { name: 'textSize', type: 'String', deff: '30', detail: '文字大小，如果不设置text则可以不设置该属性' }
  ],
  [ // count_button
    { name: 'width', type: 'String', deff: '130', detail: '组件宽度' },
    { name: 'height', type: 'String', deff: '34', detail: '组件高度' },
    { name: 'fontSize', type: 'String', deff: '24', detail: '字体大小' },
    { name: 'theme', type: 'String', deff: 'default', detail: '主题，点击查看详细属性说明', show: [
      { name: 'default', detail: '默认主题，即color1边框色的边框' },
      { name: 'open', detail: 'open主题，即color1作为数值部分的背景填充色' },
    ] },
    { name: 'color1', type: 'String', deff: '#ddd', detail: '根据主题来反映在组建不同部位' },
    { name: 'color2', type: 'String', deff: '#999', detail: '点击后颜色' },
    { name: 'mainColor', type: 'String', deff: '#FF3657', detail: '主色调' },
    { name: 'maxCount', type: 'String', deff: '20', detail: '最大数值' },
  ],
  [ // modal
    { name: 'isShow', type: 'Boolean', deff: 'false', detail: '是否弹出模态框，默认不弹出，需要显示的时候将该字段设为true' },
    { name: 'title', type: 'String', deff: '提示', detail: '模态框标题' },
    { name: 'radius', type: 'String', deff: '12', detail: '圆角' },
    { name: 'src', type: 'String', deff: '', detail: '关闭按钮图标。如果不许则不设置。' },
    { name: 'iconWidth', type: 'String', deff: '30', detail: '图标宽度' },
    { name: 'iconHeight', type: 'String', deff: '30', detail: '图标高度' },
    { name: 'iconLeft', type: 'String', deff: '610', detail: '图标距离窗口左边的距离' },
    { name: 'iconTop', type: 'String', deff: '25', detail: '图标距离窗口顶部的距离' },
    { name: 'titleColor', type: 'String', deff: '#000', detail: '标题文字颜色' },
    { name: 'titleSize', type: 'String', deff: '34', detail: '标题文字大小' },
  ],
  [ // goods_list
    { name: 'bgColor', type: 'String', deff: '#fff', detail: '背景色' },
    { name: 'theme', type: 'String', deff: 'default', detail: '主题，点击查看详细参数说明', show: [
      { name: 'default', detail: '默认主题，即底部为短线条' },
      { name: 'rounded', detail: 'rounded主题，即底部为短线条且图片视角圆润' },
      { name: 'longLine', detail: 'longLine主题，即底部为长线条' },
    ] },
    { name: 'src', type: 'String', deff: '-', detail: '商品图片资源文件路径' },
    { name: 'width', type: 'String', deff: '750', detail: '组件宽度' },
    { name: 'imgSize', type: 'String', deff: '240', detail: '图片大小，默认240rpx*240rpx' },
    { name: 'title', type: 'String', deff: '-', detail: '商品标题' },
    { name: 'titleColor', type: 'String', deff: '-', detail: '标题颜色' },
    { name: 'titleSize', type: 'String', deff: '30', detail: '标题大小' },
    { name: 'price', type: 'String', deff: '-', detail: '商品价格' },
    { name: 'priceColor', type: 'String', deff: '#FA3B54', detail: '价格颜色' },
    { name: 'priceSize', type: 'String', deff: '38', detail: '价格大小' },
    { name: 'thickness', type: 'String', deff: '-', detail: '价格文字粗细' },
    { name: 'showLine', type: 'String', deff: 'true', detail: '是否显示底部线条，默认显示' },
  ],
  [ // sidebar
    { name: 'list', type: 'Array', deff: '-', detail: '内容数组，样例[ "item1", "item2" ]' },
    { name: 'width', type: 'String', deff: '200', detail: '宽度' },
    { name: 'height', type: 'String', deff: '100%', detail: '默认100%，单位不固定，设置时需在数值后带上单位' },
    { name: 'bgColor', type: 'String', deff: '#f4f4f4', detail: '背景色' },
    { name: 'itemColor1', type: 'String', deff: '#333333', detail: '列表项文字颜色' },
    { name: 'itemSize1', type: 'String', deff: '30', detail: '列表项文字大小' },
    { name: 'itemBgColor', type: 'String', deff: '#fff', detail: '列表项选中后背景色' },
    { name: 'itemColor2', type: 'String', deff: '#FE9036', detail: '列表项选中后文字颜色' },
    { name: 'itemSize2', type: 'String', deff: '32', detail: '列表项选中后文字大小' },
  ],
  [ // enhance_image
    { name: 'width', type: 'String', deff: '600', detail: '组件宽度' },
    { name: 'height', type: 'String', deff: '450', detail: '组件宽度' },
    { name: 'src', type: 'String', deff: '-', detail: '图片资源文件路径' },
    { name: 'mode', type: 'String', deff: 'scaleToFill', detail: '图片裁剪、缩放的模式。具体参数取值请查看官方文档image组件' },
  ],
  [ // head_view
    { name: 'title', type: 'String', deff: '-', detail: '标题' },
    { name: 'titleColor', type: 'String', deff: '#333', detail: '标题颜色' },
    { name: 'titleSize', type: 'String', deff: '30', detail: '标题大小' },
    { name: 'tickness', type: 'String', deff: '700', detail: '标题粗细' },
    { name: 'bgColor', type: 'String', deff: '#fff', detail: '背景颜色' },
    { name: 'margin', type: 'String', deff: '30', detail: '左右内部边距' },
    { name: 'padding', type: 'String', deff: '25', detail: '上下内部边距，标题部分与内容部分都使用该数值作为上下边距' },
    { name: 'lineColor', type: 'String', deff: '#e8e8e8', detail: '标题栏底部线条颜色，不需要线条可设置为透明色或者与背景同色' },
    { name: 'theme', type: 'String', deff: 'default', detail: '主题，点击查看具体参数取值', show: [
      { name: 'default', detail: '默认主题，即标题栏底部为短线条' },
      { name: 'longLine', detail: 'longLine主题，即标题栏底部为长线条' },
    ] },
    { name: 'title', type: 'String', deff: '-', detail: '标题' },
    { name: 'title', type: 'String', deff: '-', detail: '标题' },
  ],
  [ // base_card
    { name: 'src', type: 'String', deff: '-', detail: '图片资源文件' },
    { name: 'imgWidth', type: 'String', deff: '160', detail: '图片宽度' },
    { name: 'imgHeight', type: 'String', deff: '160', detail: '图片高度' },
    { name: 'bgColor', type: 'String', deff: '#fff', detail: '背景颜色' },
    { name: 'title', type: 'String', deff: '-', detail: '标题' },
    { name: 'titleColor', type: 'String', deff: '#333', detail: '标题颜色' },
    { name: 'titleSize', type: 'String', deff: '28', detail: '标题大小' },
  ]
]

const mClass = [
  [],
  [ // icon_button
    { name: 'cus', detail: '组件最外层view自定义样式类' },
  ],
  [ // base_list
    { name: 'cus', detail: '组件最外层view自定义样式类' },
    { name: 'cus-title', detail: '标题自定义样式类' },
    { name: 'cus-subTitle', detail: '副标题自定义样式类' }
  ],
  [ // title_view
    { name: 'cus', detail: '组件最外层view自定义样式类' },
  ],
  [ // base_button
    { name: 'cus', detail: '组件最外层view自定义样式类' },
  ],
  [ // head_portrait
    { name: 'cus', detail: '组件最外层view自定义样式类' },
  ],
  [ // search
    { name: 'cus', detail: '组件最外层view自定义样式类' },
  ],
  [ // enhance_text
    { name: 'cus', detail: '组件最外层view自定义样式类' },
    { name: 'icon-cus', detail: '图标自定义样式类' },
  ],
  [ // enhance_view
    { name: 'cus', detail: '自定义组件样式类，部分属性不可用' },
  ],
  [ // icon_list
    { name: 'cus', detail: '自定义组件样式类，部分属性不可用' },
  ],
  [ // enhance_icon
    { name: 'cus', detail: '自定义组件样式类，部分属性不可用' },
  ],
  [ // goods_card
    { name: 'cus', detail: '自定义组件样式类，部分属性不可用' },
  ],
  [ // goods_detail
    { name: 'cus', detail: '自定义组件样式类，部分属性不可用' },
  ],
  [ // suspension_button
    { name: 'cus', detail: '自定义组件样式类，部分属性不可用' },
  ],
  [ // count_button
    { name: 'cus', detail: '自定义组件样式类，部分属性不可用' },
  ],
  [ // modal
    { name: 'cus', detail: '自定义组件样式类，部分属性不可用' },
  ],
  [ // goods_list
    { name: 'cus', detail: '自定义组件样式类，部分属性不可用' },
  ],
  [ // sidebar
    { name: 'cus', detail: '自定义组件样式类，部分属性不可用' },
  ],
  [ // enhance_image
    { name: 'cus', detail: '自定义组件样式类，部分属性不可用' },
  ],
  [ // head_view
    { name: 'cus', detail: '自定义组件样式类，部分属性不可用' },
  ],
  [ // base_card
    { name: 'cus', detail: '自定义组件样式类，部分属性不可用' },
  ],
]

const method = [
  [],
  [ // icon_button
    { name: 'buttontap', parameter: '事件对象', detail: '按钮点击事件' }
  ],
  [ // base_list
    { name: 'listtap', parameter: '事件对象', detail: '列表点击事件' }
  ],
  [ // title_view

  ],
  [ // base_button
    { name: 'buttontap', parameter: '事件对象', detail: '按钮点击事件' }
  ],
  [ // head_portrait
    { name: 'headtap', parameter: '事件对象', detail: '头像点击事件' }
  ],
  [ // search
    { name: 'onsearch', parameter: '事件对象', detail: '搜索事件，搜索关键字在事件对象的detail.value字段中。如果不带搜索按钮则用户开始输入后触发该事件，如果带有搜索按钮则在用户输入完成并点击按钮后触发该事件。如果不输入任何内容点击按钮则使用placeholder的值作为关键字搜索' }
  ],
  [ // enhance_text
    { name: 'texttap', parameter: '事件对象', detail: '点击事件' }
  ],
  [ // enhance_view
    { name: 'viewtap', parameter: '事件对象', detail: '点击事件' }
  ],
  [ // icon_list
    { name: 'listtap', parameter: '事件对象', detail: '点击事件' }
  ],
  [], // enhance_icon
  [ // goods_card
    { name: 'goodstap', parameter: '事件对象', detail: '点击事件' }
  ],
  [], // goods_detail
  [ // suspension_button
    { name: 'buttontap', parameter: '事件对象', detail: '点击事件' },
    { name: 'buttonMove', parameter: '事件对象', detail: '拖动事件' }
  ],
  [ // count_button
    { name: 'countChange', parameter: '事件对象', detail: '数值改变事件，数值在事件对象的detail的count字段' }
  ],
  [ // modal
    { name: 'closetap', parameter: '事件对象', detail: '模态框关闭按钮点击事件' }
  ],
  [ // goods_list
    { name: 'listtap', parameter: '事件对象', detail: '列表点击事件' }
  ],
  [ // sidebar
    { name: 'itemtap', parameter: '事件对象', detail: '列表项点击事件，被点击列表项索引在事件对象的detail的index字段' }
  ],
  [ // enhance_image
    { name: 'error', parameter: '事件对象', detail: "当错误发生时，事件对象event.detail = {errMsg: 'something wrong'}。仅支持bind绑定，不支持catch。" },
    { name: 'load', parameter: '事件对象', detail: "当图片载入完毕时，事件对象event.detail = {height:'图片高度px', width:'图片宽度px'}。仅支持bind绑定，不支持catch。" }
  ],
  [], // head_view
  [ // base_card
    { name: 'cardtap', parameter: '事件对象', detail: '列表点击事件' }
  ],
]

const slot = [
  [],
  [ // icon_button

  ],
  [ // base_list

  ],
  [ // title_view
    { name: '-', detail: '组件内容插槽，根据需要插入自定义节点或者组件' }
  ],
  [ // base_button

  ],
  [ // head_portrait
    { name: '-', detail: '头像底部标签插槽，根据需要插入自定义节点或者组件' }
  ],
  [], // search
  [], // enhance_text
  [ // enhance_view
    { name: '-', detail: 'view内部插槽，根据需要插入自定义节点或者组件' }
  ],
  [ // icon_list
    { name: 'icon', detail: '左边图标插槽，可插入需要显示的图标或者头像。插入图标时请使用enhance_icon组件，使用image组件可能会出现问题' },
    { name: 'right', detail: '右边内容插槽，可插入需要显示的图标、文字、按钮等。插入图标时请使用enhance_icon组件，使用image组件可能会出现问题' },
  ],
  [ // enhance_icon

  ],
  [ // goods_card
    { name: '-', detail: '价格栏右边插槽' }
  ],
  [ // goods_detail
    { name: 'titleLast', detail: '标题栏最右边插槽，可插入分享按钮等组件' },
    { name: 'priceLast', detail: '价格栏最紧跟价格其后的插槽，促销图标、文字等组件' }
  ],
  [], // suspension_button
  [], // count_button
  [ // modal
    { name: 'content', detail: '模态框内容插槽' },
    { name: 'bottom', detail: '模态框底部按钮栏插槽' }
  ],
  [ // goods_list
    { name: 'center', detail: '中间内容插槽' },
    { name: 'price', detail: '价格后面插槽' },
    { name: 'right', detail: '右下角插槽' },
    { name: 'bottom', detail: '价格底部栏插槽' }
  ],
  [ // sidebar
    { name: '-', detail: '列表项插槽，可插入任意自定义内容' }
  ],
  [ // enhance_image
    { name: '-', detail: '内容插槽，可插入任意自定义内容' }
  ],
  [ // head_view
    { name: 'sub', detail: '小标题插槽，即标题栏靠右的位置' },
    { name: 'body', detail: '内容插槽，即标题栏以下部分' }
  ],
  [ // head_view
    { name: 'sub', detail: '标题底部插槽' },
    { name: 'bottom', detail: '组件底部插槽' }
  ],
]

const other = [
'',
'基础库1.9.90以上使用', // icon_button
`基础库1.9.90以上使用。`, // base_list
`基础库1.9.90以上使用。`, // title_view
`基础库1.9.90以上使用。`, // base_button
`基础库1.9.90以上使用。`, // head_portrait
`基础库1.9.90以上使用。`, // search
`基础库1.9.90以上使用。`, // enhance_text
`基础库1.9.90以上使用。`, // enhance_view
`基础库1.9.90以上使用。
tip: 复制代码中包含了其它组件，请仔细查看是否已经引入相关组件。`, // icon_list
`基础库1.9.90以上使用。
tip: 在需要配合组件库中其它组件的时候优先考虑使用该组件展示图片或图标，不建议使用官方image组件`, // enhance_icon
`基础库1.9.90以上使用。`, // goods_card
`基础库1.9.90以上使用。
tip: 复制代码中包含了其它组件，请仔细查看是否已经引入相关组件。`, // goods_detail
`基础库1.9.90以上使用。`, // suspension_button
`基础库1.9.90以上使用。`, // count_button
`基础库1.9.90以上使用。
tip: 使用时需添加自定义组件并且绑定收据，在js中使用setData方法动态修改视图属性。如官方模态框能够满足需求请使用官方模态框。`, // modal
`基础库1.9.90以上使用。`, // goods_list
`基础库1.9.90以上使用。`, // sidebar
`基础库1.9.90以上使用。
tip: 该组件弥补了image组件无法插入内容的缺点，可用于需要设置背景图片且需要使用本地路径的场景。`, // modal
`基础库1.9.90以上使用。`, // head_view
`基础库1.9.90以上使用。`, // base_card
]

module.exports = {
  attributes: attributes,
  mClass: mClass,
  method: method,
  slot: slot,
  other: other
};