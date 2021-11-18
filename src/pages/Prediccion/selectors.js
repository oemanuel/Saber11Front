import { createSelector } from 'reselect'
import { initialState } from './reducer'

const selectDashboardDomain = state => state.prediccionReducer || initialState;

const makeSelectState = () =>
    createSelector(
        selectDashboardDomain,
        substate => substate
    )

export {
    makeSelectState,
}