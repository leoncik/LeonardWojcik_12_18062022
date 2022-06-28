import { Rectangle } from 'recharts';

type CustomCursorProps = {
    points: Array<{ x: number; y: number }>;
    width: number;
    height: number;
};

export const CustomCursor = ({ points, width, height }: CustomCursorProps) => {
    const { x, y } = points[0];
    return (
        <Rectangle
            fill="rgba(0, 0, 0, 0.1)"
            x={x}
            y={y - 20}
            width={width + 60}
            height={height + 60}
        />
    );
};
