import classes from './NutritionInformationElement.module.css';

type NutritionInformationElementProps = {
    type: string;
    quantity: number;
    unit: string;
    icon: JSX.Element;
};

function NutritionInformationElement({
    type,
    quantity,
    unit,
    icon,
}: NutritionInformationElementProps) {
    return (
        <div className={classes['nutrition-item']}>
            {/* Retrieve the fill value of the SVG and set background to this value with more opacity */}
            <div
                className={classes['nutrition-item__icon']}
                style={{
                    background: `${icon.props.fillColor.replace(
                        /[^,]+(?=\))/,
                        '0.05'
                    )}`,
                }}
            >
                {icon}
            </div>
            <div className={classes['nutrition-item-data']}>
                <p className={classes['nutrition-item__values']}>
                    <span>{quantity}</span>
                    <span>{unit}</span>
                </p>
                <p className={classes['nutrition-item__type']}>{type}</p>
            </div>
        </div>
    );
}

export default NutritionInformationElement;
