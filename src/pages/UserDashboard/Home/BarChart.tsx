import { TBarChartProps } from '@/types/statistics.type';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const BarCharts = ({ data }: TBarChartProps) => {
    // Extract data for supplies by month
    const barData = Object.keys(data.supplies_by_month).map(month => ({
        name: month,
        supply: data.supplies_by_month[month]
    }));

    return (
        <div>
            <h2 className='brandFont text-center mb-5 text-2xl lg:text-3xl'>Bar Chart: Supplies by Month</h2>
            <BarChart width={600} height={300} data={barData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="supply" fill="#8884d8" />
            </BarChart>
        </div>
    );
};

export default BarCharts;
