// Assets
import Energy from '../../assets/icons/tsx-format/Energy';
import Protein from '../../assets/icons/tsx-format/Protein';
import Carbohydrate from '../../assets/icons/tsx-format/Carbohydrate';
import Lipid from '../../assets/icons/tsx-format/Lipid';

// Page components
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import NutritionInformationElement from '../NutritionInformationElement/NutritionInformationElement';

// CSS
import classes from './NutritionInformationContainer.module.css';

// Interfaces
import { IKeyData } from '../../interfaces/fetchedApiData';

/* eslint-disable @typescript-eslint/no-explicit-any */

type NutritionInformationContainerProps = {
    nutritionData: IKeyData | any;
    loading: boolean;
    error: string;
};

/**
 * A component that should display user's nutrition information.
 * @param { IKeyData | any} props - Provided data for nutrition cards.
 * @returns {React.ReactElement} Nutrition cards.
 */
function NutritionInformationContainer({
    nutritionData,
    loading,
    error,
}: NutritionInformationContainerProps) {
    if (loading) return <LoadingSpinner spinnerColor="#e60000" />;
    if (error)
        return <p>Impossible de récupérer vos informations de nutrition.</p>;

    return (
        <div className={classes['nutritions-info-container']}>
            <NutritionInformationElement
                type={'Calories'}
                quantity={nutritionData?.calorieCount}
                unit={'kCal'}
                icon={<Energy fillColor="rgba(255,0,0, 1)" />}
            />
            <NutritionInformationElement
                type={'Protéines'}
                quantity={nutritionData?.proteinCount}
                unit={'g'}
                icon={<Protein fillColor="rgba(74, 184, 255, 1)" />}
            />
            <NutritionInformationElement
                type={'Glucides'}
                quantity={nutritionData?.carbohydrateCount}
                unit={'g'}
                icon={<Carbohydrate fillColor="rgba(253, 204, 12, 1)" />}
            />
            <NutritionInformationElement
                type={'Lipides'}
                quantity={nutritionData?.lipidCount}
                unit={'g'}
                icon={<Lipid fillColor="rgba(253, 81, 129, 1)" />}
            />
        </div>
    );
}

/* eslint-enable @typescript-eslint/no-explicit-any */

export default NutritionInformationContainer;
