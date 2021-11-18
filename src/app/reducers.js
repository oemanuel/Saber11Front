import { combineReducers } from 'redux'
import dashboardReducer from '../pages/DashboardApp/reducer'
import diagramaDeCajaReducer from '../pages/DiagramaDeCaja/reducer'
import desviacionReducer from '../pages/Desviacion/reducer'
import promedioReducer from '../pages/Promedio/reducer'
import prediccionReducer from '../pages/Prediccion/reducer'
import registrosReducer from '../pages/Registros/reducer'

const rootReducer = combineReducers({
    dashboardReducer,
    diagramaDeCajaReducer,
    desviacionReducer,
    promedioReducer,
    prediccionReducer,
    registrosReducer
})
export default rootReducer;