import {
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';
import { MOCKED_DATA } from '../../../helpers/MOCKED_DATA';

function SessionLengthGraph() {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <LineChart
                width={730}
                height={250}
                data={MOCKED_DATA[0].activityInfo.sessionsLength}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <Tooltip />
                <Line type="monotone" dataKey="Day" stroke="#8884d8" />
                <Line type="monotone" dataKey="Length" stroke="#82ca9d" />
            </LineChart>
        </ResponsiveContainer>
    );
}

export default SessionLengthGraph;
