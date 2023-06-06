import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Active users'],
  datasets: [
    {
      label: '# of Votes',
      
      data: [40, 60],
      backgroundColor: [
        '#7F56D9',
        '#F9F5FF',
        
      ],
      borderColor: [
        '#7F56D9',
        '#F9F5FF',
    
      ],
      borderWidth: 1,
      
      
    },
  ],
};



function DoughnutChart() {
    return (
        <div className='DoughnutChart'>
            <Doughnut data={data} />
            
        </div>
    );
}

export default DoughnutChart;