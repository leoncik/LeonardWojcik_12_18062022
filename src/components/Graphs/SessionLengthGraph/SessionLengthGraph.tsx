// Recharts
import { LineChart, Line, XAxis, ResponsiveContainer, Tooltip } from 'recharts';

// Custom components
import { CustomTooltip } from './CustomTooltip';
import { CustomCursor } from './CustomCursor';

// Page components
import LoadingSpinner from '../../LoadingSpinner/LoadingSpinner';

// Interfaces
import { IAverageSessions } from '../../../interfaces/fetchedApiData';

type SessionLengthGraphProps = {
    graphData: Array<IAverageSessions> | undefined;
    loading: boolean;
    error: string;
};

/**
 * A component that should display user's sessions lengths in a form of a line chart.
 * @param {Array<IAverageSessions> | undefined} props - Provided data for the graph.
 * @returns {React.ReactElement} Graph component.
 */
function SessionLengthGraph({
    graphData,
    loading,
    error,
}: SessionLengthGraphProps) {
    if (loading) return <LoadingSpinner spinnerColor={'white'} />;
    if (error) return <p>{error}</p>;

    return (
        <ResponsiveContainer width="99%" height="100%">
            <LineChart
                data={graphData}
                margin={{ top: 55, right: 30, left: 20, bottom: 5 }}
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
