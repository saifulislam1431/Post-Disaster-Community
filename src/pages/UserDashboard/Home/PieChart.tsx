import { TPieChartProps } from '@/types/statistics.type';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

const PieChartComponent = ({ data }: TPieChartProps) => {
    // Convert data object to an array of data points
    const pieData = Object.keys(data).map(key => ({
        name: data[key].name,
        Supply: data[key].quantity
    }));

    const colors = ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'];

    return (
        <div>
            <h2 className='brandFont text-center mb-5 text-2xl lg:text-3xl'>Pie Chart: Supplies Overview</h2>
            <PieChart width={600} height={500}>
                <Pie
                    data={pieData}
                    dataKey="Supply"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    fill="#8884d8"
                    label={({ name, value }) => `${name}: ${value}`}
                >
                    {
                        pieData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                        ))
                    }
                </Pie>
                <Tooltip />
            </PieChart>
        </div>

    );
};

export default PieChartComponent;
