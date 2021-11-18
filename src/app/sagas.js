import { all, spawn } from 'redux-saga/effects'

import { dashboardSagas } from '../pages/DashboardApp/saga'
import { diagramaDeCajaSagas } from '../pages/DiagramaDeCaja/saga'
import { desviacionSagas } from '../pages/Desviacion/saga'
import { promedioSagas } from '../pages/Promedio/saga'
import { desempenoSagas } from '../pages/Desempenos/saga'
import { prediccionSagas } from '../pages/Prediccion/saga'
import { puntajesEstudiantesSagas } from 'src/pages/PuntajesEstudiantes/saga'

const superSagas = [...dashboardSagas, ...diagramaDeCajaSagas, ...desviacionSagas,
...promedioSagas, ...prediccionSagas, ...desempenoSagas, ...puntajesEstudiantesSagas]
export default function* rootSaga() {
    yield all(
        superSagas.map(saga =>
            spawn(function* () {
                while (true) {
                    try {
                        yield saga
                        break
                    } catch (e) {
                        console.log(e)
                    }
                }
            })),
    );
}