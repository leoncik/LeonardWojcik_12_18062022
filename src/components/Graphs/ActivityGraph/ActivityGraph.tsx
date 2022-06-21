import { useRef, useEffect } from 'react';
import { select } from 'd3-selection';
import { MOCKED_DATA } from '../../../helpers/MOCKED_DATA';

function ActivityGraph() {
    // ! Why console.log is running twice and "g" element also displayed twice ?
    console.log(MOCKED_DATA[0].activityInfo.dailyActivity[0].calories);
    // console.log(MOCKED_DATA[0].activityInfo.dailyActivity);

    const graphRef = useRef<SVGSVGElement | null>(null);
    const testRef = useRef<SVGSVGElement | null>(null);

    const svgHeight = 200;

    // ! Type problem
    // const group = graphRef.current.append('g')

    useEffect(() => {
        // Calories bar
        // select(graphRef.current)
        // .selectAll('rect')
        // .data(MOCKED_DATA[0].activityInfo.dailyActivity)
        // .enter()
        // .append('rect')
        // .attr('width', 45)
        // .attr('height', (d) => d.calories )
        // .attr("x", (d, i) => i * 60)
        // .attr("y", (d) => 500 - d.calories)

        // Calories bar with g
        const graph = select(graphRef.current);
        const group = graph.append('g');
        const bars = group
            .selectAll('rect')
            .data(MOCKED_DATA[0].activityInfo.dailyActivity)
            .enter()
            .append('rect')
            .attr('x', (d, i) => i * 60)
            .attr('y', (d) => svgHeight - d.calories)
            .attr('width', 40)
            .attr('height', (d) => d.calories)
            .attr('fill', '#ff0000')
            .attr('stroke', '#000000')
            .attr('stroke-width', 1)
            .attr('fill-opacity', 0.5)
            .attr('stroke-opacity', 0.5);

        // Weight bar
        // ! Can't do selectAll again
        // select(graphRef.current)
        // .selectAll('rect')
        // .data(MOCKED_DATA[0].activityInfo.dailyActivity)
        // .enter()
        // .append('rect')
        // .attr('width', 45)
        // .attr('height', (d) => d.weight )
        // .attr("x", (d, i) => i * 60)
        // .attr("y", (d) => 500 - d.weight)

        // Day element
        select(graphRef.current)
            .selectAll('text')
            .data(MOCKED_DATA[0].activityInfo.dailyActivity)
            .enter()
            .append('text')
            .text((d) => `${d.day}`)
            .attr('x', (d, i) => i * 60)
            .attr('y', (d) => svgHeight - d.calories)
            .style('fill', 'black');
    }, []);

    // Test
    // useEffect(() => {
    //     const test = d3.select(testRef.current)
    //     test.selectAll("circle")
    //       .data(MOCKED_DATA[0].activityInfo.dailyActivity)
    //       .join("circle")
    //         .attr("cx", d => d[0])
    //         .attr("cy", d => d[1])
    //         .attr("r",  3)
    //   }, [MOCKED_DATA[0].activityInfo.dailyActivity])

    return (
        <div>
            <svg ref={graphRef} width="700" height={svgHeight}></svg>
        </div>
    );
}

export default ActivityGraph;
