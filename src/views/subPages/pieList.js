import React from 'react'
import '../../asset/less/subPages.less'
import '../../asset/less/global.less'
import Pie from '../../components/pie/pie'
class PieList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      data: [],
      options: {
        title: {
          text: '南丁格尔图'
        }
      }
    }
  }
  render () {
    return (
      <div className='Pie'>
        <div className='card'>
          <Pie data={this.state.data} options={this.state.options} roseType='raduis'/>
        </div>
        <div className='card'>
          <Pie data={this.state.data} />
        </div>
      </div>
    )
  }
  componentWillMount () {
    var data = this.createData(5)
    this.setState({
      data: [...data]
    })
  }
  componentDidMount () {
    var data = [...this.state.data, {name: '1', value: 20}]
    setTimeout(() => {
      this.setState({
        data: data
      })
    }, 2000)
    
  }
  createData (count) {
    var data = [];
    while(count){
      var item = {}
      item.name = `pie${count}`
      item.value = Math.floor(Math.random() * 100)
      data.push(item)
      count --
    }
    return data
  }
}

export default PieList