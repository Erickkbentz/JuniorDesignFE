import React from "react";
import { ReactDOM } from "react";
// import Chart from "chart.js";
import Chart from 'chart.js/auto'
import classes from '../../styles/LineGraph.module.css';
/**
 * @author tyjedz
 */

/**
 * This class is a pie chart, which is currently being used in the job-view-page
 */
class PieChart extends React.PureComponent {
    constructor(props) {
      super(props); 
    }
    chartRef = React.createRef();
    /**
     * mounts the Chart object to the react component
     */
    componentDidMount() {
        const myChartRef = this.chartRef.current.getContext("2d");
        const data = this.props.data;
        const labels = this.props.labels;
        new Chart(myChartRef, {
            type: "pie",
            data: {
                //Bring in data
                labels: labels,
                datasets:  [{
                    label: "Ethos/Logos/Pathos",
                    data: data,
                    // backgroundColor affects the color of the pie chart
                    backgroundColor: [
                        'rgb(255, 99, 132)',
                        'rgb(54, 162, 235)',
                        'rgb(255, 205, 86)'
                    ]
                }]
            },
            
            options: {
                //Customize chart options
                responsive:true,
                maintainAspectRatio: false
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