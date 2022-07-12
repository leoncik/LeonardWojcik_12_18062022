// CSS
import classes from './LoadingSpinner.module.css';

type LoadingSpinnerProps = {
    spinnerColor: string;
};

function LoadingSpinner({ spinnerColor }: LoadingSpinnerProps) {
    return (
        <div className={classes['loading-spinner']}>
            <div
                style={{
                    borderColor: `${spinnerColor} transparent ${spinnerColor} transparent`,
                }}
                className={classes['spinner']}
            ></div>
        </div>
    );
}

export default LoadingSpinner;
