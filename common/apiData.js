const attributes = [
  [],
  [ // icon_button
    { name: 'icon', type: 'String', deff: '-', detail: '图标资源路径' },
    { name: 'text', type: 'String', deff: '-', detail: '文本' },
    { name: 'iconWidth', type: 'String', deff: '50', detail: '图标宽度' },
    { name: 'iconHeight', type: 'String', deff: '50', detail: '图标高度' },
    { name: 'size', type: 'String', deff: '188', detail: '组件大小,默认188rpx*188rpx' },
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
    { name: 'theme', type: 'String', deff: '-', detail: '按钮主题，详情见展示页面' },
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
    { name: 'bgColor', type: 'String', deff: '#F4F4F4', detail: '搜索框背景色' },
    { name: 'radius', type: 'String', deff: '60', detail: '圆角' },
    { name: 'color', type: 'String', deff: '#333', detail: '搜索框文字颜色' },
    { name: 'buttonTextSize', type: 'String', deff: '30', detail: '按钮文本字体大小，如不需要搜索按钮则可以不设置' },
    { name: 'buttonColor', type: 'String', deff: '#333', detail: '按钮文本颜色，如不需要搜索按钮则可以不设置' },
    { name: 'spacing', type: 'String', deff: '26', detail: '按钮与搜索框间距，如不需要搜索按钮则可以不设置' },
    { name: 'width', type: 'String', deff: '460', detail: '搜索框宽度' },
  ],
  [ // enhance_text
    { name: 'icon', type: 'String', deff: '-', detail: '图标资源文件路径，支持动态更新' },
    { name: 'iconSize', type: 'String', deff: '38', detail: '图标资源文件大小' },
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
    { name: 'inline', type: 'String', deff: 'false', detail: 'false表示行内元素，true表示块级元素' },
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
    { name: 'width', type: 'String', deff: '-', detail: '组件宽度，默认根据子元素自适应' },
    { name: 'height', type: 'String', deff: '-', detail: '组件高度，默认根据子元素自适应' },
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
    { name: 'width', type: 'String', deff: '64', detail: '图标宽度，单位rpx' },
    { name: 'height', type: 'String', deff: '64', detail: '图标高度，单位rpx' },
    { name: 'src', type: 'String', deff: '-', detail: '图标资源文件路径' },
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
    { name: 'goods', parameter: '事件对象', detail: '点击事件' }
  ],
  [], // goods_detail
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
  ]
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
]

module.exports = {
  attributes: attributes,
  mClass: mClass,
  method: method,
  slot: slot,
  other: other
};