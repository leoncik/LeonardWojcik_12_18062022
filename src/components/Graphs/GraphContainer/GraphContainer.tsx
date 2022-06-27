import classes from './GraphContainer.module.css';

type GraphContainerProps = {
    GraphElement: React.ReactNode;
    cssClasses: string;
};

function GraphContainer({ GraphElement, cssClasses }: GraphContainerProps) {
    return <div className={classes[`${cssClasses}`]}>{GraphElement}</div>;
}

export default GraphContainer;
