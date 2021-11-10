import { combineReducers } from 'redux'
import dashboardReducer from '../pages/DashboardApp/reducer'
import diagramaDeCajaReducer from '../pages/DiagramaDeCaja/reducer'
import desviacionReducer from '../pages/Desviacion/reducer'
import promedioReducer from '../pages/Promedio/reducer'

const rootReducer = combineReducers({
    dashboardReducer,
    diagramaDeCajaReducer,
    desviacionReducer,
    promedioReducer,
})
export default rootReducer;