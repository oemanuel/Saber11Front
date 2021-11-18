import { takeLatest, call, put, select } from 'redux-saga/effects';
import axios from 'axios'
import { makeSelectperiodo, makeSelectdepartamento, makeSelectmunicipio, makeSelectColegio, makeSelectInicio } from './selectors'
import { OBTENER_COLEGIOS, OBTENER_MUNICIPIOS, OBTENER_REGISTROS, CHANGE_PAGE } from './constants'
import { obtenerColegiosSuccess, obtenerMunicipiosSuccess, obtenerRegistrosSuccess } from './actions'

const baseUrl = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_BASE_URL : process.env.REACT_APP_BASE_URL_DEV

function obtenerRegistros(consulta) {
    return axios
        .get(baseUrl + '/analisis-colegio/registros', { params: consulta })
        .then(response => ({ response }))
        .catch(error => ({ error }));
}
function* apiRegistrosSaga() {
    const auxDepartamento = yield select(makeSelectdepartamento())
    const auxMunicipio = yield select(makeSelectmunicipio())

    if (auxDepartamento !== '') {
        const consulta = {
            departamento: auxDepartamento === '' ? null : auxDepartamento,
            municipio: auxMunicipio === '' ? null : auxMunicipio,
            periodo: yield select(makeSelectperiodo()),
            colegio: yield select(makeSelectColegio()),
            inicio: yield select(makeSelectInicio())
        }
        const { response, error } = yield call(obtenerRegistros, consulta)
        if (response) yield put(obtenerRegistrosSuccess(response.data))
        else console.log(error)
    }
}
function obtenerColegios(consulta) {
    return axios
        .get(baseUrl + '/buscar-colegios', { params: consulta })
        .then(response => ({ response }))
        .catch(error => ({ error }));
}
function* apiColegiosSaga() {
    const auxDepartamento = yield select(makeSelectdepartamento())
    const auxMunicipio = yield select(makeSelectmunicipio())

    if (auxDepartamento !== '') {
        const consulta = {
            departamento: auxDepartamento === '' ? null : auxDepartamento,
            municipio: auxMunicipio === '' ? null : auxMunicipio,
            periodo: yield select(makeSelectperiodo()),
        }
        const { response, error } = yield call(obtenerColegios, consulta)
        if (response) yield put(obtenerColegiosSuccess(response.data))
        else console.log(error)
    }
}

function obtenerMunucipios(periodo) {
    return axios
        .get(baseUrl + '/datos-generales/departamentos-municipios-cole', { params: { periodo: periodo } })
        .then(response => ({ response }))
        .catch(error => ({ error }));
}
function* apimunicipiosSaga() {
    const { response, error } = yield call(obtenerMunucipios, yield select(makeSelectperiodo()))
    if (response) yield put(obtenerMunicipiosSuccess(response.data))
    else console.log(error)
}


export const registrosSagas = [
    takeLatest(OBTENER_COLEGIOS, apiColegiosSaga),
    takeLatest(OBTENER_MUNICIPIOS, apimunicipiosSaga),
    takeLatest(OBTENER_REGISTROS, apiRegistrosSaga),
    takeLatest(CHANGE_PAGE, apiRegistrosSaga),
]