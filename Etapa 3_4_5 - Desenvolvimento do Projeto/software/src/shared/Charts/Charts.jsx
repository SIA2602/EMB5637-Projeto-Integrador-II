import React from 'react'
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official"

function Charts({options}){
    return <HighchartsReact highcharts={Highcharts} options={options} />
}

export default Charts