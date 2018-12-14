import {arrayPercent, dataType} from './tools'
// 饼图数据模型
class PieModel {
  constructor (options = {}) {
    this.type = 'pie'
    this.radius = dataType(options.radius) === 'String' || dataType(options.radius) === 'Array' ? options.radius : '60%'
    this.roseType = false
    this.center = arrayPercent(options.radius) ? options.radius : ['50%', '50%']
    this.data = options.data || []
  }
}
export default PieModel