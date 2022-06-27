type CustomLabelProps = {
    value: number;
};

export const CustomLabel = ({ value }: CustomLabelProps) => {
    return (
        <g className="score-inner-content">
            <circle
                text-anchor="middle"
                cx="50%"
                cy="50%"
                r="75"
                style={{ fill: 'white' }}
            ></circle>
            <text
                x="50%"
                y="48%"
                text-anchor="middle"
                fill="#282D30"
                fontSize="25"
            >
                {value * 100}%
            </text>
            <text x="50%" y="58%" text-anchor="middle" fill="#74798C">
                de votre objectif
            </text>
        </g>
    );
};
