import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

export default function LineChart({data, title}) {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
    );

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
                position: 'top',
            },
            title: {
                display: true,
                text: title,
            },
        },
    };
    
    return (
        <div className="col-span-12 rounded-sm border border-stroke bg-white px-3 py-3 shadow-default">
            <Line data={data} options={options} height={100}/>
        </div>
    );
}