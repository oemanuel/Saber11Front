import { takeLatest, call, put, select } from 'redux-saga/effects';
import axios from 'axios'
import { makeSelectperiodo, makeSelectPuntaje, makeSelectdepartamento, makeSelectmunicipio, makeSelectlimitSup, makeSelectlimitInf } from './selectors'
import { OBTENER_PROBABILIDAD, OBTENER_MUNICIPIOS, OBTENER_PUNTAJES_ESTUDIANTES } from './constants'
import { obtenerProbabilidadSuccess, obtenerMunicipiosSuccess, obtenerPuntajesEstudiantesSuccess } from './actions'

const baseUrl = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_BASE_URL : process.env.REACT_APP_BASE_URL_DEV

function obtenerProbabilidad(consulta) {
    return axios
        .get(baseUrl + '/datos-generales/probabilidad-puntaje', { params: consulta })
        .then(response => ({ response }))
        .catch(error => ({ error }));
}
function* probabilidadSaga() {
    const auxMunicipio = yield select(makeSelectmunicipio())
    const auxDepartamento = yield select(makeSelectdepartamento())
    const consulta = {
        periodo: yield select(makeSelectperiodo()),
        limite_inf: yield select(makeSelectlimitInf()),
        limite_sup: yield select(makeSelectlimitSup()),
        puntaje: yield select(makeSelectPuntaje()),
        departamento: auxDepartamento === '' ? null : auxDepartamento,
        municipio: auxMunicipio === '' ? null : auxMunicipio,

    }

    const { response, error } = yield call(obtenerProbabilidad, consulta)
    if (response) yield put(obtenerProbabilidadSuccess(response.data))
    else console.log(error)
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

function obtenerNumEstudiantePorPuntaje(consulta) {
    return axios
        .get(baseUrl + '/numero-estudiantes-por-puntaje', { params: consulta })
        .then(response => ({ response }))
        .catch(error => ({ error }));
}
function* apiNumEstudiantePorPuntajeSaga() {
    const auxMunicipio = yield select(makeSelectmunicipio())
    const auxDepartamento = yield select(makeSelectdepartamento())
    const consulta = {
        periodo: yield select(makeSelectperiodo()),
        departamento: auxDepartamento === '' ? null : auxDepartamento,
        municipio: auxMunicipio === '' ? null : auxMunicipio,
        puntaje: yield select(makeSelectPuntaje())
    }

    const { response, error } = yield call(obtenerNumEstudiantePorPuntaje, consulta)
    if (response) yield put(obtenerPuntajesEstudiantesSuccess(response.data))
    else console.log(error)
}

export const probabilidadSagas = [
    takeLatest(OBTENER_PROBABILIDAD, probabilidadSaga),
    takeLatest(OBTENER_MUNICIPIOS, apimunicipiosSaga),
    takeLatest(OBTENER_PUNTAJES_ESTUDIANTES, apiNumEstudiantePorPuntajeSaga)
]