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

export default function BarChart({data, title}) {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
    );
    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'bottom',
            },
            title: {
                display: true,
                text: title,
            },
        },
    };

    return (
        <div className="flex justify-center col-span-12 rounded-sm border border-stroke bg-white px-1 py-1 shadow-default" style={{ height: '400px' }}>
            <Bar data={data} options={options}/>
        </div>
    );
}