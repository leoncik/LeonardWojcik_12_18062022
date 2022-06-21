import { useRef, useEffect } from 'react';
import { select } from 'd3';
import { MOCKED_DATA } from '../../../helpers/MOCKED_DATA';

function ActivityGraph() {
    // ! Why console.log is running twice and "g" element also displayed twice ?
    console.log(MOCKED_DATA[0].activityInfo.dailyActivity[0].calories);
    // console.log(MOCKED_DATA[0].activityInfo.dailyActivity);

    const graphRef = useRef<SVGSVGElement | null>(null);
    const testRef = useRef<SVGSVGElement | null>(null);

    const svgHeight = 200;
    const spacing = 100;

    // ! Type problem
    // const group = graphRef.current.append('g')

    useEffect(() => {
        const graph = select(graphRef.current);
        // const group = graph.append('g');

        // Calories bar
        graph
            .append('g')
            .selectAll('rect')
            .data(MOCKED_DATA[0].activityInfo.dailyActivity)
            .join('rect')
            .attr('x', (d, i) => i * spacing)
            .attr('y', (d) => svgHeight - d.calories)
            .attr('width', 40)
            .attr('height', (d) => d.calories)
            .attr('fill', '#ff0000')
            .attr('stroke', '#000000')
            .attr('stroke-width', 1)
            .attr('rx', 5);
        // .attr('fill-opacity', 0.5)
        // .attr('stroke-opacity', 0.5)

        // Weight bar
        graph
            .append('g')
            .selectAll('rect')
            .data(MOCKED_DATA[0].activityInfo.dailyActivity)
            .join('rect')
            .attr('x', (d, i) => i * spacing)
            .attr('y', (d) => svgHeight - d.weight)
            .attr('width', 40)
            .attr('height', (d) => d.weight)
            .attr('transform', 'translate(20, 0)')
            .attr('fill', 'blue')
            .attr('stroke', 'blue')
            .attr('stroke-width', 1)
            .attr('rx', 5);
        // .attr('fill-opacity', 0.5)
        // .attr('stroke-opacity', 0.5)

        // Day element
        graph
            .append('g')
            .selectAll('text')
            .data(MOCKED_DATA[0].activityInfo.dailyActivity)
            .join('text')
            .text((d) => `${d.day}`)
            .attr('x', (d, i) => i * spacing)
            .attr('y', (d) => svgHeight - d.calories)
            .style('fill', 'black');
    }, []);

    return (
        <div>
            <svg ref={graphRef} width="700" height={svgHeight}></svg>
        </div>
    );
}

export default ActivityGraph;
