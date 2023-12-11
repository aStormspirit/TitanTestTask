import Plotly from 'plotly.js-dist'
import * as d3 from 'd3'

const chart = document.getElementById('chart')

const xValues = d3.range(0, 24).map((d: any) => new Date(2020, 0, 1, d, 0, 0))

console.log(xValues)
const mineHours = Array(25).fill(0)

var trace1 = {
  x: xValues,

  y: mineHours,

  marker: {
    color: 'rgba(119,221,119,1)',
  },

  type: 'bar',
}

var trace2 = {
  x: xValues,
  y: [10, 15, 13, 17],
  type: 'scatter',
}

var trace3 = {
  x: xValues,
  y: Array(25).fill(120),
  mode: 'lines',
  fill: 'tozeroy',
  fillcolor: 'rgba(240, 255, 255)',
  marker: {
    color: 'rgb(137, 207, 240)',
    size: 12,
  },
}

var data = [trace3, trace2, trace1]

var layout = {
  title: 'Скважина 1-1',

  barmode: 'stack',
  xaxis: {
    type: 'date',
    tickformat: '%H:%M',
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

Plotly.newPlot('chart', data, layout)

window.onresize = function () {
  Plotly.Plots.resize('chart')
}
