import { takeLatest, call, put, select } from 'redux-saga/effects';
import axios from 'axios'
import { makeSelectperiodo, makeSelecttopNumero, makeSelectnumeroEstudiantes } from './selectors'
import { OBTENER_TOP_COLEGIOS, OBTENER_MUNICIPIOS } from './constants'
import { obtenerTopColegiosSuccess, obtenerMunicipiosSuccess } from './actions'

const baseUrl = 'http://127.0.0.1:5000'
const endPoint = '/mejores-colegios'
const URL = baseUrl + endPoint;
function obtenerTopColegios(consulta) {
    return axios
        .get(URL, { params: consulta })
        .then(response => ({ response }))
        .catch(error => ({ error }));
}
function* TopColegiosSaga() {
    const consulta = {
        periodo: yield select(makeSelectperiodo()),
        departamento: null,
        municipio: null,
        puntajes: ["PUNT_GLOBAL"],
        top: yield select(makeSelecttopNumero()),
        num_estudiantes: yield select(makeSelectnumeroEstudiantes())
    }

    const { response, error } = yield call(obtenerTopColegios, consulta)
    if (response) yield put(obtenerTopColegiosSuccess(response.data))
    else console.log(error)
}

function obtenerMunucipios() {
    return axios
        .get('https://raw.githubusercontent.com/marcovega/colombia-json/master/colombia.min.json')
        .then(response => ({ response }))
        .catch(error => ({ error }));
}
function* apimunicipiosSaga() {
    const { response, error } = yield call(obtenerMunucipios)
    console.log(response.data)
    if (response) yield put(obtenerMunicipiosSuccess(response.data))
    else console.log(error)
}


export const dashboardSagas = [
    takeLatest(OBTENER_TOP_COLEGIOS, TopColegiosSaga),
    takeLatest(OBTENER_MUNICIPIOS, apimunicipiosSaga)
]