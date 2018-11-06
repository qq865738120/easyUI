const attributes = [
  [],
  [ // icon_button
    { name: 'icon', type: 'String', deff: '', detail: '图标资源路径' },
    { name: 'text', type: 'String', deff: '', detail: '文本' },
    { name: 'iconWidth', type: 'String', deff: '50', detail: '图标宽度' },
    { name: 'iconHeight', type: 'String', deff: '50', detail: '图标高度' },
    { name: 'size', type: 'String', deff: '188', detail: '组件大小,默认188rpx*188rpx' },
    { name: 'spacing', type: 'String', deff: '14', detail: '图标与文字间距' },
    { name: 'fontSize', type: 'String', deff: '24', detail: '文字大小' },
    { name: 'fontColor', type: 'String', deff: '#333333', detail: '文本颜色' },
  ],
  [ // base_list
    { name: 'title', type: 'String', deff: '', detail: '左边标题' },
    { name: 'subTitle', type: 'String', deff: '', detail: '右边副标题' },
    { name: 'lineColor', type: 'String', deff: '#E0E0E0', detail: '底部线条颜色' },
  ]
]

const mClass = [
  [],
  [ // icon_button

  ],
  [ // base_list
    { name: 'cus-component', detail: '组件最外层view自定义样式类' },
    { name: 'cus-title', detail: '标题自定义样式类' },
    { name: 'cus-subTitle', detail: '副标题自定义样式类' }
  ]
]

const method = [
  [],
  [ // icon_button

  ],
  [ // base_list

  ]
]

const other = [
  '',
  '基础库1.6.3以上使用', // icon_button
  '基础库1.9.90以上使用', // base_list
]

module.exports = {
  attributes: attributes,
  mClass: mClass,
  method: method,
  other: other
};