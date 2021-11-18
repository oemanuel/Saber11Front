import { CHANGE, PREDECIR, PREDECIR_SUCCESS } from './constants'

export function predecir() {
    return {
        type: PREDECIR,
    }
}
export function predecirSuccess(response) {
    return {
        type: PREDECIR_SUCCESS,
        payload: { response }
    }
}
export function change(target) {
    return {
        type: CHANGE,
        payload: { target }
    }
}