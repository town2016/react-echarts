import React from 'react'
import echarts from 'echarts'
import PieModel from '../../plugins/pieModel'
import '../../asset/less/subPages.less'
class Pie extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      // 饼图的基础参数
      options: {
        title: {
          text: '饼图',
          x: 'center',
          textStyle: {
            color: '#333',
            fontSize: 16,
            fontWeight: 400
          }
        },
        tooltip : {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          type:'scroll',
          orient: 'vertical',
          width: 100,
          data: [],
          right: 20,
          top: 20,
          bottom: 20
        },
        series: []
      },
      errTips: ''
    }
  }
  render () {
    return (
      <div className='pie-item' >
        {!this.state.errTips ? <div className='pie-Container' ref='pie' style={{height: '300px'}}></div> : <div className='tips'>{this.state.errTips}</div>}
      </div>
    )
  }
  componentWillMount () {
    this.createItem(this.props)
  }
  // props值发生变化的时候
  componentWillReceiveProps (nextProps) {
    this.createItem(nextProps)
  }
  componentDidMount () {
    let pie = echarts.init(this.refs.pie)
    pie.setOption(this.state.options)
    // 当页面onresize的时候出发图表的onresize
    global.tools.elResize(document.querySelector('.pie-item'), function () {
      pie.resize()
    })
  }
  // 创建数据
  createItem (props) {
    if (!props.data) {
      this.setState({
        errTips: '请传入数据'
      })
      return
    }
    // 计算legend data字段
    var legendData = props.data.map(item => {
      return item.name
    })
    // copy state.options对象
    var options = {...this.state.options}
    // 混淆自定义配置
    if (props.options) {
      global.tools.deepReplace(options, props.options)
    }
    // 初始化legend data
    options.legend.data = legendData
    var data = new PieModel({data: props.data})
    // 是否要渲染成南丁格尔图
    props.roseType && (data.roseType = props.roseType )
    // 添加要渲染的数据
    options.series.push(data)
    // 将初始换完成的数据赋值给state
    this.setState({
      options: options
    })
  }
}

export default Pie