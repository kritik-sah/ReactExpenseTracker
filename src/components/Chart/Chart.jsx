import React from 'react'
import ChartBar from './ChartBar'


const Chart = (props) => {
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaxValue = Math.max(...dataPointValues);
    return (
        <div className="p-4 rounded-lg bg-fuchsia-400 text-center flex justify-around h-40">
            {props.dataPoints.map(dataPoint => <ChartBar key={dataPoint.lable} value={dataPoint.value} maxValue={totalMaxValue} lable={dataPoint.lable}/> )}
        </div>
    )
}

export default Chart
