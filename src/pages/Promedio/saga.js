import { takeLatest, call, put, select } from 'redux-saga/effects';
import axios from 'axios'
import { makeSelectperiodo, makeSelectVariable, makeSelectPuntaje } from './selectors'
import { OBTENER_DATA } from './constants'
import { obtenerDataSuccess } from './actions'

const baseUrl = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_BASE_URL : process.env.REACT_APP_BASE_URL_DEV

function obtenerData(consulta, endPoint) {
    return axios
        .get(baseUrl + endPoint, { params: consulta })
        .then(response => ({ response }))
        .catch(error => ({ error }));
}
function* obtenerDataSaga() {
    const variable = yield select(makeSelectVariable())
    const consulta = {
        periodo: yield select(makeSelectperiodo()),
        tpuntuacion: yield select(makeSelectPuntaje()),
        variablesocio: variable === '' ? null : variable,
    }
    const { response, error } = yield call(obtenerData, consulta, variable === '' ? '/graficas/linea-promedios' : '/graficas/linea-promedio-variablesocioeconomica')
    if (response) yield put(obtenerDataSuccess(response.data))
    else console.log(error)
}

export const promedioSagas = [
    takeLatest(OBTENER_DATA, obtenerDataSaga),
]