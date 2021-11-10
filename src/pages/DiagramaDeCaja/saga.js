import { takeLatest, call, put, select } from 'redux-saga/effects';
import axios from 'axios'
import { makeSelectperiodo, makeSelectVariable, makeSelectPuntaje } from './selectors'
import { OBTENER_DATA } from './constants'
import { obtenerDataSuccess } from './actions'

const baseUrl = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_BASE_URL : process.env.REACT_APP_BASE_URL_DEV

function obtenerData(consulta) {
    return axios
        .get(baseUrl + '/diagrama_caja', { params: consulta })
        .then(response => ({ response }))
        .catch(error => ({ error }));
}
function* obtenerDataSaga() {
    const consulta = {
        periodo: yield select(makeSelectperiodo()),
        variable: yield select(makeSelectVariable()),
        puntaje: yield select(makeSelectPuntaje())
    }
    const { response, error } = yield call(obtenerData, consulta)
    if (response) yield put(obtenerDataSuccess(response.data))
    else console.log(error)
}

export const diagramaDeCajaSagas = [
    takeLatest(OBTENER_DATA, obtenerDataSaga),
]