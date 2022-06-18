import classes from "./SecondaryNavigation.module.css"
import meditation from "../../assets/icons/meditation.svg"
import swimming from "../../assets/icons/swimming.svg"
import cycling from "../../assets/icons/cycling.svg"
import weightlifting from "../../assets/icons/weightlifting.svg"

function SecondaryNavigation() {
    return (
        <div className={classes['secondary-navigation']}>
            <nav>
                <ul>
                    <li className={classes['secondary-navigation__item']}>
                        <img src={meditation} alt="" />
                    </li>
                    <li className={classes['secondary-navigation__item']}>
                        <img src={swimming} alt="" />
                    </li>
                    <li className={classes['secondary-navigation__item']}>
                        <img src={cycling} alt="" />
                    </li>
                    <li className={classes['secondary-navigation__item']}>
                        <img src={weightlifting} alt="" />
                    </li>
                </ul>
            </nav>
            <p>Copiryght, SportSee 2020</p>

        </div>
    )
}

export default SecondaryNavigation