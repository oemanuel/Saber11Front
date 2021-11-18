import { takeLatest, call, put, select } from 'redux-saga/effects';
import axios from 'axios'
import { makeSelectperiodo, makeSelectPuntaje, makeSelectdepartamento, makeSelectmunicipio } from './selectors'
import { OBTENER_PUNTAJES_ESTUDIANTES, OBTENER_MUNICIPIOS } from './constants'
import { obtenerPuntajesEstudiantesSuccess, obtenerMunicipiosSuccess } from './actions'

const baseUrl = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_BASE_URL : process.env.REACT_APP_BASE_URL_DEV

function obtenerTopColegios(consulta) {
    return axios
        .get(baseUrl + '/numero-estudiantes-por-puntaje', { params: consulta })
        .then(response => ({ response }))
        .catch(error => ({ error }));
}
function* TopColegiosSaga() {
    const auxMunicipio = yield select(makeSelectmunicipio())
    const consulta = {
        periodo: yield select(makeSelectperiodo()),
        departamento: yield select(makeSelectdepartamento()),
        municipio: auxMunicipio === '' ? null : auxMunicipio,
        puntaje: yield select(makeSelectPuntaje())
    }

    const { response, error } = yield call(obtenerTopColegios, consulta)
    if (response) yield put(obtenerPuntajesEstudiantesSuccess(response.data))
    else console.log(error)
}

function obtenerMunicipios(periodo) {
    console.log(periodo)
    return axios
        .get(baseUrl + '/datos-generales/departamentos-municipios-cole', { params: { periodo: periodo } })
        .then(response => ({ response }))
        .catch(error => ({ error }));
}
function* apimunicipiosSaga() {
    const { response, error } = yield call(obtenerMunicipios, yield select(makeSelectperiodo()))
    if (response) yield put(obtenerMunicipiosSuccess(response.data))
    else console.log(error)
}


export const puntajesEstudiantesSagas = [
    takeLatest(OBTENER_PUNTAJES_ESTUDIANTES, TopColegiosSaga),
    takeLatest(OBTENER_MUNICIPIOS, apimunicipiosSaga)
]