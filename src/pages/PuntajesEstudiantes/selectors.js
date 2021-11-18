import { createSelector } from 'reselect'
import { initialState } from './reducer'

const selectDashboardDomain = state => state.puntajesEstudiantesReducer || initialState;

const makeSelectperiodo = () =>
    createSelector(
        selectDashboardDomain,
        substate => substate.periodo
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
const makeSelectpuntajesEstudiantes = () =>
    createSelector(
        selectDashboardDomain,
        substate => substate.puntajesEstudiantesData
    )
const makeSelectPuntaje = () =>
    createSelector(
        selectDashboardDomain,
        substate => substate.puntaje
    )


export {
    makeSelectperiodo,
    makeSelectdepartamento,
    makeSelectmunicipio,
    makeSelectmunicipiosData,
    makeSelectpuntajesEstudiantes,
    makeSelectPuntaje
}