import {
    RadialBarChart,
    PolarAngleAxis,
    RadialBar,
    ResponsiveContainer,
} from 'recharts';
import { MOCKED_DATA } from '../../../helpers/MOCKED_DATA';

// Todo : try to find an efficient way to import CustomLabel as component.
import { CustomLabel } from './CustomLabel';

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
                    dataKey="value"
                    cornerRadius={circleSize / 2}
                    fill="red"
                />

                {/* CUSTOM LABEL (Center of the chart) */}
                <circle
                    text-anchor="middle"
                    cx="50%"
                    cy="50%"
                    r="70"
                    style={{ fill: 'white' }}
                ></circle>
                <text
                    x="50%"
                    y="48%"
                    text-anchor="middle"
                    fill="#282D30"
                    fontSize="25"
                >
                    {/* Todo: fix type problem */}
                    {/* {MOCKED_DATA[0].activityInfo.result *100}% */}
                    {0.42 * 100}%
                </text>
                <text x="50%" y="58%" text-anchor="middle" fill="#74798C">
                    de votre objectif
                </text>
            </RadialBarChart>
        </ResponsiveContainer>
    );
}

export default ScoreGraph;
