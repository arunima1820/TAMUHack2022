import React from "react";
import { ResponsiveLine,Line } from '@nivo/line'

export default function Suggestions(props:{data:any}) {
    const test = [{
        ticker: "AAPL",
        name: "Apple",
        price: "178.28",
        environmentalImpact: "A",
        socialImpact: "A",
        animalConservation: "B",
        data:[[1,2],[2,2],[3,4],[4,6],[5,7],[6,3],[7,4],[8,4],[9,3],[10,5],[11,6],[12,8]]
    }]
    const format =[{
        id:"test",
        data:test[0].data.map(d=>{
            return {
                x:d[0],
                y:d[1]
            }
        }),
    }]
    return (
        <Line
        data={format}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        width={1000}
        height={500}
        curve="natural"
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom = {null}
        axisLeft = {null}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        useMesh={true}
        enablePoints={false}
        enableGridX={false}
        enableGridY={false}
        
    />
    )
}