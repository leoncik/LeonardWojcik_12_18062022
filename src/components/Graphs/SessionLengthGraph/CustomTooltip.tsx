import { TooltipProps } from 'recharts';
import {
    NameType,
    ValueType,
} from 'recharts/types/component/DefaultTooltipContent';
import classes from './SessionLengthGraph.module.css';

export const CustomTooltip = ({
    active,
    payload,
}: TooltipProps<ValueType, NameType>) => {
    if (!payload || !active) return <></>;
    return (
        <div className={classes['custom-tooltip']}>
            {Array.from(payload).map((p, index) => (
                <p key={index} className="label">{`${p?.value || ''} min`}</p>
            ))}
        </div>
    );
};

// Old version.
// export const CustomTooltip = ({
//     active,
//     payload,
// }: TooltipProps<number, string>) => {
//     if (active) {
//         return (
//             <div className={classes['custom-tooltip']}>
//                 <p className="label">{`${payload?.[0].value} min`}</p>
//             </div>
//         );
//     }

//     return null;
// };
