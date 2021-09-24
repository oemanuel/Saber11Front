import produce from 'immer'
import { OBTENER_TOP_COLEGIOS_SUCCESS } from './constants'

export const initialState = {
    topColegios: undefined,
};

const dashboardReducer = (state = initialState, action) =>
    produce(state, draft => {
        switch (action.type) {
            case OBTENER_TOP_COLEGIOS_SUCCESS:
                draft.topColegios = action.payload
                break;
            default:
                break;
        }
    })
export default dashboardReducer;