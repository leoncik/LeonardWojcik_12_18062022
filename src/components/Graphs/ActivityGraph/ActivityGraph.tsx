import { BarChart, Bar, ResponsiveContainer } from 'recharts';
import { MOCKED_DATA } from '../../../helpers/MOCKED_DATA';

function ActivityGraph() {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart
                width={600}
                height={300}
                data={MOCKED_DATA[0].activityInfo.dailyActivity}
            >
                <Bar type="monotone" dataKey="weight" fill="red" />
                <Bar type="monotone" dataKey="calories" fill="gray" />
            </BarChart>
        </ResponsiveContainer>
    );
}

export default ActivityGraph;
