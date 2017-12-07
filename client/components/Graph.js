import React from 'react';
import { Link } from 'react-router-dom';
//import'/App.css';
import ChartistGraph from 'react-chartist'


let globalData;
const API = "TNZ30MMRG0RXZHPZ"
var stock;
//let url = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol="+stock+"&interval=15min&apikey="+API
var simpleLineChartData = {
  labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  series: [
    [12, 9, 7, 8, 5],
    [2, 1, 3.5, 7, 3],
    [1, 3, 4, 5, 6]
  ]
}
class Graph extends React.Component {
  constructor(props) {
    super(props);
    //var stock = props.match.params.symbol

    this.state = {
      labels: [

      ],
      series: [
        [
          
        ]
      ],
      
       stock: props.match.params.symbol
      
    };
  }

  componentDidMount(){
    var url = '';
    if(this.props.match.params){
      var stk = this.props.match.params.symbol;
      this.setState({stock: stk})
      url = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol="+stk+"&interval=15min&apikey="+API
      
    }

    fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
      globalData = data['Time Series (15min)'];
      let foo = [[]];
      let bar = [[]];
      let label = [[]];
              for(const key in globalData) {
                foo[0].unshift({x:Date.parse(key), y:parseFloat(globalData[key]['1. open'])})      
              }
              this.setState({series: foo, labels: label})
              // console.log("*************",foo[0])
               console.log("*************",this.props.match.params.symbol)
              // console.log("*************",this.state.stock)
            })
          }


          render() {
            return (
              <div className="App">
              <ChartistGraph data={this.state} options={simpleLineChartData} type={'Line'} />
              </div>
            );
          }
        }
        
        

// const Graph = () => (
//   <div>
//     <h3>Graphs</h3>
//   </div>
// )

export default Graph;