import { takeLatest, call, put, select } from 'redux-saga/effects';
import axios from 'axios'
import { makeSelectState } from './selectors'
import { PREDECIR } from './constants'
import { predecirSuccess } from './actions'

const baseUrl = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_BASE_URL : process.env.REACT_APP_BASE_URL_DEV

function obtenerprediccion(body) {
    return axios
        .post(baseUrl + '/predecir-clasificacion', body)
        .then(response => ({ response }))
        .catch(error => ({ error }));
}
function* predecirSaga() {
    const state = yield select(makeSelectState())
    const body = {
        "variables":
        {
            "ESTU_EDAD": [parseInt(state.edad,10)],
            "COLE_BILINGUE": [state.coleBilingue],
            "COLE_CARACTER": [state.coleCaracter],
            "COLE_AREA_UBICACION":[state.coleUbicacion],
            "COLE_JORNADA": [state.coleJornada],
            "COLE_NATURALEZA": [state.coleNaturaleza],
            "ESTU_GENERO":[state.genero],
            "FAMI_ESTRATOVIVIENDA": [parseInt(state.estratoVivienda,10)],
            "FAMI_PERSONASHOGAR": [state.personasHogar],
            "FAMI_CUARTOSHOGAR": [parseInt(state.cuartosHogar)],
            "FAMI_EDUCACIONPADRE": [state.educacionPadre],
            "FAMI_EDUCACIONMADRE": [state.educacionMadre],
            "FAMI_TIENECOMPUTADOR": [state.computador],
            "FAMI_NUMLIBROS": [state.libros],
            "FAMI_COMECARNEPESCADOHUEVO": [state.comeCarne],
            "FAMI_SITUACIONECONOMICA": [state.situaEcono],
            "ESTU_DEDICACIONLECTURADIARIA": [state.lectura],
            "ESTU_DEDICACIONINTERNET": [state.horasInternet],
            "ESTU_HORASSEMANATRABAJA": [state.horasTrabajo]
        },
        "calendario": state.calendario
    }
    const { response, error } = yield call(obtenerprediccion, body)
    if (response) yield put(predecirSuccess(response.data))
    else console.log(error)
}


export const prediccionSagas = [
    takeLatest(PREDECIR, predecirSaga)
]