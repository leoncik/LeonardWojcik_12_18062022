import {
    BarChart,
    Bar,
    ResponsiveContainer,
    YAxis,
    XAxis,
    CartesianGrid,
    Legend,
    Tooltip,
} from 'recharts';
import { MOCKED_DATA } from '../../../helpers/MOCKED_DATA';

function ActivityGraph() {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart
                width={600}
                height={300}
                data={MOCKED_DATA[0].activityInfo.dailyActivity}
            >
                <Tooltip />
                <Bar
                    name="Poids (kg)"
                    type="monotone"
                    dataKey="weight"
                    fill="#282D30"
                    barSize={12}
                    radius={[3, 3, 0, 0]}
                />
                <Bar
                    name="Calories brûlées (kCal)"
                    type="monotone"
                    dataKey="calories"
                    fill="#E60000"
                    barSize={12}
                    radius={[3, 3, 0, 0]}
                />
                <YAxis orientation="right" tickLine={false} axisLine={false} />
                <XAxis dataKey="day" tickLine={false} />
                <CartesianGrid strokeDasharray="4" vertical={false} />
                <Legend
                    align="right"
                    verticalAlign="top"
                    height={36}
                    iconType="circle"
                />
            </BarChart>
        </ResponsiveContainer>
    );
}

export default ActivityGraph;
