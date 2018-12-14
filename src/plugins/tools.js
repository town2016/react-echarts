// 数据类型检测
export function dataType (data) {
  return Object.prototype.toString.call(data).slice(8, -1)
}

// 检测是否为数组，且数组内是否为%的字符串
export function arrayPercent (data) {
  if (dataType(data) !== 'Array') return false
  let flag = true
  for (var i = 0; i < data.length; i++ ) {
    var arr = data.split('%')
    if (arr.length > 2) {
      flag = false;
    } else if (dataType(Number(arr[0])) !== 'Number') {
      flag = false
    }
  }
  return flag
}

// 给元素添加resize事件
export  function elResize (el, cb) {
  var iframe = document.createElement('iframe')
  iframe.style.cssText = 'position: absolute;width: 100%; height: 100%;visibility: hidden;z-index: -1;'
  el.style.position = 'relative'
  el.appendChild(iframe)
  // 添加事件防抖
  var timer = null
  iframe.contentWindow.onresize = function () {
    if (timer) {
      window.clearTimeout(timer)
    }
    timer = setTimeout(function () {
      cb && cb()
    }, 100)
  }
}

// 对象的深度替换
export function deepReplace (merge, target = {}) {
  var type = dataType(merge)
  if (type !== 'Array' && type !== 'Object') {
    merge = target
    return
  }
  
  for (var k in merge) {
    if (target[k]) {
      if (dataType(merge[k]) === 'Array' || dataType(merge[k]) === 'Object') {
        deepReplace(merge[k], target[k])
      } else {
        merge[k] = target[k]
      }
    }
  }
  
}
