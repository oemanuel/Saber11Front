import React from 'react';
import createPlotlyComponent from 'react-plotly.js/factory';
const Plotly = window.Plotly;
const Plot = createPlotlyComponent(Plotly);

export default function Chart({ data }) {

    var puntajes = []
    var numEstudiantes = []
    for (let i in data) {
        puntajes.push(i)
        numEstudiantes.push(data[i])
    }


    var trace1 = {
        x: puntajes,
        y: numEstudiantes,
        type: 'bar',
        name: 'Número de estudiantes',
        marker: {
            color: 'rgb(49,130,189)',
            opacity: 0.7,
        }
    };


    return (
        <>
            <Plot
                data={[trace1]}
                layout={{
                    barmode: 'stack',
                    width: 900, height: 600, title: 'Distribución de los puntajes obtenidos',
                    showlegend: true,

                }}
            />
        </>
    );
}