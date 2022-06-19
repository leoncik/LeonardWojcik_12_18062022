import classes from './NutritionInformationContainer.module.css';
import NutritionInformationElement from '../NutritionInformationElement/NutritionInformationElement';
import { MOCKED_DATA } from '../../helpers/MOCKED_DATA';
function NutritionInformationContainer() {
    return (
        <div className={classes['nutritions-info-container']}>
            {/* {MOCKED_DATA[0].nutritionInfo.map((elt, index) => {
                <NutritionInformationElement key={index} type={elt.type} quantity={elt.quantity} unit={elt.unit} />
            })} */}
            <NutritionInformationElement
                type={MOCKED_DATA[0].nutritionInfo[0].type}
                quantity={MOCKED_DATA[0].nutritionInfo[0].quantity}
                unit={MOCKED_DATA[0].nutritionInfo[0].unit}
            />
            <NutritionInformationElement
                type={MOCKED_DATA[0].nutritionInfo[1].type}
                quantity={MOCKED_DATA[0].nutritionInfo[1].quantity}
                unit={MOCKED_DATA[0].nutritionInfo[1].unit}
            />
            <NutritionInformationElement
                type={MOCKED_DATA[0].nutritionInfo[2].type}
                quantity={MOCKED_DATA[0].nutritionInfo[2].quantity}
                unit={MOCKED_DATA[0].nutritionInfo[2].unit}
            />
            <NutritionInformationElement
                type={MOCKED_DATA[0].nutritionInfo[3].type}
                quantity={MOCKED_DATA[0].nutritionInfo[3].quantity}
                unit={MOCKED_DATA[0].nutritionInfo[3].unit}
            />
        </div>
    );
}

export default NutritionInformationContainer;
