// CSS
import classes from './WelcomingInfo.module.css';

type WelcomingInfoProps = {
    firstName: string;
    loading: boolean;
    error: string;
};

function WelcomingInfo({ firstName, loading, error }: WelcomingInfoProps) {
    if (loading) return <p>Chargement…</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="welcoming-info">
            <h1 data-testid="greeting">
                Bonjour{' '}
                <span className={classes['user-name']}>{firstName}</span>
            </h1>
            {/* Custom conditional messaged based on previous performances */}
            <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
    );
}

export default WelcomingInfo;
