import produce from 'immer'
import { OBTENER_PROBABILIDAD_SUCCESS, OBTENER_PUNTAJES_ESTUDIANTES_SUCCESS, CHANGE, OBTENER_MUNICIPIOS_SUCCESS } from './constants'

export const initialState = {
    puntajesEstudiantesData: undefined,
    municipiosData: undefined,
    periodo: 20202,
    limitSup: '400',
    limitInf: '350',
    departamento: "ATLANTICO",
    municipio: "",
    puntaje: 'PUNT_GLOBAL',
    probabilidad: undefined
};

const probabilidadReducer = (state = initialState, action) =>
    produce(state, draft => {
        switch (action.type) {
            case OBTENER_PUNTAJES_ESTUDIANTES_SUCCESS:
                draft.puntajesEstudiantesData = action.payload.response.puntaje_estudiantes
                break;
            case OBTENER_PROBABILIDAD_SUCCESS:
                draft.probabilidad = action.payload.response
                break;
            case CHANGE:
                if (action.payload.target.name === 'periodo') {
                    draft.periodo = action.payload.target.value
                } else if (action.payload.target.name === 'limit-sup') {
                    draft.limitSup = action.payload.target.value
                } else if (action.payload.target.name === 'departamento') {
                    draft.departamento = action.payload.target.value
                } else if (action.payload.target.name === 'municipios') {
                    draft.municipio = action.payload.target.value
                } else if (action.payload.target.name === 'limit-inf') {
                    draft.limitInf = action.payload.target.value
                } else if (action.payload.target.name === 'puntaje') {
                    draft.puntaje = action.payload.target.value
                }
                break;
            case OBTENER_MUNICIPIOS_SUCCESS:
                draft.municipiosData = action.payload.response
                break;
            default:
                break;
        }
    })
export default probabilidadReducer;