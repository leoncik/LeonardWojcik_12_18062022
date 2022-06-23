import { useRef, useEffect } from 'react';
import { select, scaleLinear } from 'd3';
import { MOCKED_DATA } from '../../../helpers/MOCKED_DATA';

function ActivityGraph() {
    // Get containers
    const graphRef = useRef<SVGSVGElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);

    // Set dimensions
    const graphHeight = 200;
    const graphWidth = 800;
    const spacing = 100;

    // Set scales
    const yScaleCalories = scaleLinear().domain([0, 698]).range([0, 150]);
    const yScaleWeight = scaleLinear().domain([30, 92]).range([30, 100]);

    useEffect(() => {
        // Create tooltip
        const tooltip = select(containerRef.current)
            .append('div')
            .attr('class', 'graph-tooltip')
            .style('position', 'absolute')
            .style('visibility', 'hidden')
            .style('padding', '15px')
            .style('background', 'rgba(230, 0, 0, 1)')
            .style('color', 'white');

        // Calories bar
        const graph = select(graphRef.current);
        graph
            .append('g')
            .selectAll('rect')
            .data(MOCKED_DATA[0].activityInfo.dailyActivity)
            .join('rect')
            .attr('x', (d, i) => i * spacing)
            .attr('y', (d) => graphHeight - yScaleCalories(d.calories))
            .attr('width', 40)
            .attr('height', (d) => yScaleCalories(d.calories))
            .attr('fill', '#E60000')
            .attr('rx', 5);

        // Weight bar
        graph
            .append('g')
            .selectAll('rect')
            .data(MOCKED_DATA[0].activityInfo.dailyActivity)
            .join('rect')
            .attr('x', (d, i) => i * spacing)
            .attr('y', (d) => graphHeight - yScaleWeight(d.weight))
            .attr('width', 40)
            .attr('height', (d) => yScaleWeight(d.weight))
            .attr('transform', 'translate(20, 0)')
            .attr('fill', '#282D30')
            .attr('rx', 5)
            // Add tooltip event
            .on('mouseover', (d, i) => {
                // d should directly give access to data. Needs research.
                // console.log(d);
                // console.log(d.explicitOriginalTarget.__data__.calories);
                // console.log(d.explicitOriginalTarget.__data__.weight);
                tooltip
                    .html(
                        `<p>${d.explicitOriginalTarget.__data__.weight}kg</p><p>${d.explicitOriginalTarget.__data__.calories}Kcal</p>`
                    )
                    .style('visibility', 'visible');
            })
            .on('mousemove', (e) => {
                tooltip
                    .style('top', e.pageY - 10 + 'px')
                    .style('left', e.pageX + 10 + 'px');
            })
            .on('mouseout', () => {
                tooltip.html(``).style('visibility', 'hidden');
            });

        // Day element
        graph
            .append('g')
            .selectAll('text')
            .data(MOCKED_DATA[0].activityInfo.dailyActivity)
            .join('text')
            .text((d) => `${d.day}`)
            .attr('x', (d, i) => i * spacing)
            .attr('y', (d) => graphHeight - yScaleCalories(d.calories))
            .style('fill', 'black');
    }, []);

    return (
        <div ref={containerRef}>
            {/* Use preserveAspectRatio and viewBox to make the graph more responsive  */}
            <svg
                ref={graphRef}
                preserveAspectRatio="xMinYMin meet"
                viewBox={`0 0 ${graphWidth} ${graphHeight}`}
            ></svg>
        </div>
    );
}

export default ActivityGraph;
