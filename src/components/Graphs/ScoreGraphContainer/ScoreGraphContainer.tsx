import ScoreGraph from '../ScoreGraph/ScoreGraph';
import classes from './ScoreGraphContainer.module.css';

function ScoreGraphContainer() {
    return (
        <div className={classes['graph-container']}>
            <ScoreGraph />
        </div>
    );
}

export default ScoreGraphContainer;
