import { Rectangle } from 'recharts';

export const CustomCursor = (props: any) => {
    const { points, width, height } = props;
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
