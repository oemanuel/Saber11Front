import React from 'react';
import createPlotlyComponent from 'react-plotly.js/factory';
const Plotly = window.Plotly;
const Plot = createPlotlyComponent(Plotly);

export default function Chart({ data = [], variable, puntaje }) {
    console.log(data)
    if ( data.length > 2) {
        let aux = [...data]
        const ejes = aux?.pop()
        return (
            <>
                <Plot
                    data={[
                        ...aux.map((item) => {
                            return {
                                y: Object.values(item)[0],
                                x: ejes[0]?.ejex.map((item => {
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
                            y: ejes === undefined ? [] : ejes[1]?.ejey,
                            x: ejes === undefined ? [] : ejes[0]?.ejex.map((item => {
                                return "Periodo " + (item)
                            })),
                            name: 'Promedio general del país',
                            mode: 'lines+markers',
                            marker: {
                                size: 12
                            },

                        }
                    ]}
                    layout={{
                        width: 900, height: 600, title: `Promedio ${puntaje.replace(/_/gi, ' ')} según ${variable.replace(/_/gi, ' ')}`,
                        showlegend: true,
                    }}
                />
            </>
        );
    } else {
        return (
            <>
                <Plot
                    data={[
                        {
                            y: data === undefined ? [] : data[1]?.ejey,
                            x: data === undefined ? [] : data[0]?.ejex.map((item => {
                                return "Periodo " + (item)
                            })),
                            name: 'Promedio general del país',
                            mode: 'lines+markers',
                            marker: {
                                size: 12
                            }
                        }

                    ]}
                    layout={{
                        width: 900, height: 600, title: `Promedio ${puntaje.replace(/_/gi, ' ')}`,
                        showlegend: true,
                    }}
                />
            </>
        )
    }
}