import { OBTENER_TOP_COLEGIOS, OBTENER_TOP_COLEGIOS_SUCCESS } from './constants'

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