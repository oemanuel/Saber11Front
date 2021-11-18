import { takeLatest, call, put, select } from 'redux-saga/effects';
import axios from 'axios'
import { makeSelectperiodo, makeSelectPuntaje, makeSelecttopNumero, makeSelectnumeroEstudiantes, makeSelectdepartamento, makeSelectmunicipio } from './selectors'
import { OBTENER_TOP_COLEGIOS, OBTENER_MUNICIPIOS } from './constants'
import { obtenerTopColegiosSuccess, obtenerMunicipiosSuccess } from './actions'

const baseUrl = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_BASE_URL : process.env.REACT_APP_BASE_URL_DEV

function obtenerTopColegios(consulta) {
    return axios
        .get(baseUrl + '/mejores-colegios', { params: consulta })
        .then(response => ({ response }))
        .catch(error => ({ error }));
}
function* TopColegiosSaga() {
    const auxMunicipio = yield select(makeSelectmunicipio())
    const auxDepartamento = yield select(makeSelectdepartamento())
    const consulta = {
        periodo: yield select(makeSelectperiodo()),
        departamento: auxDepartamento === '' ? null : auxDepartamento,
        municipio: auxMunicipio === '' ? null : auxMunicipio,
        top: yield select(makeSelecttopNumero()),
        num_estudiantes: yield select(makeSelectnumeroEstudiantes()),
        puntaje: yield select(makeSelectPuntaje())
    }

    const { response, error } = yield call(obtenerTopColegios, consulta)
    if (response) yield put(obtenerTopColegiosSuccess(response.data))
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


export const dashboardSagas = [
    takeLatest(OBTENER_TOP_COLEGIOS, TopColegiosSaga),
    takeLatest(OBTENER_MUNICIPIOS, apimunicipiosSaga)
]