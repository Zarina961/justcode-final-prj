import React, { useState } from 'react';
import DoughnutChart from '../../components/DoughnutChart/DoughnutChart';
import './ChartPage.css'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  
  export const options = {
    responsive: true,
    plugins: {
    },
  };
  
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
  export const data = {
    labels,
    datasets: [
      {
        label: 'Credit',
        data: [12, 19, 3, 5, 2, 30, 5, 8, 9, 7, 7, 9],
        backgroundColor: 'rgb(146, 221, 146)',
      },
      {
        label: 'Cash',
        data: [12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 2, 30],
        backgroundColor: 'rgb(94, 226, 158)',
      },
      {
        label: 'Crypto',
        data: [5, 19, 3, 5, 8, 30, 5, 2, 3, 12, 19, 3],
        backgroundColor: 'green',
      },
    ],
  };
  // const testik = data;
  // console.log(testik);
  

function ChartPage() {
  const [dataVerticalChart, setDataVerticalChart] = useState(data);
  const sort = (label) =>{
    const newDatasets = data.datasets.map(el => {
      if (el.label === label){
        return { ...el, data: [...el.data].sort((a,b) => b - a) }
      }
      return el
    })
    setDataVerticalChart({...dataVerticalChart, datasets: newDatasets})
    console.log(data.datasets.map((i)=>i.data));
  }

  const [value, setValue]= useState('')
  function chengeSelect(event) {
    setValue(event.target.value);
    sort(event.target.value)
    // console.log(event.target.value);

    
  }
  console.log('RENDERING')

    return (
        <div className='chart_page'>
            <div className='chart_page-circle_diagram'>
              <DoughnutChart />
              <DoughnutChart />
              <DoughnutChart />
            </div>
            <div className='chart_page-header'>
              <div className='chart_page-header-text'>
                <h1>Store Metrics</h1>
                <h4>Your current sales summary and activity.</h4>
              </div>
              <div className='chart_page-header-button'>
                <img src="../../../public/points.png" alt="" />
              </div>
            </div>
            <div className='chart_page-divider'>
              <img src="../../../public/divider.png" alt="" />
            </div>
            <div className='chart_page-data'>
              <div className='chart_page-data-divider'>
                <div>
                  <img src="../../../public/verticalDivider.png" alt="" />
                </div>
                <div>
                  <h3>Bitcoin</h3>
                  <div className='chart_page-data-percentage'>
                    <h1>62%</h1>
                    <h4>10.78%</h4>
                  </div>
                </div>
              </div>
              <div className='chart_page-data-divider'>
                <div>
                  <img src="../../../public/verticalDivider.png" alt="" />
                </div>
                <div>
                  <h3>Credit</h3>
                  <div className='chart_page-data-percentage'>
                    <h1>12%</h1>
                    <h4>1.08%</h4>
                  </div>
                </div>
              </div>
              <div className='chart_page-data-divider'>
                <div>
                  <img src="../../../public/verticalDivider.png" alt="" />
                </div>
                <div>
                  <h3>Cash</h3>
                  <div className='chart_page-data-percentage'>
                    <h1>30%</h1>
                    <h4>5.90%</h4>
                  </div>
                </div>
              </div>
              <div className='chart_page-data-button'>
                <input className='chart_page-data-button-input' type="text" placeholder="Search"/>
                <div className='chart_page-data-button-click'>
                  <select>
                    <option>Monthly</option>
                    <option>Weekly</option>
                  </select>
                  <select value={value} onChange={chengeSelect}>
                    <option value='Credit'>Credit</option>
                    <option value='Cash'>Cash</option>
                    <option value='Crypto'>Crypto</option>
                  </select>
                </div>
              </div>
            </div>
            <Bar className='chart_page-vertical_diagram' options={options} data={dataVerticalChart} />
        </div>
    );
}

export default ChartPage;