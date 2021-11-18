import produce from 'immer'
import { OBTENER_COLEGIOS_SUCCESS, CHANGE, OBTENER_MUNICIPIOS_SUCCESS, OBTENER_REGISTROS_SUCCESS } from './constants'

export const initialState = {
    listaColegios: [],
    colegio: '',
    registros: [],
    municipiosData: undefined,
    periodo: 20202,
    departamento: "ATLANTICO",
    municipio: "SOLEDAD",
};

const registrosReducer = (state = initialState, action) =>
    produce(state, draft => {
        switch (action.type) {
            case OBTENER_COLEGIOS_SUCCESS:
                draft.listaColegios = action.payload.response.Colegios
                break;
            case CHANGE:
                if (action.payload.target.name === 'periodo') {
                    draft.periodo = action.payload.target.value
                } else if (action.payload.target.id.substring(0, 9) === 'combo-box') {
                    draft.colegio = action.payload.target.innerText
                } else if (action.payload.target.name === 'departamento') {
                    draft.departamento = action.payload.target.value
                } else if (action.payload.target.name === 'municipios') {
                    draft.municipio = action.payload.target.value
                }
                break;
            case OBTENER_MUNICIPIOS_SUCCESS:
                draft.municipiosData = action.payload.response
                break;
            case OBTENER_REGISTROS_SUCCESS:
                console.log(action.payload)
                draft.registros = action.payload.response.respuesta
                break;
            default:
                break;
        }
    })
export default registrosReducer;