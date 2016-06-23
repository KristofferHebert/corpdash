import React from 'react'
import rd3 from 'rd3'

const LnChrt = rd3.LineChart
var lineData = [
  {
    name: 'Customers over Time',
    values: [
    { x: 1436959681000, y: 11 },
    { x: 1442122919000, y: 9 },
    { x: 1450703316000, y: 16 },
    { x: 1459282109000, y: 13 },
    { x: 1463627239000, y: 10 },
    { x: 1473627239000, y: 14 },
    { x: 1483627239000, y: 20 },
    { x: 1493627239000, y: 14 },
    { x: 1503627239000, y: 23 },
    { x: 1513627239000, y: 16 }

    ],
    strokeWidth: 3,
    strokeDashArray: '5,5'
  }]

const LineChart = React.createClass({
  transformData (data) {
    let values = []
    data.forEach((d) => {
      if (d.closed !== '') {
        let value = {
          x: d.closed,
          y: d
        }
      }
    })
  },
  render () {
    return (
      <section>
        <LnChrt
          legend={true}
          data={lineData}
          width='100%'
          height={400}
          viewBoxObject={{
            x: 0,
            y: 0,
            width: 550,
            height: 400
          }}
          yAxisLabel='Customers'
          xAxisLabel='Time'
          data={lineData}
          xAccessor={(d) => {
            return new Date(d.x)
          }
          }
          yAccessor={(d) => d.y}
          xAxisTickInterval={{unit: 'month', interval: 4}}
          gridHorizontal={true} />
      </section>
    )
  }
})

export default LineChart
