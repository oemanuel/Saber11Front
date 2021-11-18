import { createSelector } from 'reselect'
import { initialState } from './reducer'

const selectDashboardDomain = state => state.desempenoReducer || initialState;

const makeSelectdesempenosPuntajes = () =>
    createSelector(
        selectDashboardDomain,
        substate => substate.desempenosPuntajes
    )

const makeSelectdepartamento = () =>
    createSelector(
        selectDashboardDomain,
        substate => substate.departamentoD
    )
const makeSelectmunicipio = () =>
    createSelector(
        selectDashboardDomain,
        substate => substate.municipioD
    )
const makeSelectcolegio = () =>
    createSelector(
        selectDashboardDomain,
        substate => substate.colegio
    )
const makeSelectcolegiosData = () =>
    createSelector(
        selectDashboardDomain,
        substate => substate.colegiosData
    )
const makeSelectmunicipiosData = () =>
    createSelector(
        selectDashboardDomain,
        substate => substate.municipiosData
    )
const makeSelecttotalEstudiantes = () =>
    createSelector(
        selectDashboardDomain,
        substate => substate.totalEstudiantes
    )

const makeSelectcalendario = () =>
    createSelector(
        selectDashboardDomain,
        substate => substate.calendario
    )

const makeSelectpuntaje = () =>
    createSelector(
        selectDashboardDomain,
        substate => substate.puntaje
    )
export {
    makeSelectdesempenosPuntajes,
    makeSelecttotalEstudiantes,
    makeSelectdepartamento,
    makeSelectmunicipio,
    makeSelectmunicipiosData,
    makeSelectcalendario,
    makeSelectpuntaje,
    makeSelectcolegio,
    makeSelectcolegiosData,
}