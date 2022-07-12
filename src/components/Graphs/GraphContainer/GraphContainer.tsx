// CSS
import classes from './GraphContainer.module.css';

type GraphContainerProps = {
    GraphElement: React.ReactNode;
    cssClasses: string;
};

function GraphContainer({ GraphElement, cssClasses }: GraphContainerProps) {
    return (
        <div
            className={classes[`${cssClasses}`]}
            style={{
                position: 'relative',
            }}
        >
            {/* Add wrapper in position absolute in order to make the resizing of the graph more performant. Read more on this issue : https://github.com/recharts/recharts/issues/1767 and this one : https://github.com/recharts/recharts/issues/172 */}
            <div
                style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    bottom: 0,
                    top: 0,
                }}
            >
                {GraphElement}
            </div>
        </div>
    );
}

export default GraphContainer;
