import * as d3 from "d3";
const process = {};

process.init = function(container){
    d3.csv("../static/map_1.csv",function(d){
        let arr = []
        for(let k in d){
            arr.push(d[k])
        }
        return arr
    }).then((rectList) => {
        let svg = container.append("svg")
        let layer = svg.append('g')
    })
}

export default process;