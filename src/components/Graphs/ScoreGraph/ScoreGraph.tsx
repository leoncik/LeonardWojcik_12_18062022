// Recharts
import {
    RadialBarChart,
    PolarAngleAxis,
    RadialBar,
    ResponsiveContainer,
} from 'recharts';

// Page components
import LoadingSpinner from '../../LoadingSpinner/LoadingSpinner';

// Interfaces
import { IUserInfoData } from '../../../interfaces/fetchedApiData';

type ScoreGraphProps = {
    graphData: Array<IUserInfoData['score']> | undefined;
    scoreValue: number;
    loading: boolean;
    error: string;
};

/**
 * A component that should display user's score in a form of a radial bar chart.
 * @param {Array<IAverageSessions> | undefined} graphData - Provided data for the graph.
 * @param {boolean} loading - Display a loading element if true.
 * @param {string} error - Error message.
 * @returns {React.ReactElement} Graph component.
 */
function ScoreGraph({
    graphData,
    scoreValue,
    loading,
    error,
}: ScoreGraphProps) {
    const circleSize = 300;

    if (loading) return <LoadingSpinner spinnerColor={'#e60000'} />;
    if (error) return <p>Impossible de récupérer votre score.</p>;

    return (
        <ResponsiveContainer width="99%" height="100%">
            <RadialBarChart
                width={circleSize}
                height={circleSize}
                innerRadius={80}
                outerRadius={100}
                barSize={10}
                data={graphData}
                startAngle={90}
                endAngle={450}
            >
                <text
                    x="18%"
                    y="15%"
                    textAnchor="middle"
                    fill="#20253A"
                    fontWeight={800}
                >
                    Score
                </text>
                <PolarAngleAxis
                    type="number"
                    domain={[0, 1]}
                    angleAxisId={0}
                    tick={false}
                />
                <RadialBar
                    dataKey="score"
                    cornerRadius={circleSize / 2}
                    fill="#e60000"
                />

                {/* CUSTOM LABEL (Center of the chart) */}
                <circle
                    textAnchor="middle"
                    cx="50%"
                    cy="50%"
                    r="75"
                    style={{ fill: 'white' }}
                ></circle>
                <text
                    x="50%"
                    y="48%"
                    textAnchor="middle"
                    fill="#282D30"
                    fontSize="25"
                    fontWeight={800}
                >
                    {scoreValue * 100}%
                </text>
                <text x="50%" y="50%" textAnchor="middle" fill="#74798C">
                    <tspan x="50%" dy="1.2em">
                        de votre
                    </tspan>
                    <tspan x="50%" dy="1.3em">
                        objectif
                    </tspan>
                </text>
            </RadialBarChart>
        </ResponsiveContainer>
    );
}

export default ScoreGraph;
