import { combineReducers } from 'redux'
import dashboardReducer from '../pages/DashboardApp/reducer'
import diagramaDeCajaReducer from '../pages/DiagramaDeCaja/reducer'
import desviacionReducer from '../pages/Desviacion/reducer'
import promedioReducer from '../pages/Promedio/reducer'
import desempenoReducer from '../pages/Desempenos/reducer'
import prediccionReducer from '../pages/Prediccion/reducer'
import probabilidadReducer from '../pages/Probabilidad/reducer'
import registrosReducer from '../pages/Registros/reducer'

const rootReducer = combineReducers({
    dashboardReducer,
    diagramaDeCajaReducer,
    desviacionReducer,
    promedioReducer,
    prediccionReducer,
    probabilidadReducer,
    registrosReducer,
    desempenoReducer
})
export default rootReducer;