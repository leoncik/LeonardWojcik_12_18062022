import { TooltipProps } from 'recharts';
import classes from './SessionLengthGraph.module.css';

export const CustomTooltip = ({
    active,
    payload,
}: TooltipProps<number, string>) => {
    if (active) {
        return (
            <div className={classes['custom-tooltip']}>
                <p className="label">{`${payload?.[0].value} min`}</p>
            </div>
        );
    }

    return null;
};
