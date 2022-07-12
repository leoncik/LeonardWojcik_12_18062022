// CSS
import classes from './SecondaryNavigation.module.css';

// Assets
import meditation from '../../assets/icons/svg-format/meditation.svg';
import swimming from '../../assets/icons/svg-format/swimming.svg';
import cycling from '../../assets/icons/svg-format/cycling.svg';
import weightlifting from '../../assets/icons/svg-format/weightlifting.svg';

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
            <p>Copyright, SportSee 2020</p>
        </div>
    );
}

export default SecondaryNavigation;
