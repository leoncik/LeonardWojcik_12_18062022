// React hooks
import { useEffect, useState } from 'react';

// Recharts
import {
    RadarChart,
    Radar,
    PolarGrid,
    PolarAngleAxis,
    ResponsiveContainer,
} from 'recharts';

// Page components
import LoadingSpinner from '../../LoadingSpinner/LoadingSpinner';

// Interfaces
import { IPerformanceData } from '../../../interfaces/fetchedApiData';

type SkillsGraphProps = {
    graphData: Array<IPerformanceData> | undefined;
    loading: boolean;
    error: string;
};

/**
 * A component that should display user's performance in a form of a radar chart.
 * @param {Array<IPerformanceData> | undefined} props - Provided data for the graph.
 * @returns {React.ReactElement} Graph component.
 */
function SkillsGraph({ graphData, loading, error }: SkillsGraphProps) {
    // Watch page width.
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    useEffect(() => {
        const changeWidth = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', changeWidth);
        return () => window.removeEventListener('resize', changeWidth);
    }, []);

    if (loading) return <LoadingSpinner spinnerColor={'#e60000'} />;
    if (error) return <p>{error}</p>;

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
