import Plotly from 'plotly.js-dist'
import { xValues, data, xDate, yValues, yHours } from './utils'

const chart = document.getElementById('chart')

var layout = {
  title: 'Скважина 1-1',

  barmode: 'stack',
  xaxis: {
    type: 'date',
    // tickformat: '%H:%M',
    tickmode: 'linear',
    dtick: 7200000, // 2 часа в миллисекундах
    range: [new Date(2020, 6, 15), new Date(2020, 6, 16)], // Ограничение оси x на 1 сутки
    autorange: false,
  },
  yaxis: {
    title: 'дебит',
    autorange: true,
    titlefont: {
      size: 16,
      color: 'rgb(107, 107, 107)',
    },
  },
}

export function setPlan(plan: number) {
  var trace3 = {
    x: xValues,
    y: Array(24).fill(plan),
    mode: 'lines',
    fill: 'tozeroy',
    fillcolor: 'rgba(240, 255, 255)',
    marker: {
      color: 'rgb(137, 207, 240)',
      size: 12,
    },
  }

  data.push(trace3)
  updateChart()
}

function setValue(value: number, date: any) {
  xDate.push(date)
  yValues.push(value)

  updateChart()
}

function updateChart() {
  // Очистка элемента графика
  var chartContainer: any = document.getElementById('chart')
  chartContainer.innerHTML = ''

  Plotly.newPlot('chart', data, layout)
}

window.onresize = function () {
  Plotly.Plots.resize('chart')
}

setPlan(100) // установить план добычи
setValue(15, new Date(2020, 6, 15, 1, 0, 0).getTime())
setValue(15, new Date(2020, 6, 15, 1, 15, 0).getTime())
setValue(8, new Date(2020, 6, 15, 1, 20, 0).getTime())
setValue(7, new Date(2020, 6, 15, 1, 40, 0).getTime())
setValue(15, new Date(2020, 6, 15, 2, 10, 0).getTime())
setValue(15, new Date(2020, 6, 15, 2, 40, 0).getTime())
setValue(8, new Date(2020, 6, 15, 3, 30, 0).getTime())
setValue(7, new Date(2020, 6, 15, 4, 40, 0).getTime())
setValue(15, new Date(2020, 6, 15, 5, 0, 0).getTime())
setValue(15, new Date(2020, 6, 15, 5, 25, 0).getTime())
setValue(8, new Date(2020, 6, 15, 6, 12, 0).getTime())
setValue(7, new Date(2020, 6, 15, 7, 43, 0).getTime())

function getIndexInRange(start: number, end: number) {
  const iDate: number[] = []

  xDate.forEach((d: any, i: number) => {
    if (d >= start && d <= end) {
      iDate.push(i)
    }
  })

  return iDate
}

function sumValue() {
  var sum = getIndexInRange(
    new Date(2020, 6, 15, 1, 0, 0).getTime(),
    new Date(2020, 6, 15, 2, 0, 0).getTime()
  ).reduce(function (total, index) {
    return total + yValues[index]
  }, 0)

  yHours.push(sum)
  updateChart()

  return sum
}

sumValue()
