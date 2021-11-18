import { createSelector } from 'reselect'
import { initialState } from './reducer'

const selectDashboardDomain = state => state.registrosReducer || initialState;


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

const makeSelectColegio = () =>
    createSelector(
        selectDashboardDomain,
        substate => substate.colegio
    )
const makeSelectListaColegios = () =>
    createSelector(
        selectDashboardDomain,
        substate => substate.listaColegios
    )
const makeSelectRegistros = () =>
    createSelector(
        selectDashboardDomain,
        substate => substate.registros
    )
const makeSelectInicio = () =>
    createSelector(
        selectDashboardDomain,
        substate => substate.inicio
    )


export {
    makeSelectperiodo,
    makeSelectdepartamento,
    makeSelectmunicipio,
    makeSelectmunicipiosData,
    makeSelectColegio,
    makeSelectListaColegios,
    makeSelectRegistros,
    makeSelectInicio
}