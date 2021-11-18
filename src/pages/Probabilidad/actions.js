import { OBTENER_PUNTAJES_ESTUDIANTES, OBTENER_PUNTAJES_ESTUDIANTES_SUCCESS, OBTENER_PROBABILIDAD, OBTENER_PROBABILIDAD_SUCCESS, CHANGE, OBTENER_MUNICIPIOS, OBTENER_MUNICIPIOS_SUCCESS } from './constants'

export function obtenerProbabilidad() {
    return {
        type: OBTENER_PROBABILIDAD,
    }
}
export function obtenerProbabilidadSuccess(response) {
    return {
        type: OBTENER_PROBABILIDAD_SUCCESS,
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
export function obtenerPuntajesEstudiantes() {
    return {
        type: OBTENER_PUNTAJES_ESTUDIANTES,
    }
}
export function obtenerPuntajesEstudiantesSuccess(response) {
    return {
        type: OBTENER_PUNTAJES_ESTUDIANTES_SUCCESS,
        payload: { response }
    }
}