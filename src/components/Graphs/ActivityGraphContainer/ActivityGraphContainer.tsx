import ActivityGraph from '../ActivityGraph/ActivityGraph';
import classes from './ActivityGraphContainer.module.css';

function ActivityGraphContainer() {
    return (
        <div className={classes['graph-container']}>
            <ActivityGraph />
        </div>
    );
}

export default ActivityGraphContainer;
