import React from 'react'
import rd3 from 'rd3'

const LnChrt = rd3.LineChart
var lineData = [
  {
    name: 'Customers over Time',
    values: [ { x: 1423915030039, y: 11.2 },
    { x: 1423913330040, y: 2.1 } ],
    strokeWidth: 3,
    strokeDashArray: '5,5'
  }
]

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
          xAxisTickInterval={{unit: 'year', interval: 2}}
          gridHorizontal={true} />
      </section>
    )
  }
})

export default LineChart
