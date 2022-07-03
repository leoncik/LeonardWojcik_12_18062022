import classes from './NutritionInformationContainer.module.css';
import NutritionInformationElement from '../NutritionInformationElement/NutritionInformationElement';

import Energy from '../../assets/icons/tsx-format/Energy';
import Protein from '../../assets/icons/tsx-format/Protein';
import Carbohydrate from '../../assets/icons/tsx-format/Carbohydrate';
import Lipid from '../../assets/icons/tsx-format/Lipid';

type NutritionInformationContainerProps = {
    nutritionData: any;
};

// export interface NutritionInformationContainerProps {
//     nutritionData: {
//         calorieCount: number
//         carbohydrateCount: number
//         lipidCount: number
//         proteinCount: number
//     };
// }

function NutritionInformationContainer({
    nutritionData,
}: NutritionInformationContainerProps) {
    return (
        <div className={classes['nutritions-info-container']}>
            <NutritionInformationElement
                type={'Calories'}
                quantity={nutritionData.calorieCount}
                unit={'kCal'}
                icon={<Energy fillColor="rgba(255,0,0, 1)" />}
            />
            <NutritionInformationElement
                type={'Protéines'}
                quantity={nutritionData.proteinCount}
                unit={'g'}
                icon={<Protein fillColor="rgba(74, 184, 255, 1)" />}
            />
            <NutritionInformationElement
                type={'Glucides'}
                quantity={nutritionData.carbohydrateCount}
                unit={'g'}
                icon={<Carbohydrate fillColor="rgba(253, 204, 12, 1)" />}
            />
            <NutritionInformationElement
                type={'Lipides'}
                quantity={nutritionData.lipidCount}
                unit={'g'}
                icon={<Lipid fillColor="rgba(253, 81, 129, 1)" />}
            />
        </div>
    );
}

export default NutritionInformationContainer;
