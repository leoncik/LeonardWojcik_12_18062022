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

import { MOCKED_DATA } from '../../../helpers/MOCKED_DATA';
import classes from './ActivityGraph.module.css';

// Todo : add custom background color on hover.

function ActivityGraph() {
    return (
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
            <ResponsiveContainer width="100%" height="80%">
                <BarChart data={MOCKED_DATA[0].activityInfo.dailyActivity}>
                    <CartesianGrid strokeDasharray="4" vertical={false} />
                    <Tooltip
                        content={<CustomTooltip />}
                        position={{ y: -15 }}
                        offset={65}
                        cursor={{ fill: 'rgba(196, 196, 196, 0.5)' }}
                    />
                    <Bar
                        name="Poids (kg)"
                        type="monotone"
                        dataKey="weight"
                        fill="#282D30"
                        barSize={12}
                        radius={[5, 5, 0, 0]}
                    />
                    <Bar
                        name="Calories brûlées (kCal)"
                        type="monotone"
                        dataKey="calories"
                        fill="#E60000"
                        barSize={12}
                        radius={[5, 5, 0, 0]}
                    />
                    <YAxis
                        orientation="right"
                        tickLine={false}
                        axisLine={false}
                    />
                    <XAxis dataKey="day" tickLine={false} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default ActivityGraph;
