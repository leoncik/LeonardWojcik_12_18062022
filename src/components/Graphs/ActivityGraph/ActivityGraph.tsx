// React hooks
import { useState, useEffect } from 'react';

// Recharts
import {
    BarChart,
    Bar,
    ResponsiveContainer,
    YAxis,
    XAxis,
    CartesianGrid,
    Tooltip,
} from 'recharts';
import { CustomTooltip } from './CustomTooltip';

// import { MOCKED_DATA } from '../../../helpers/MOCKED_DATA';
import classes from './ActivityGraph.module.css';

type ActivityGraphProps = {
    graphData: unknown | any;
    loading: boolean;
    error: string;
};

function ActivityGraph({ graphData, loading, error }: ActivityGraphProps) {
    // Watch page width.
    // If the page width is lower than 750px, set barChart to vertical.
    const minPageWidth = 750;
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    useEffect(() => {
        window.addEventListener('resize', () =>
            setWindowWidth(window.innerWidth)
        );
    }, []);

    return loading ? (
        <div className={classes['loading-container']}></div>
    ) : error ? (
        <p>{error}</p>
    ) : (
        <div style={{ width: '100%', height: '100%' }}>
            {/* HEADER OF THE GRAPH */}
            <header className={classes['graph-header']}>
                <div className={classes['graph-title']}>
                    <h2>Activité quotidienne</h2>
                </div>
                <div className={classes['graph-legend']}>
                    <ul>
                        <li className={classes['graph-legend__weight']}>
                            Poids (kg)
                        </li>
                        <li className={classes['graph-legend__calories']}>
                            Calories brûlées (kCal)
                        </li>
                    </ul>
                </div>
            </header>

            {/* GRAPH */}
            <ResponsiveContainer width="99%" height="80%">
                <BarChart
                    data={graphData}
                    layout={
                        windowWidth > minPageWidth ? 'horizontal' : 'vertical'
                    }
                >
                    <CartesianGrid
                        strokeDasharray="4"
                        vertical={windowWidth > minPageWidth ? false : true}
                    />
                    <Tooltip
                        content={<CustomTooltip />}
                        position={
                            windowWidth > minPageWidth
                                ? { y: -15 }
                                : { x: windowWidth / 1.6, y: -15 }
                        }
                        offset={65}
                        cursor={{ fill: 'rgba(196, 196, 196, 0.5)' }}
                    />
                    <Bar
                        name="Poids (kg)"
                        type="monotone"
                        dataKey="kilogram"
                        fill="#282D30"
                        barSize={12}
                        radius={
                            windowWidth > minPageWidth
                                ? [5, 5, 0, 0]
                                : [0, 5, 5, 0]
                        }
                    />
                    <Bar
                        name="Calories brûlées (kCal)"
                        type="monotone"
                        dataKey="calories"
                        fill="#E60000"
                        barSize={12}
                        radius={
                            windowWidth > minPageWidth
                                ? [5, 5, 0, 0]
                                : [0, 5, 5, 0]
                        }
                    />
                    <YAxis
                        orientation={
                            windowWidth > minPageWidth ? 'right' : 'left'
                        }
                        tickLine={false}
                        axisLine={false}
                        dataKey={windowWidth > minPageWidth ? undefined : 'day'}
                        type={
                            windowWidth > minPageWidth ? 'number' : 'category'
                        }
                    />
                    <XAxis
                        dataKey={windowWidth > minPageWidth ? 'day' : undefined}
                        tickLine={false}
                        type={
                            windowWidth > minPageWidth ? 'category' : 'number'
                        }
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default ActivityGraph;
