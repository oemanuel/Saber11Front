import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios'

import { OBTENER_TOP_COLEGIOS } from './constants'
import { obtenerTopColegiosSuccess } from './actions'

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
        periodo: 20202,
        departamento: null,
        municipio: null,
        puntajes: ["PUNT_GLOBAL"],
        top: 10,
        num_estudiantes: 0
    }

    const { response, error } = yield call(obtenerTopColegios, consulta)
    if (response) yield put(obtenerTopColegiosSuccess(response.data))
    else console.log(error)
}


export const dashboardSagas = [takeLatest(OBTENER_TOP_COLEGIOS, TopColegiosSaga)]