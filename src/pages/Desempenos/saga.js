import { takeLatest, call, put, select } from 'redux-saga/effects';
import axios from 'axios'
import {
    makeSelectdepartamento, makeSelectmunicipio, makeSelectcalendario,
    makeSelectpuntaje, makeSelectcolegio
} from './selectors'
import { OBTENER_COLEGIOS, OBTENER_DESEMPENOS, OBTENER_MUNICIPIOS } from './constants'
import { obtenerDesempenosSuccess, obtenerMunicipiosSuccess, obtenerColegiosSuccess } from './actions'

const baseUrl = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_BASE_URL : process.env.REACT_APP_BASE_URL_DEV

function obtenerDesempenos(consulta) {
    return axios
        .get(baseUrl + '/datos-generales/promedios-desempenos', { params: consulta })
        .then(response => ({ response }))
        .catch(error => ({ error }));
}
function* desempenosSaga() {
    const auxDepartamento = yield select(makeSelectdepartamento())
    const auxMunicipio = yield select(makeSelectmunicipio())
    const auxColegio = yield select(makeSelectcolegio())
    const consulta = {
        calendario: yield select(makeSelectcalendario()),
        puntaje: yield select(makeSelectpuntaje()),
        departamento: auxDepartamento === '' ? null : auxDepartamento,
        municipio: auxMunicipio === '' ? null : auxMunicipio,
        colegio: auxColegio === '' ? null : auxColegio,
    }
    const { response, error } = yield call(obtenerDesempenos, consulta)
    if (response) yield put(obtenerDesempenosSuccess(response.data))
    else console.log(error)
}

function obtenerMunicipios(periodo) {
    return axios
        .get(baseUrl + '/datos-generales/departamentos-municipios-cole', { params: { periodo: periodo } })
        .then(response => ({ response }))
        .catch(error => ({ error }));
}
function* apimunicipiosSaga() {

    const calendario = yield select(makeSelectcalendario())
    let periodo = 20202
    if (calendario === "B")
        periodo = 20211
    const { response, error } = yield call(obtenerMunicipios, periodo)
    if (response) yield put(obtenerMunicipiosSuccess(response.data))
    else console.log(error)
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
    const calendario = yield select(makeSelectcalendario())
    let periodo = 20202
    if (calendario === "B")
        periodo = 20211
    if (auxDepartamento !== '') {
        const consulta = {
            departamento: auxDepartamento === '' ? null : auxDepartamento,
            municipio: auxMunicipio === '' ? null : auxMunicipio,
            periodo: periodo,
        }
        const { response, error } = yield call(obtenerColegios, consulta)
        if (response) yield put(obtenerColegiosSuccess(response.data))
        else console.log(error)
    }
}

export const desempenoSagas = [
    takeLatest(OBTENER_DESEMPENOS, desempenosSaga),
    takeLatest(OBTENER_MUNICIPIOS, apimunicipiosSaga),
    takeLatest(OBTENER_COLEGIOS, apiColegiosSaga)
]