import {
    RadialBarChart,
    PolarAngleAxis,
    RadialBar,
    ResponsiveContainer,
} from 'recharts';
import LoadingSpinner from '../../LoadingSpinner/LoadingSpinner';
// import { MOCKED_DATA } from '../../../helpers/MOCKED_DATA';

type ScoreGraphProps = {
    graphData: unknown | any;
    scoreValue: number;
    loading: boolean;
    error: string;
};

function ScoreGraph({
    graphData,
    scoreValue,
    loading,
    error,
}: ScoreGraphProps) {
    const circleSize = 300;

    return loading ? (
        <LoadingSpinner spinnerColor={'#e60000'} />
    ) : error ? (
        <p>Impossible de récupérer votre score.</p>
    ) : (
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
                    fill="red"
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
                <text x="50%" y="58%" textAnchor="middle" fill="#74798C">
                    de votre objectif
                </text>
            </RadialBarChart>
        </ResponsiveContainer>
    );
}

export default ScoreGraph;
