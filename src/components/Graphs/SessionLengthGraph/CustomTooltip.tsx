// Recharts
import { TooltipProps } from 'recharts';
import {
    NameType,
    ValueType,
} from 'recharts/types/component/DefaultTooltipContent';

// CSS
import classes from './SessionLengthGraph.module.css';

export const CustomTooltip = ({
    active,
    payload,
}: TooltipProps<ValueType, NameType>) => {
    if (!payload || !active) return <></>;
    return (
        <div className={classes['custom-tooltip']}>
            {Array.from(payload).map((p, index) => (
                <p key={index} className="label">{`${p?.value} min`}</p>
            ))}
        </div>
    );
};
