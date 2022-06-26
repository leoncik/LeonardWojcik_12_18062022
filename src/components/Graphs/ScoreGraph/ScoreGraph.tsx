import {
    RadialBarChart,
    PolarAngleAxis,
    RadialBar,
    ResponsiveContainer,
} from 'recharts';
import { MOCKED_DATA } from '../../../helpers/MOCKED_DATA';

function ScoreGraph() {
    const circleSize = 300;

    return (
        <ResponsiveContainer width="100%" height="100%">
            <RadialBarChart
                width={circleSize}
                height={circleSize}
                // cx={circleSize / 2}
                // cy={circleSize / 2}
                innerRadius={80}
                outerRadius={100}
                barSize={25}
                data={MOCKED_DATA[0].activityInfo.result}
                startAngle={90}
                endAngle={450}
            >
                <PolarAngleAxis
                    type="number"
                    domain={[0, 1]}
                    angleAxisId={0}
                    tick={false}
                />
                <RadialBar
                    background
                    dataKey="value"
                    cornerRadius={circleSize / 2}
                    fill="red"
                />
                <text
                    x={circleSize / 3}
                    y={circleSize / 3}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="progress-label"
                >
                    {MOCKED_DATA[0].activityInfo.result[0].value * 100}%
                </text>
                <text
                    x={circleSize / 3}
                    y={circleSize / 2.4}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="progress-label"
                >
                    de votre objectif
                </text>
            </RadialBarChart>
        </ResponsiveContainer>
    );
}

export default ScoreGraph;
