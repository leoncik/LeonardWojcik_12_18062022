import {
    RadialBarChart,
    PolarAngleAxis,
    RadialBar,
    ResponsiveContainer,
} from 'recharts';
import { MOCKED_DATA } from '../../../helpers/MOCKED_DATA';
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
                    background
                    dataKey="value"
                    cornerRadius={circleSize / 2}
                    fill="red"
                    label={
                        <CustomLabel
                            value={MOCKED_DATA[0].activityInfo.result[0].value}
                        />
                    }
                    // label={{ position: 'center' }}
                />
            </RadialBarChart>
        </ResponsiveContainer>
    );
}

export default ScoreGraph;
