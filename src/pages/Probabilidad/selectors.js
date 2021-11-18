import { createSelector } from 'reselect'
import { initialState } from './reducer'

const selectDashboardDomain = state => state.probabilidadReducer || initialState;

const makeSelectperiodo = () =>
    createSelector(
        selectDashboardDomain,
        substate => substate.periodo
    )
const makeSelectlimitSup = () =>
    createSelector(
        selectDashboardDomain,
        substate => substate.limitSup
    )
const makeSelectdepartamento = () =>
    createSelector(
        selectDashboardDomain,
        substate => substate.departamento
    )
const makeSelectmunicipio = () =>
    createSelector(
        selectDashboardDomain,
        substate => substate.municipio
    )
const makeSelectmunicipiosData = () =>
    createSelector(
        selectDashboardDomain,
        substate => substate.municipiosData
    )
const makeSelectlimitInf = () =>
    createSelector(
        selectDashboardDomain,
        substate => substate.limitInf
    )
const makeSelectPuntaje = () =>
    createSelector(
        selectDashboardDomain,
        substate => substate.puntaje
    )
const makeSelectProbabilidad = () =>
    createSelector(
        selectDashboardDomain,
        substate => substate.probabilidad
    )

export {
    makeSelectperiodo,
    makeSelectlimitSup,
    makeSelectdepartamento,
    makeSelectmunicipio,
    makeSelectmunicipiosData,
    makeSelectlimitInf,
    makeSelectPuntaje,
    makeSelectProbabilidad
}