import classes from './NutritionInformationElement.module.css';
import energy from '../../assets/icons/energy.svg';

type NutritionInformationElementProps = {
    type: string;
    quantity: number;
    unit: string;
};

function NutritionInformationElement({
    type,
    quantity,
    unit,
}: NutritionInformationElementProps) {
    return (
        <div className={classes['nutrition-item']}>
            <div className={classes['nutrition-item__icon']}>
                <img src={energy} alt="" />
            </div>
            <div className="nutrition-item_values">
                <p>
                    <span>{quantity}</span>
                    <span>{unit}</span>
                </p>
                <p>{type}</p>
            </div>
        </div>
    );
}

export default NutritionInformationElement;
