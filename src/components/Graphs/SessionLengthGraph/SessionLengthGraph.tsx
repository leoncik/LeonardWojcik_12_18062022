import { LineChart, Line, XAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { MOCKED_DATA } from '../../../helpers/MOCKED_DATA';
import { CustomTooltip } from './CustomTooltip';
import { CustomCursor } from './CustomCursor';

function SessionLengthGraph() {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <LineChart
                data={MOCKED_DATA[0].activityInfo.sessionsLength}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
                <Tooltip
                    content={<CustomTooltip />}
                    cursor={<CustomCursor />}
                />
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
                    activeDot={{
                        r: 8,
                        stroke: 'rgba(255, 255, 255, 0.2)',
                        strokeWidth: 18,
                    }}
                />
            </LineChart>
        </ResponsiveContainer>
    );
}

export default SessionLengthGraph;
