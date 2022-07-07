import { useEffect, useState } from 'react';

import {
    RadarChart,
    Radar,
    PolarGrid,
    PolarAngleAxis,
    ResponsiveContainer,
} from 'recharts';
// import { MOCKED_DATA } from '../../../helpers/MOCKED_DATA';

type SkillsGraphProps = {
    graphData: unknown | any;
};

function SkillsGraph({ graphData }: SkillsGraphProps) {
    // Watch page width.
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    useEffect(() => {
        window.addEventListener('resize', () =>
            setWindowWidth(window.innerWidth)
        );
    }, []);

    return (
        <ResponsiveContainer width="99%" height="100%">
            <RadarChart
                cx="50%"
                cy="50%"
                outerRadius={
                    windowWidth > 700 && windowWidth < 1400 ? '50%' : '75%'
                }
                data={graphData}
            >
                <PolarGrid />
                <PolarAngleAxis
                    dataKey="kind"
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
