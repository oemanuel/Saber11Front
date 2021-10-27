import { combineReducers } from 'redux'
import dashboardReducer from '../pages/DashboardApp/reducer'
import diagramaDeCajaReducer from '../pages/DiagramaDeCaja/reducer'

const rootReducer = combineReducers({
    dashboardReducer,
    diagramaDeCajaReducer
})
export default rootReducer;