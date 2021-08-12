import PieChart from '../mocks/pieOptions.json'

export default function getPieChart(unidade, api){    
    var pie = JSON.parse(JSON.stringify(PieChart));      
    
    pie.series[0].data[0].y = api.ativos.filter(ativo => ativo ? ativo.unitId === unidade.id && ativo.status === "inOperation" : {}).length
    pie.series[0].data[1].y = api.ativos.filter(ativo => ativo ? ativo.unitId === unidade.id && ativo.status === "inAlert" : {}).length
    pie.series[0].data[2].y = api.ativos.filter(ativo => ativo ? ativo.unitId === unidade.id && ativo.status === "inDowntime" : {}).length    
    return pie
}