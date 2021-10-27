import { createSelector } from 'reselect'
import { initialState } from './reducer'

const selectDashboardDomain = state => state.dashboardReducer || initialState;

const makeSelectTopColegios = () =>
    createSelector(
        selectDashboardDomain,
        substate => substate.topColegios
    )
const makeSelectmejoresColegiosX = () =>
    createSelector(
        selectDashboardDomain,
        substate => substate.mejoresColegiosX
    )
const makeSelectmejoresColegiosY = () =>
    createSelector(
        selectDashboardDomain,
        substate => substate.mejoresColegiosY
    )
const makeSelectperiodo = () =>
    createSelector(
        selectDashboardDomain,
        substate => substate.periodo
    )
const makeSelecttopNumero = () =>
    createSelector(
        selectDashboardDomain,
        substate => substate.topNumero
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
const makeSelectnumeroEstudiantes = () =>
    createSelector(
        selectDashboardDomain,
        substate => substate.numeroEstudiantes
    )


export {
    makeSelectTopColegios,
    makeSelectmejoresColegiosX,
    makeSelectmejoresColegiosY,
    makeSelectperiodo,
    makeSelecttopNumero,
    makeSelectdepartamento,
    makeSelectmunicipio,
    makeSelectmunicipiosData,
    makeSelectnumeroEstudiantes
}