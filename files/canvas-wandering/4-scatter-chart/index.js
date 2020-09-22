const canvas = document.getElementById('canvas')
const tipEl = document.getElementById('tip')
let options = {
  chartZone: [50, 50, 1000, 700],
  yAxisLabel: ['55', '60', '65', '70', '75', '80', '85'],
  xAxisLabel: ['0', '10000', '20000', '30000', '40000', '50000', '60000', '70000'],
  xAxisPos: [],//用于暂存x坐标轴标签的位置
  data: [],
  paintingData: [],//用于存放绘图数据
  colorPool: ['#DA5961', '#1ABC9C']
}
/*数据来自百度Echarts官方示例*/
options.data = [
  [[28604, 77, 17096869, 'Australia', 1990], [31163, 77.4, 27662440, 'Canada', 1990], [1516, 68, 1154605773, 'China', 1990], [13670, 74.7, 10582082, 'Cuba', 1990], [28599, 75, 4986705, 'Finland', 1990], [29476, 77.1, 56943299, 'France', 1990], [31476, 75.4, 78958237, 'Germany', 1990], [28666, 78.1, 254830, 'Iceland', 1990], [1777, 57.7, 870601776, 'India', 1990], [29550, 79.1, 122249285, 'Japan', 1990], [2076, 67.9, 20194354, 'North Korea', 1990], [12087, 72, 42972254, 'South Korea', 1990], [24021, 75.4, 3397534, 'New Zealand', 1990], [43296, 76.8, 4240375, 'Norway', 1990], [10088, 70.8, 38195258, 'Poland', 1990], [19349, 69.6, 147568552, 'Russia', 1990], [10670, 67.3, 53994605, 'Turkey', 1990], [26424, 75.7, 57110117, 'United Kingdom', 1990], [37062, 75.4, 252847810, 'United States', 1990]],
  [[44056, 81.8, 23968973, 'Australia', 2015], [43294, 81.7, 35939927, 'Canada', 2015], [13334, 76.9, 1376048943, 'China', 2015], [21291, 78.5, 11389562, 'Cuba', 2015], [38923, 80.8, 5503457, 'Finland', 2015], [37599, 81.9, 64395345, 'France', 2015], [44053, 81.1, 80688545, 'Germany', 2015], [42182, 82.8, 329425, 'Iceland', 2015], [5903, 66.8, 1311050527, 'India', 2015], [36162, 83.5, 126573481, 'Japan', 2015], [1390, 71.4, 25155317, 'North Korea', 2015], [34644, 80.7, 50293439, 'South Korea', 2015], [34186, 80.6, 4528526, 'New Zealand', 2015], [64304, 81.6, 5210967, 'Norway', 2015], [24787, 77.3, 38611794, 'Poland', 2015], [23038, 73.13, 143456918, 'Russia', 2015], [19360, 76.5, 78665830, 'Turkey', 2015], [38225, 81.4, 64715810, 'United Kingdom', 2015], [53354, 79.1, 321773631, 'United States', 2015]]
];

draw(canvas, options)

function draw(canvas, options) {
  const context = canvas.getContext('2d')

  drawBackground()
  drawAxis()
  drawYLabels()
  drawXLabels()
  drawArrow()
  drawData()
  setOffScreen()
  canvas.onmousemove = handleMouseMove

  /*绘制渐变色背景*/
  function drawBackground() {
    let w = canvas.width
    let h = canvas.height
    let color = context.createRadialGradient(w / 2, h / 2, 0.3 * w, w / 2, h / 2, 0.5 * w)
    color.addColorStop(0, '#fff')
    color.addColorStop(1, '#e2e2e2')
    color.globalGradient = color
    context.save()
    context.fillStyle = color
    context.fillRect(0, 0, w, h)
    context.restore()
  }

  // 绘制坐标轴
  function drawAxis() {
    let chartZone = options.chartZone
    context.strokeWidth = 1
    context.strokeStyle = options.axisColor
    context.moveTo(chartZone[0], chartZone[1])
    context.lineTo(chartZone[0], chartZone[3])
    context.lineTo(chartZone[2], chartZone[3])
    context.stroke()
  }

  // 绘制Y轴坐标
  function drawYLabels() {
    let labels = options.yAxisLabel
    let yLength = (options.chartZone[3] - options.chartZone[1]) * 0.95
    let gap = yLength / (labels.length - 1)

    labels.forEach(function (label, index) {
      // 绘制坐标文字
      let offset = context.measureText(label).width + 20
      context.font = '16px'
      const drawX = options.chartZone[0] // 绘制水平起始坐标
      const drawY = options.chartZone[3] - index * gap // 绘制垂直起始坐标

      context.fillText(
        label, // 文字内容
        drawX - offset,
        drawY + 4
      )
      // 绘制小短线
      context.beginPath()
      context.strokeStyle = '#000'
      context.moveTo(drawX - 10, drawY)
      context.lineTo(drawX, drawY)
      context.stroke()

      // 绘制辅助线
      if (index !== 0) {
        context.beginPath()
        context.strokeStyle = '#ccc'
        context.strokeWidth = 2
        context.moveTo(drawX, drawY)
        context.lineTo(options.chartZone[2], drawY)
        context.stroke()
      }

    })
  }

  // 绘制X轴坐标
  function drawXLabels() {
    let labels = options.xAxisLabel
    let xLength = (options.chartZone[2] - options.chartZone[0]) * 0.98
    let gap = xLength / labels.length

    labels.forEach(function (label, index) {
      let offset = context.measureText(label).width
      context.font = '18px'
      const drawX = options.chartZone[0] + (index) * gap
      const drawY = options.chartZone[3]

      // 绘制文字
      context.fillText(
        label,
        drawX - offset / 2,
        drawY + 30
      )

      // 绘制小短线
      // 保存偏移量
      context.beginPath()
      context.strokeStyle = '#000'
      context.moveTo(drawX, drawY)
      context.lineTo(drawX, drawY + 10)
      context.stroke()

      // 绘制辅助线
      if (index !== 0) {
        context.beginPath()
        context.strokeStyle = '#ccc'
        context.strokeWidth = 2
        context.moveTo(drawX, drawY)
        context.lineTo(drawX, options.chartZone[1])
        context.stroke()
      }
    })
  }

  // 绘制箭头
  function drawArrow() {
    let factor = 2 // 箭头大小因子
    context.save()
    context.globalAlpha = 0.7 // 填充透明度
    context.fillStyle = options.axisColor
    // 绘制Y轴箭头
    context.translate(options.chartZone[0], options.chartZone[1]) // 设置坐标系原点至Y轴末端
    context.beginPath() // 开始绘制
    context.moveTo(0, 0) // 移动至新坐标系原点
    context.lineTo(2 * factor, 0)
    context.lineTo(0, -10 * factor)
    context.lineTo(-2 * factor, 0)
    context.lineTo(2 * factor, 0)
    context.fill()
    context.restore()

    // 绘制X轴箭头
    context.save()
    context.globalAlpha = 0.7 // 填充透明度
    context.fillStyle = options.axisColor
    context.translate(options.chartZone[2], options.chartZone[3])
    context.beginPath()
    context.moveTo(0, 0)
    context.lineTo(0, 2 * factor)
    context.lineTo(10 * factor, 0)
    context.lineTo(0, -2 * factor)
    context.lineTo(0, 2 * factor)
    context.fill()
    context.restore()
  }

  // 绘制散点
  function drawData() {
    const {data, chartZone, xAxisLabel, yAxisLabel} = options

    const xLength = (chartZone[2] - chartZone[0])
    const xMax = parseInt(xAxisLabel[xAxisLabel.length - 1], 10)
    const yLength = (chartZone[3] - chartZone[1])
    const yMin = parseInt(yAxisLabel[0], 10)
    const yMax = parseInt(yAxisLabel[yAxisLabel.length - 1], 10)

    const gap = xLength / xAxisLabel.length
    const biggestValue = Math.max.apply(Math, [].concat.apply([], data.map((item) => item.map(o => o[2]))))

    // 遍历年份
    for (let i = 0; i < data.length; i++) {
      let x, y, r, c

      c = context.fillStyle = options.colorPool[i] // 填充颜色
      context.globalAlpha = 0.8
      options.paintingData[i] = []


      // 遍历各个数据点
      for (let j = 0; j < data[i].length; j++) {
        x = chartZone[0] + xLength * data[i][j][0] / xMax
        y = chartZone[3] - yLength * (data[i][j][1] - yMin) / (yMax - yMin)

        // 半径
        // 固定数值：线性
        // r = data[i][j][2] *5 / 100000000
        // 最大值：线性
        // r = data[i][j][2] / biggestValue * 50
        // 对数
        // r = Math.log(data[i][j][2])
        // 开根号
        r = Math.pow(data[i][j][2], 0.4) / 100;

        // 保存绘制
        options.paintingData[i].push({x, y, r, c, i, j})

        context.beginPath()
        context.arc(x, y, r, 0, 2 * Math.PI, false)
        context.fill()
        context.closePath()
      }
    }
  }

  //使用off-screen-canvas保存绘制的像素点
  function setOffScreen() {
    canvas2 = document.createElement('canvas');
    canvas2.height = canvas.height;
    canvas2.width = canvas.width;
    context2 = canvas2.getContext('2d');
    context2.drawImage(canvas,0,0);
  }

  // 简易 hover 效果
  function handleMouseMove(event) {
    const rect = canvas.getBoundingClientRect()
    const pos = {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top
    }


    // 检测是否 hover 在散点上
    let hoverPoint = checkHover(pos)

    if (hoverPoint) {
      // console.log(hoverPoint)
      let samePoint = options.hoverData === hoverPoint

      if (!samePoint) {
        resetHover()
        options.hoverData = hoverPoint

      }
      paintHover()

      const {x, y, i, j} = hoverPoint
      // DOM 元素样式更新
      tipEl.style.left = x + 'px'
      tipEl.style.top = y + 'px'
      tipEl.innerText = `${options.data[i][j]}`
      tipEl.style.visibility = 'visible'
    } else {
      resetHover()

      tipEl.style.visibility = 'hidden'
    }
  }

  // 落点检测
  function checkHover(pos) {
    const data = options.paintingData
    let found = false

    for (let i = 0; i < data.length; i++) {
      found = false
      for (let j = 0; j < data[i].length; j++) {
        if (Math.sqrt(Math.pow(pos.x - data[i][j].x, 2) + Math.pow(pos.y - data[i][j].y, 2)) < data[i][j].r) {
          found = data[i][j]
          options.data[i][j].hover = true
          break
        }
        options.data[i][j].hover = false
      }
      if (found) break
    }
    return found
  }

  // 绘制 hover 状态
  function paintHover() {
    let {x, y, r, c, i, j} = options.hoverData
    let step = 0.5

    let increase = 0

    function animate() {
      context.globalAlpha = 1
      context.fillStyle = c
      context.beginPath()
      context.arc(x, y, r + increase * step, 0, 2 * Math.PI, false)
      context.fill()
      context.closePath()

      increase++
      if (increase < 30 && options.data[i][j].hover) {
        requestAnimationFrame(animate)
      }
    }

    animate()

  }

  // 回复 hover 前的状态
  function resetHover() {
    if (!options.hoverData) return;
    let {x,y,r,c} = options.hoverData;
    let step = 0.5;
    context.globalAlpha = 1;
    for(let i = 29; i>0; i--){
      context.save();
      //绘制外圆范围
      context.drawImage(canvas2, x - r - 30 * step, y - r - 30 * step , 2 * (r + 30 * step),2*(r + 30 * step),x - r - 30 * step, y - r - 30 * step , 2*(r + 30 * step),2*(r + 30 * step));
      //绘制内圆
      context.beginPath();
      context.arc(x,y,r + i * step, 0 , 2*Math.PI,false);
      context.closePath();
      context.fillStyle = c;
      context.globalAlpha = 0.8;
      //填充内圆
      context.fill();
      context.restore();
    }
    options.hoverData = null;
    console.log('清除hover效果');
  }
}
