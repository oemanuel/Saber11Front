import produce from 'immer'
import { OBTENER_PUNTAJES_ESTUDIANTES_SUCCESS, CHANGE, OBTENER_MUNICIPIOS_SUCCESS } from './constants'

export const initialState = {
    puntajesEstudiantesData: undefined,
    municipiosData: undefined,
    periodo: 20202,
    departamento: "",
    municipio: "",
    puntaje: 'PUNT_GLOBAL'
};

const puntajesEstudiantesReducer = (state = initialState, action) =>
    produce(state, draft => {
        switch (action.type) {
            case OBTENER_PUNTAJES_ESTUDIANTES_SUCCESS:
                draft.puntajesEstudiantesData = action.payload.response.puntaje_estudiantes
                break;
            case CHANGE:
                console.log(action.payload.target)
                if (action.payload.target.name === 'periodo') {
                    draft.periodo = action.payload.target.value
                } else if (action.payload.target.name === 'departamento') {
                    draft.departamento = action.payload.target.value
                } else if (action.payload.target.name === 'municipios') {
                    draft.municipio = action.payload.target.value
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
export default puntajesEstudiantesReducer;