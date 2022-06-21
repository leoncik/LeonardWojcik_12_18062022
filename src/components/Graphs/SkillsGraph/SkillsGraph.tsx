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
                outerRadius={90}
                width={730}
                height={250}
                data={MOCKED_DATA[0].activityInfo.skills}
            >
                <PolarGrid />
                <PolarAngleAxis dataKey="type" />
                <Radar
                    name="Type"
                    dataKey="type"
                    stroke="orange"
                    fill="orange"
                    fillOpacity={0.6}
                />
                <Radar
                    name="Valeur"
                    dataKey="value"
                    stroke="orange"
                    fill="red"
                    fillOpacity={0.6}
                />
            </RadarChart>
        </ResponsiveContainer>
    );
}

export default SkillsGraph;
