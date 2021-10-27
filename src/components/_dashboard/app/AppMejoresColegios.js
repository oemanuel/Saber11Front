import React from 'react';
import createPlotlyComponent from 'react-plotly.js/factory';
const Plotly = window.Plotly;
const Plot = createPlotlyComponent(Plotly);

export default function Chart({ x, y }) {
    const aux = x.map((element, index) => {
        return "Top #" + (index + 1);
    })
    return (
        <>
            <Plot
                data={[

                    {
                        x: x,
                        y: aux.reverse(),
                        type: 'bar',
                        orientation: 'h',
                        text: y.map(String),
                        textposition: 'auto',
                        name: 'Promedio de los puntajes globales',
                        marker: {
                            color: '#00ab55',
                            opacity: 0.6,
                            line: {
                                color: '#00ab55',
                                width: 1.5
                            }
                        }
                    },
                ]}
                layout={{
                    width: 900, height: 500, title: 'Top colegios de Colombia',
                    showlegend: true,
                }}
            />
        </>
    );
}