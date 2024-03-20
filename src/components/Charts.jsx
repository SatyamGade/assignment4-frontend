import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, PointElement, LineElement, Filler} from 'chart.js';
import { Bar, Doughnut, Line, Pie } from 'react-chartjs-2';
import PropTypes from 'prop-types';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
  Filler
);

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];


// Bar Chart
export const BarChart = ({horizontal, data_1, data_2, title_1, title_2, bgColor_1, bgColor_2, labels=months})=>{

    const options = {
        responsive: true,
        indexAxis: horizontal ? "y" : "x",
        plugins: {
          legend: {
            display: false,
          },
          title: {
            display: false,
          },
        },
        scales:{
            y:{
                beginAtZero: true,
                grid:{
                    display: false
                }
            },
            x:{
                grid:{
                    display: false
                }
            }
        }
      }

      const data = {
        labels,
        datasets: [
          {
            label: title_1,
            data: data_1,
            backgroundColor: bgColor_1,
            barThickness: "flex",
            barPercentage: 1,
            categoryPercentage: 0.4
          },
          {
            label: title_2,
            data: data_2,
            backgroundColor: bgColor_2,
            barThickness: "flex",
            barPercentage: 1,
            categoryPercentage: 0.4
          },
        ],
      };

    return <Bar width={horizontal? "200%" : ""} options={options} data={data} />;
}

BarChart.propTypes = {
    data_1: PropTypes.arrayOf(PropTypes.number),
    data_2: PropTypes.arrayOf(PropTypes.number),
    title_1: PropTypes.string,
    title_2: PropTypes.string,
    bgColor_1: PropTypes.string,
    bgColor_2: PropTypes.string,
    labels: PropTypes.arrayOf(PropTypes.string),
}

BarChart.defaultProps = {
    horizontal: false,
    data_1: [],
    data_2: [],
    labels: months
}


// Doughnut Chart
export const DoughnutChart = ({data, backgroundColor, labels, cutout, legends, offset})=>{

    const doughnutData = {
        labels,
        datasets: [{
            data,
            backgroundColor,
            borderWidth: 0,
            offset,
        }]
    };

    const options= {
        responsive: true,
        plugins:{
            legend:{
                display: legends,
                position: 'bottom',
                labels:{
                    padding: 40,
                }
            }
        },
        cutout
    };

    return <Doughnut data={doughnutData} options={options} />
}

DoughnutChart.propTypes = {
    data: PropTypes.arrayOf(PropTypes.number),
    backgroundColor: PropTypes.arrayOf(PropTypes.string),
    labels: PropTypes.arrayOf(PropTypes.string),
    offset: PropTypes.arrayOf(PropTypes.number),
}

DoughnutChart.defaultProps = {
    labels: [],
    cutout: "",
    legends: true,
    offset: []
}


// Pie Chart
export const PieChart = ({data, backgroundColor, labels, offset})=>{

  const pieData = {
      labels,
      datasets: [{
          data,
          backgroundColor,
          borderWidth: 1,
          offset,
      }]
  };

  const options = {
      responsive: true,
      plugins:{
          legend:{
              display: false,
          }
      }
  };

  return <Pie data={pieData} options={options} />
}

PieChart.propTypes = {
    data: PropTypes.arrayOf(PropTypes.number),
    backgroundColor: PropTypes.arrayOf(PropTypes.string),
    labels: PropTypes.arrayOf(PropTypes.string),
    offset: PropTypes.arrayOf(PropTypes.number),
}
  
PieChart.defaultProps = {
    labels: [],
    offset: [],
}


// Line Chart
export const LineChart = ({data, label, bgColor, borderColor ,labels})=>{

  const options = {
      responsive: true,
      plugins: {
        legend: {
          display: false,
        },
        title: {
          display: false,
        },
      },
      scales:{
          y:{
              beginAtZero: true,
              grid:{
                  display: false
              }
          },
          x:{
              grid:{
                  display: false
              }
          }
      }
    }

    const lineData = {
      labels,
      datasets: [
        {
          fill: true,
          label,
          data,
          backgroundColor: bgColor,
          borderColor,
        },
      ],
    };

  return <Line options={options} data={lineData} />;
}

LineChart.propTypes = {
    data: PropTypes.arrayOf(PropTypes.number),
    label: PropTypes.string,
    bgColor: PropTypes.string,
    borderColor: PropTypes.string,
    labels: PropTypes.arrayOf(PropTypes.string),
}

LineChart.defaultProps = {
    labels: months,
    data: []
}