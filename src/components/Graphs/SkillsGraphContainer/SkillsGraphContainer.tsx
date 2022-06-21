import SkillsGraph from '../SkillsGraph/SkillsGraph';
import classes from './SkillsGraphContainer.module.css';

function SkillsGraphContainer() {
    return (
        <div className={classes['graph-container']}>
            <SkillsGraph />
        </div>
    );
}

export default SkillsGraphContainer;
