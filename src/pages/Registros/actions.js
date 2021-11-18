import { OBTENER_COLEGIOS, OBTENER_COLEGIOS_SUCCESS, CHANGE, OBTENER_MUNICIPIOS, OBTENER_MUNICIPIOS_SUCCESS, OBTENER_REGISTROS, OBTENER_REGISTROS_SUCCESS } from './constants'

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
export function obtenerRegistros() {
    return {
        type: OBTENER_REGISTROS,
    }
}
export function obtenerRegistrosSuccess(response) {
    return {
        type: OBTENER_REGISTROS_SUCCESS,
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
export function change(target) {
    return {
        type: CHANGE,
        payload: { target }
    }
}