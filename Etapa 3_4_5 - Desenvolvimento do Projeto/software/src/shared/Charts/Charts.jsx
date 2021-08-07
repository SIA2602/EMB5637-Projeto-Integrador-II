import React from 'react'
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

class Charts extends React.Component{    

    constructor(props){
        super(props)
        this.charts = <HighchartsReact highcharts={Highcharts} options={props.options} />
    }

    render(){
        return this.charts
    }   
}

export default Charts