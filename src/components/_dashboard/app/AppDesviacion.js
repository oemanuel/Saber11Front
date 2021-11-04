import React from 'react';
import createPlotlyComponent from 'react-plotly.js/factory';
const Plotly = window.Plotly;
const Plot = createPlotlyComponent(Plotly);

export default function Chart({ data = [] }) {
    let aux = [...data]
    const años = aux?.pop()
    return (
        <>
            <Plot
                data={[
                    ...aux.map((item) => {
                        return {
                            y: Object.values(item)[0],
                            x: años[0]?.ejex.map((item => {
                                return "Periodo " + (item)
                            })),
                            name: Object.keys(item)[0],
                            mode: 'markers',
                            marker: {
                                size: 12
                            },
                        }
                    }),
                    {
                        y: años === undefined ? [] : años[1]?.ejey,
                        x: años === undefined ? [] : años[0]?.ejex.map((item => {
                            return "Periodo " + (item)
                        })),
                        name:'Desviación general del país',
                        mode: 'lines+markers',
                        marker: {
                            size: 12
                        },

                    }
                ]}
                layout={{
                    width: 900, height: 600, title: 'Desviaciones estandar',
                    showlegend: true,
                }}
            />
        </>
    );
}