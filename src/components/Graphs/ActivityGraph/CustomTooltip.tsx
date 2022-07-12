// Recharts
import { TooltipProps } from 'recharts';

// CSS
import classes from './ActivityGraph.module.css';

export const CustomTooltip = ({
    active,
    payload,
}: TooltipProps<number, string>) => {
    if (active) {
        return (
            <div className={classes['custom-tooltip']}>
                <p className="label">{`${payload?.[0].value}kg`}</p>
                <p className="label">{`${payload?.[1].value}Kcal`}</p>
            </div>
        );
    }

    return null;
};
