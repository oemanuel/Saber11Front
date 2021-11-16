import produce from 'immer'
import { OBTENER_TOP_COLEGIOS_SUCCESS, CHANGE, OBTENER_MUNICIPIOS_SUCCESS } from './constants'

export const initialState = {
    topColegios: undefined,
    municipiosData: undefined,
    mejoresColegiosX: [],
    mejoresColegiosY: [],
    periodo: 20202,
    topNumero: '10',
    numeroEstudiantes: '0',
    departamento: "ATLANTICO",
    municipio: "",
    puntaje: 'PUNT_GLOBAL'
};

const dashboardReducer = (state = initialState, action) =>
    produce(state, draft => {
        switch (action.type) {
            case OBTENER_TOP_COLEGIOS_SUCCESS:
                draft.topColegios = action.payload
                const tempY = []
                action.payload.response.mejoresColegios.forEach(colegio => tempY.push(colegio.nombre?.trim()))
                draft.mejoresColegiosY = tempY.reverse()
                const tempX = []
                action.payload.response.mejoresColegios.forEach(colegio => tempX.push(colegio.puntajepromedio))
                draft.mejoresColegiosX = tempX.reverse()
                break;
            case CHANGE:
                if (action.payload.target.name === 'periodo') {
                    draft.periodo = action.payload.target.value
                } else if (action.payload.target.name === 'topNumero') {
                    draft.topNumero = action.payload.target.value
                } else if (action.payload.target.name === 'departamento') {
                    draft.departamento = action.payload.target.value
                } else if (action.payload.target.name === 'municipios') {
                    draft.municipio = action.payload.target.value
                } else if (action.payload.target.name === 'numeroEstudiantes') {
                    draft.numeroEstudiantes = action.payload.target.value
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
export default dashboardReducer;