import { useState, useEffect } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import './App.css'

function SimpleGraph(props) {

  const series = props.data.map((val, _) => {
    return {
      name: val[0],
      [props.label]: val[1],
    }
  })

  return (
    <div style={{ textAlign: 'center', marginBottom: '10px' }}>
        <h3>{props.label + " over time"}</h3>
    <LineChart
        width={500}
        height={350}
        data={series}
        margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 50,
        }}
    >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis 
          dataKey="name"
          scale="time" 
          type="number"
          domain={['auto', 'auto']}
          tickFormatter={
            (unixTime) => {
                let ts = new Date(unixTime);
                var hours = ts.getHours();
                var minutes = "0" + ts.getMinutes();
                var seconds = "0" + ts.getSeconds();
                // Will display time in 10:30:23 format
                var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    
                return formattedTime;
            }
          }
          tick={{ angle: -90, textAnchor: 'end' }}
        />
        <YAxis />
        <Tooltip labelFormatter={(unixTime) => {
            let ts = new Date(unixTime).toLocaleString();
            return ts;
        }} />
        <Legend />
        <Line type="monotone" dot={false} dataKey={props.label} stroke="#000000" activeDot={{ r: 8 }} legendType={'none'} isAnimationActive={false}/>
    </LineChart>
    </div>
  )
}

export default SimpleGraph
