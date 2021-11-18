import produce from 'immer'
import { OBTENER_COLEGIOS_SUCCESS, OBTENER_REGISTROS, CHANGE_PAGE, CHANGE, OBTENER_MUNICIPIOS_SUCCESS, OBTENER_REGISTROS_SUCCESS } from './constants'

export const initialState = {
    listaColegios: [],
    colegio: '',
    registros: [],
    municipiosData: undefined,
    periodo: 20202,
    departamento: "ATLANTICO",
    municipio: "SOLEDAD",
    inicio: 0
};

const registrosReducer = (state = initialState, action) =>
    produce(state, draft => {
        switch (action.type) {
            case OBTENER_REGISTROS:
                draft.inicio = 0
                draft.registros = []
                break;
            case CHANGE_PAGE:
                draft.inicio = state.inicio + 20
                break;
            case OBTENER_COLEGIOS_SUCCESS:
                draft.listaColegios = action.payload.response.Colegios
                break;
            case CHANGE:
                if (action.payload.target.name === 'periodo') {
                    draft.periodo = action.payload.target.value
                } else if (action.payload.target.id?.substring(0, 9) === 'combo-box') {
                    console.log(action.payload?.nodeName?.nodeName === 'LI')
                    draft.colegio = action.payload.target.innerText
                } else if (action.payload.target.name === 'departamento') {
                    draft.departamento = action.payload.target.value
                    draft.colegio = ''
                } else if (action.payload.target.name === 'municipios') {
                    draft.municipio = action.payload.target.value
                }
                break;
            case OBTENER_MUNICIPIOS_SUCCESS:
                draft.municipiosData = action.payload.response
                break;
            case OBTENER_REGISTROS_SUCCESS:
                draft.registros = [...state.registros, ...action.payload.response.respuesta]
                break;
            default:
                break;
        }
    })
export default registrosReducer;