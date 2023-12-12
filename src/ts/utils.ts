import * as d3 from 'd3'

export const xDate: any = [] // массив с датами добыто сутки
export const yValues: any = [] // значение добытого в сутках
export const yHours: any = [] // значение добытого за час

export const trace = {
  x: xDate,
  y: yValues,
  type: 'scatter',
}

export const data: any[] = [trace]

export const xValues = d3
  .range(0, 24)
  .map((d: any) => new Date(2020, 6, 15, d, 0, 0))
