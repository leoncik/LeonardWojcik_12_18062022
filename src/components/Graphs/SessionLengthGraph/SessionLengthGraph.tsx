import { LineChart, Line, XAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { CustomTooltip } from './CustomTooltip';
import { CustomCursor } from './CustomCursor';

// import {ISessions} from '../../../factories/userAverageSessionsFactory'
// import { MOCKED_DATA } from '../../../helpers/MOCKED_DATA';

type SessionLengthGraphProps = {
    graphData: unknown | any;
};

function SessionLengthGraph({ graphData }: SessionLengthGraphProps) {
    return (
        <ResponsiveContainer width="99%" height="100%">
            <LineChart
                data={graphData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
                <text
                    x="8%"
                    y="12%"
                    textAnchor="left"
                    fill="White"
                    fontWeight={500}
                >
                    Durée moyenne des
                </text>
                <text
                    x="8%"
                    y="18%"
                    textAnchor="left"
                    fill="White"
                    fontWeight={500}
                >
                    sessions
                </text>
                <Tooltip
                    content={<CustomTooltip />}
                    cursor={<CustomCursor />}
                />
                <XAxis
                    dataKey="day"
                    tickLine={false}
                    axisLine={false}
                    tick={{ fill: 'white' }}
                />
                <Line
                    type="monotone"
                    dataKey="sessionLength"
                    stroke="white"
                    dot={false}
                    activeDot={{
                        r: 5,
                        stroke: 'rgba(255, 255, 255, 0.2)',
                        strokeWidth: 13,
                    }}
                />
            </LineChart>
        </ResponsiveContainer>
    );
}

export default SessionLengthGraph;
