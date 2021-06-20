const canvas = document.getElementById('canvas')

//基本绘图配置
let options = {
  chartZone: [50, 50, 1000, 500],
  radius: [50, 220], // 第一项为内环，第二项为外环
  center: ['25%', '50%'],
  data: [
    {value: 10, name: 'rose1'},
    {value: 5, name: 'rose2'},
    {value: 15, name: 'rose3'},
    {value: 25, name: 'rose4'},
    {value: 20, name: 'rose5'},
    {value: 35, name: 'rose6'},
    {value: 30, name: 'rose7'},
    {value: 40, name: 'rose8'}
  ],
  colorPool: [
    'rgba(144,132,255,1)',
    'rgba(60,178,239,1)',
    'rgba(143,228,228,1)',
    'rgba(174,253,202,1)',
    'rgba(255,240,101,1)',
    'rgba(255,174,139,1)',
    'rgba(255,125,161,1)',
    'rgba(254,206,255,1)']
}

const context = canvas.getContext('2d');
canvas.height = 600;
canvas.width = 1000;
drawPieChart(options)

function drawPieChart(options) {
  // 计算总值和最大值
  options.maxValue = 0
  options.totalNum = options.data.reduce((previous, current) => {
    if (current.value > options.maxValue) {
      options.maxValue = current.value
    }
    return previous + current.value
  }, 0)

  // 以最大值对应的最大半径来计算参考面积的R
  let Rmin = options.radius[0]
  let Rmax = options.radius[1]
  let r = Math.sqrt(
    (Rmax * Rmax - Rmin * Rmin) * options.totalNum /
    options.maxValue + Rmin * Rmin
  )
  options.radius[1] = r

  // 移动坐标系原点至绘图中心
  let paintingCenter = {
    x: parseInt(options.center[0], 10) / 100 * (options.chartZone[2] - options.chartZone[0]) + options.chartZone[0],
    y: parseInt(options.center[1], 10) / 100 * (options.chartZone[3] - options.chartZone[1]) + options.chartZone[1]
  }
  context.translate(paintingCenter.x, paintingCenter.y);

  let allAngle = options.data.reduce((previous, current, index) => {
    context.fillStyle = options.colorPool[index]
    let angle = calcPaintingData(current, options)
    return previous + angle
  }, 0)

  context.beginPath()
  context.fillStyle = '#FFF'
  context.arc(0, 0, options.radius[0], 0, 2 * Math.PI, false)
  context.fill()
}

/**
 * 计算绘制第index片扇形所需要的参数
 */
function calcPaintingData(data, options) {
  let scale = data.value / options.totalNum
  let angle = scale * 2 * Math.PI
  let Rmin = options.radius[0]
  let Rmax = options.radius[1]
  let r = Math.sqrt(scale * (Rmax * Rmax - Rmin * Rmin) + Rmin * Rmin)

  paintFan({
    r, angle, data, options
  })

  return angle
}

function paintFan({r, angle, data, options}) {
  context.beginPath()
  context.lineTo(r, 0)
  context.arc(0, 0, r, 0, angle, false)
  context.lineTo(0, 0)
  context.closePath()
  context.fill()
  context.rotate(angle)
}
