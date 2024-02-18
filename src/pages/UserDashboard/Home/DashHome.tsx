import CalendarDateRangePicker from "@/components/CalendarDateRangePicker/CalendarDateRangePicker";
import { Button } from "@/components/ui/button";
import BarCharts from "./BarChart";
import PieChartComponent from "./PieChart";
import { useGetStatisticsDataQuery } from "@/redux/features/statistics/statisticsAPi";


const DashHome = () => {
    const { data, isLoading } = useGetStatisticsDataQuery(undefined);

    return (
        <section>
            <div className="mt-10">
                <div className="flex items-center justify-between space-y-2">
                    <h2 className="text-3xl font-bold tracking-tight">
                        Hi, Welcome back 👋
                    </h2>
                    <div className="hidden md:flex items-center space-x-2">
                        <CalendarDateRangePicker />
                        <Button>Download</Button>
                    </div>
                </div>

            </div>

            <div className="overflow-auto my-20 flex lg:items-center justify-center flex-col">
                {
                    isLoading ? <><h1>Loading</h1></> : <>
                        <PieChartComponent data={data[0]?.pie_chart} />
                        <BarCharts data={data[0]?.bar_charts} />
                    </>
                }
            </div>
        </section>
    );
};

export default DashHome;