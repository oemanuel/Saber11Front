import produce from 'immer'
import { OBTENER_DATA_SUCCESS, CHANGE_DC } from './constants'

export const initialState = {
    data: undefined,
    periodo: 1,
    variable: "FAMI_NUMLIBROS",
    puntaje: "PUNT_GLOBAL"
};

const promedioReducer = (state = initialState, action) =>
    produce(state, draft => {
        switch (action.type) {
            case OBTENER_DATA_SUCCESS:
                draft.data = action.payload.response
                break;
            case CHANGE_DC:
                if (action.payload.target.name === 'periodo') {
                    draft.periodo = action.payload.target.value
                } else if (action.payload.target.name === 'variable') {
                    draft.variable = action.payload.target.value
                } else if (action.payload.target.name === 'puntaje') {
                    draft.puntaje = action.payload.target.value
                }
                break;
            default:
                break;
        }
    })
export default promedioReducer;