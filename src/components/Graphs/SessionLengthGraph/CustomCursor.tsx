// Recharts
import { Rectangle } from 'recharts';

// type CustomCursorProps = {
//     points: Array<{ x: number; y: number }>;
//     width: number;
//     height: number;
// };

/* eslint-disable @typescript-eslint/no-explicit-any */

export const CustomCursor = (props: any) => {
    const { points, width, height } = props;
    const { x, y } = points[0];
    return (
        <Rectangle
            fill="rgba(0, 0, 0, 0.1)"
            x={x}
            y={y - 60}
            width={width + 60}
            height={height + 100}
        />
    );
};

/* eslint-enable @typescript-eslint/no-explicit-any */
