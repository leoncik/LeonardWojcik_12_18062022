import classes from './NutritionInformationContainer.module.css';
import NutritionInformationElement from '../NutritionInformationElement/NutritionInformationElement';
import { MOCKED_DATA } from '../../helpers/MOCKED_DATA';

import Energy from '../../assets/icons/tsx-format/Energy';
import Protein from '../../assets/icons/tsx-format/Protein';
import Carbohydrate from '../../assets/icons/tsx-format/Carbohydrate';
import Lipid from '../../assets/icons/tsx-format/Lipid';

function NutritionInformationContainer() {
    return (
        <div className={classes['nutritions-info-container']}>
            <NutritionInformationElement
                type={MOCKED_DATA[0].nutritionInfo[0].type}
                quantity={MOCKED_DATA[0].nutritionInfo[0].quantity}
                unit={MOCKED_DATA[0].nutritionInfo[0].unit}
                icon={<Energy fillColor="rgba(255,0,0, 1)" />}
            />
            <NutritionInformationElement
                type={MOCKED_DATA[0].nutritionInfo[1].type}
                quantity={MOCKED_DATA[0].nutritionInfo[1].quantity}
                unit={MOCKED_DATA[0].nutritionInfo[1].unit}
                icon={<Protein fillColor="rgba(74, 184, 255, 1)" />}
            />
            <NutritionInformationElement
                type={MOCKED_DATA[0].nutritionInfo[2].type}
                quantity={MOCKED_DATA[0].nutritionInfo[2].quantity}
                unit={MOCKED_DATA[0].nutritionInfo[2].unit}
                icon={<Carbohydrate fillColor="rgba(253, 204, 12, 1)" />}
            />
            <NutritionInformationElement
                type={MOCKED_DATA[0].nutritionInfo[3].type}
                quantity={MOCKED_DATA[0].nutritionInfo[3].quantity}
                unit={MOCKED_DATA[0].nutritionInfo[3].unit}
                icon={<Lipid fillColor="rgba(253, 81, 129, 1)" />}
            />
        </div>
    );
}

export default NutritionInformationContainer;
