import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

export default function PieChart({data, title}) {
    ChartJS.register(ArcElement, Tooltip, Legend);

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
            <Pie data={data} options={options}/>
        </div>
    );
}