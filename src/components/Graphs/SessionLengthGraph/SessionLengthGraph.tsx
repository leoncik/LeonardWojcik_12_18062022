import { LineChart, Line, XAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { MOCKED_DATA } from '../../../helpers/MOCKED_DATA';
import { CustomTooltip } from './CustomTooltip';

function SessionLengthGraph() {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <LineChart
                width={730}
                height={250}
                data={MOCKED_DATA[0].activityInfo.sessionsLength}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
                <Tooltip content={<CustomTooltip />} />
                <XAxis
                    dataKey="Day"
                    tickLine={false}
                    axisLine={false}
                    tick={{ fill: 'white' }}
                />
                <Line
                    type="monotone"
                    dataKey="Length"
                    stroke="white"
                    dot={false}
                />
            </LineChart>
        </ResponsiveContainer>
    );
}

export default SessionLengthGraph;
