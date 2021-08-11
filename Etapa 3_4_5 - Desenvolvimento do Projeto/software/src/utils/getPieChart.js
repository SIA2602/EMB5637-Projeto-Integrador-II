import PieChart from '../mocks/pieOptions.json'

export default function getPieChart(){    
    var pie = JSON.parse(JSON.stringify(PieChart));
    
    pie.series[0].data[0].y =  Math.floor(Math.random() * 10)+1
    pie.series[0].data[1].y =  Math.floor(Math.random() * 10)+1
    pie.series[0].data[2].y =  Math.floor(Math.random() * 10)+1
    return pie
}