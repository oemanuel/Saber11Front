import React from 'react';
import createPlotlyComponent from 'react-plotly.js/factory';
const Plotly = window.Plotly;
const Plot = createPlotlyComponent(Plotly);

export default function Chart({ data }) {
    const aux = data?.slice(1, data.length)
    return (
        <>
            <Plot
                data={
                    aux?.map((item) => {
                        return {
                            y: item.x,
                            name:item.categoria,
                            boxpoints: 'all',
                            jitter: 0.05,
                            pointpos: -1.8,
                            type: 'box'
                        }
                    })
                }
                layout={{
                    width: 900, height: 600, title: 'Diagrama de cajas',
                    showlegend: true,
                }}
            />
        </>
    );
}