import classes from './WelcomingInfo.module.css';

type WelcomingInfoProps = {
    firstName: string;
    loading: boolean;
};

function WelcomingInfo({ firstName, loading }: WelcomingInfoProps) {
    return loading ? (
        <p>Chargement…</p>
    ) : (
        <div className="welcoming-info">
            <h1>
                Bonjour{' '}
                <span className={classes['user-name']}>{firstName}</span>
            </h1>
            {/* Custom conditional messaged based on previous performances */}
            <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
    );
}

export default WelcomingInfo;
