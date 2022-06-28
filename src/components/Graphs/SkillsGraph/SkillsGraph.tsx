import {
    RadarChart,
    Radar,
    PolarGrid,
    PolarAngleAxis,
    ResponsiveContainer,
} from 'recharts';
import { MOCKED_DATA } from '../../../helpers/MOCKED_DATA';

function SkillsGraph() {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <RadarChart
                cx="50%"
                cy="50%"
                outerRadius="75%"
                data={MOCKED_DATA[0].activityInfo.skills}
            >
                <PolarGrid />
                <PolarAngleAxis
                    dataKey="type"
                    tick={{ fill: 'white', fontSize: '12', fontWeight: '500' }}
                />
                <Radar
                    name="Valeur"
                    dataKey="value"
                    stroke="none"
                    fill="rgba(255, 1, 1, 0.7)"
                />
            </RadarChart>
        </ResponsiveContainer>
    );
}

export default SkillsGraph;
