import {
    OBTENER_DESEMPENOS, OBTENER_DESEMPENOS_SUCCESS, CHANGE, OBTENER_MUNICIPIOS,
    OBTENER_MUNICIPIOS_SUCCESS, OBTENER_COLEGIOS, OBTENER_COLEGIOS_SUCCESS
} from './constants'

export function obtenerDesempenos() {
    return {
        type: OBTENER_DESEMPENOS,
    }
}
export function obtenerDesempenosSuccess(response) {
    return {
        type: OBTENER_DESEMPENOS_SUCCESS,
        payload: { response }
    }
}
export function obtenerMunicipios() {
    return {
        type: OBTENER_MUNICIPIOS,
    }
}
export function obtenerMunicipiosSuccess(response) {
    return {
        type: OBTENER_MUNICIPIOS_SUCCESS,
        payload: { response }
    }
}

export function obtenerColegios() {
    return {
        type: OBTENER_COLEGIOS,
    }
}
export function obtenerColegiosSuccess(response) {
    return {
        type: OBTENER_COLEGIOS_SUCCESS,
        payload: { response }
    }
}

export function change(target) {
    return {
        type: CHANGE,
        payload: { target }
    }
}