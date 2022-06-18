import classes from './NutritionInformationContainer.module.css';
import NutritionInformationElement from '../NutritionInformationElement/NutritionInformationElement';

function NutritionInformationContainer() {
    return (
        <div className={classes['nutritions-info-container']}>
            <NutritionInformationElement />
            <NutritionInformationElement />
            <NutritionInformationElement />
            <NutritionInformationElement />
        </div>
    );
}

export default NutritionInformationContainer;
