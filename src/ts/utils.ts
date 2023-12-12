import * as d3 from 'd3'

export const xDate: any = [] // массив с датами добыто сутки
export const yValues: any = [] // значение добытого в сутках

export const xValues = d3
  .range(0, 24)
  .map((d: any) => new Date(2020, 6, 15, d, 0, 0))

export const trace = {
  x: xDate,
  y: yValues,
  type: 'scatter',
}

export const data: any[] = [trace]

export function getIndexInRange(start: number, end: number): number[] {
  const iDate: number[] = []

  xDate.forEach((d: any, i: number) => {
    if (d >= start && d <= end) {
      iDate.push(i)
    }
  })

  return iDate
}
