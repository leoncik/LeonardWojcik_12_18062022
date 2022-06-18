import classes from './NutritionInformationElement.module.css';
import energy from '../../assets/icons/energy.svg';

function NutritionInformationElement() {
    return (
        <div className={classes['nutrition-item']}>
            <div className={classes['nutrition-item__icon']}>
                <img src={energy} alt="" />
            </div>
            <div className="nutrition-item_values">
                <p>
                    <span>Quantité</span>
                    <span>Unité</span>
                </p>
                <p>Type</p>
            </div>
        </div>
    );
}

export default NutritionInformationElement;
