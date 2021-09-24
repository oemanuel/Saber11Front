import { createSelector } from 'reselect'
import { initialState } from './reducer'

const selectDashboardDomain = state => state.dashboardReducer || initialState;

const makeSelectTopColegios = () =>
    createSelector(
        selectDashboardDomain,
        substate => substate.topColegios
    )

export {
    makeSelectTopColegios
}