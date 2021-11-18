import React from 'react';
import createPlotlyComponent from 'react-plotly.js/factory';
import {
    Table, TableBody, TableHead, TableCell, TableContainer, TableRow, Paper
} from '@material-ui/core';
const Plotly = window.Plotly;
const Plot = createPlotlyComponent(Plotly);

export default function Chart({ data, puntaje }) {
    const nivelesNormales = [1, 2, 3, 4]
    const nivelesIngles = ['A-', 'A1', 'A2', 'B1', 'B+']
    var niveles = []
    const rows = [
        { nivel: "Nivel de desempeño 1", rango: "0-40" },
        { nivel: "Nivel de desempeño 3", rango: "41-55" },
        { nivel: "Nivel de desempeño 2", rango: "56-70" },
        { nivel: "Nivel de desempeño 4", rango: "71-100" },
    ];
    puntaje === "PUNT_INGLES" ? niveles = nivelesIngles : niveles = nivelesNormales

    const obtenerDesemepenos = (nivel) => {
        let desempenosNivel = []
        for (let desemp in data.desempenos) {
            desempenosNivel.push(data.desempenos[desemp][nivel])
        }
        return desempenosNivel
    }

    const obtenerPromedios = () => {
        let promedios = []
        for (let prom in data.promedios) {
            promedios.push(data.promedios[prom])
        }
        return promedios
    }

    const graficarBarDesempeno = (periodos, nivel) => {
        const yy = obtenerDesemepenos(nivel)
        return {
            x: periodos.map(x => 'Periodo ' + x),
            y: yy,
            text: yy.map(y => y + '%'),
            textposition: 'auto',
            name: 'Nivel de desempeño ' + nivel,
            type: 'bar'
        };
    }

    const graficarTotalEstudiantes = (periodos, totalEstudiantes) => {
        return {
            x: periodos.map(x => 'Periodo ' + x),
            y: totalEstudiantes,
            type: 'scatter',
            name: 'Número de estudiantes'
        };
    }

    const graficarPromedios = (periodos) => {
        return [
            {
                x: periodos.map(x => 'Periodo ' + x),
                y: obtenerPromedios(),
                type: 'scatter',
                name: 'Promedios'
            }
        ];
    }


    return (
        <>
            <Plot
                data={niveles.map(x => graficarBarDesempeno(data.periodos, x))}
                layout={{
                    barmode: 'stack',
                    width: 900, height: 600, title: 'Porcentaje de estudiantes según nivel de desempeño y ' + puntaje,
                    showlegend: true,

                }}
            />
            <TableContainer component={Paper} sx={{ mx: '200px' }}>
                <Table sx={{ maxWidth: 350 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Nivel de desempeño</TableCell>
                            <TableCell align="right">Rango puntaje</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.nivel}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.nivel}
                                </TableCell>
                                <TableCell align="right">{row.rango}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Plot
                data={graficarPromedios(data.periodos)}
                layout={{
                    barmode: 'bar',
                    width: 900, height: 600, title: 'Promedio por periodo y por puntaje ' + puntaje,
                    showlegend: true,

                }}
            />
            <Plot
                data={[graficarTotalEstudiantes(data.periodos, data.totalEstudiantes)]}
                layout={{
                    barmode: 'bar',
                    width: 900, height: 600, title: 'Número de estudiantes por periodo',
                    showlegend: true,

                }}
            />
        </>
    );
}