import { createSelector } from 'reselect'
import { initialState } from './reducer'

const selectDashboardDomain = state => state.diagramaDeCajaReducer || initialState;

const makeSelectData = () =>
    createSelector(
        selectDashboardDomain,
        substate => substate.data
    )

const makeSelectperiodo = () =>
    createSelector(
        selectDashboardDomain,
        substate => substate.periodo
    )
const makeSelectVariable = () =>
    createSelector(
        selectDashboardDomain,
        substate => substate.variable
    )
const makeSelectPuntaje = () =>
    createSelector(
        selectDashboardDomain,
        substate => substate.puntaje
    )

export {
    makeSelectperiodo,
    makeSelectData,
    makeSelectVariable,
    makeSelectPuntaje
}