import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import CardDataStats from './CardDataStats';
import { Head } from '@inertiajs/react';
import LineChart from './LineChart';
import PieChart from './PieChart';
import BarChart from './BarChart';

export default function Dashboard({ auth }) {

    const accountTypes = ['Agent', 'Branch', 'Broker', 'Outlet'];

    const lineChartData = {
        datasets: [
            {
                data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39, 51],
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
        labels: ['Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
    };

    const pieChartData = {
        datasets: [
            {
                label: 'Number of policies',
                data: [234, 576, 120, 150],
                backgroundColor: ['#4CCD99', '#FCDC2A', '#E72929', '#212db5'],
                borderColor: ['#4CCD99', '#FCDC2A', '#E72929', '#212db5']
            }
        ],
        labels: accountTypes
    };

    const barChartData = {
        datasets: [
            {
                label: 'Premium UGX',
                data: [456000, 576000, 170000, 1500000],
                backgroundColor: '#4CCD99',
            },
            {
                label: 'Amount Insured UGX',
                data: [4560000, 5760000, 1200000, 1500000],
                backgroundColor: '#E72929',
            }
        ],
        labels: accountTypes
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="mx-auto max-w-screen-2xl p-4">
                <div className="grid grid-cols-1 gap-4">
                    <CardDataStats
                        totalAgents={50}
                        totalCustomers={235}
                        totalPolicies={235}
                        totalAmountInsured={'UGX 500,534,000'}
                        totalPremium={'UGX 10,342,000'}
                    />
                </div>
                <div className="mt-4 gap-4">
                    <LineChart data={lineChartData} title={'Policies sold over time'}/>
                </div>
                <div className="mt-4 gap-4">
                    <div className="grid grid-cols-2 gap-x-8">
                        <div>
                            <PieChart data={pieChartData} title={'Policies sold by Account type'}/>
                        </div>
                        <div>
                            <BarChart data={barChartData} title={'Premium and Amount Insured by Account Type'}/>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
