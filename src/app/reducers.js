import { combineReducers } from 'redux'
import dashboardReducer from '../pages/DashboardApp/reducer'
import diagramaDeCajaReducer from '../pages/DiagramaDeCaja/reducer'
import desviacionReducer from '../pages/Desviacion/reducer'
import promedioReducer from '../pages/Promedio/reducer'
import desempenoReducer from '../pages/Desempenos/reducer'
import prediccionReducer from '../pages/Prediccion/reducer'
import puntajesEstudiantesReducer from 'src/pages/PuntajesEstudiantes/reducer'

const rootReducer = combineReducers({
    dashboardReducer,
    diagramaDeCajaReducer,
    desviacionReducer,
    promedioReducer,
    desempenoReducer,
    prediccionReducer,
    puntajesEstudiantesReducer
})
export default rootReducer;