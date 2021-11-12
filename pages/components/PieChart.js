import React from "react";
import { ReactDOM } from "react";
// import Chart from "chart.js";
import Chart from 'chart.js/auto'
import classes from '../../styles/LineGraph.module.css';

class PieChart extends React.PureComponent {
    constructor(props) {
      super(props); 
    }
    chartRef = React.createRef();
    
    componentDidMount() {
        const myChartRef = this.chartRef.current.getContext("2d");
        
        new Chart(myChartRef, {
            type: "pie",
            data: {
                //Bring in data
                labels: ["Logos", "Ethos", "Pathos"],
                datasets: [
                    {
                        data: [86, 67, 91],
                        backgroundColor: [
                            'rgb(255, 99, 132)',
                            'rgb(54, 162, 235)',
                            'rgb(255, 205, 86)'
                          ],
                    }
                ]
            },
            
            options: {
                //Customize chart options
            }
        });
    }
    render() {
        return (
            <div className={classes.graphContainer}>
                <canvas
                    id="myChart"
                    ref={this.chartRef}
                />
            </div>
        )
    }
  }
  
export default PieChart;  