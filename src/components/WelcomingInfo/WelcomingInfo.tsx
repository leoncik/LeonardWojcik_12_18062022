import classes from './WelcomingInfo.module.css';

function WelcomingInfo() {
    return (
        <div className="welcoming-info">
            <h1>
                Bonjour <span className={classes['user-name']}>Thomas</span>{' '}
            </h1>
            {/* Custom conditional messaged based on previous performances */}
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
    );
}

export default WelcomingInfo;
