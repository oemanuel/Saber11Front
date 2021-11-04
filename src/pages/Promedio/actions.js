import { OBTENER_DATA, OBTENER_DATA_SUCCESS, CHANGE_DC, } from './constants'

export function obtenerData() {
    return {
        type: OBTENER_DATA,
    }
}
export function obtenerDataSuccess(response) {
    return {
        type: OBTENER_DATA_SUCCESS,
        payload: { response }
    }
}
export function change(target) {
    return {
        type: CHANGE_DC,
        payload: { target }
    }
}