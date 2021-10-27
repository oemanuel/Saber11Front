import { OBTENER_TOP_COLEGIOS, OBTENER_TOP_COLEGIOS_SUCCESS, CHANGE, OBTENER_MUNICIPIOS, OBTENER_MUNICIPIOS_SUCCESS } from './constants'

export function obtenerTopColegios() {
    return {
        type: OBTENER_TOP_COLEGIOS,
    }
}
export function obtenerTopColegiosSuccess(response) {
    return {
        type: OBTENER_TOP_COLEGIOS_SUCCESS,
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