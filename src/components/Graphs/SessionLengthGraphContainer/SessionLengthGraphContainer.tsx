import SessionLengthGraph from '../SessionLengthGraph/SessionLengthGraph';
import classes from './SessionLengthGraphContainer.module.css';

function SessionLengthGraphContainer() {
    return (
        <div className={classes['graph-container']}>
            <SessionLengthGraph />
        </div>
    );
}

export default SessionLengthGraphContainer;
