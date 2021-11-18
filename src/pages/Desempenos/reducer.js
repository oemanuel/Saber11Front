import produce from 'immer'
import {
    OBTENER_DESEMPENOS_SUCCESS, CHANGE, OBTENER_MUNICIPIOS_SUCCESS,
    OBTENER_COLEGIOS_SUCCESS
} from './constants'

export const initialState = {
    desempenoData: undefined,
    municipiosData: undefined,
    colegiosData: [],
    desempenosPuntajes: undefined,
    totalEstudiantes: undefined,
    departamentoD: "",
    municipioD: "",
    calendario: "A",
    puntaje: 'PUNT_GLOBAL',
    colegio: ""
};

const obtenerDesempenosPorPuntaje = (desempenos, puntaje) => {
    if (desempenos !== undefined) {
        let resultado = { 'periodos': [], 'desempenos': [], 'promedios': [], 'totalEstudiantes': [] }
        desempenos.periodos.forEach(periodos => {
            if (periodos !== "NO HAY DATOS") {
                for (let per in periodos) {
                    periodos[per].Desempenos.forEach(desempeno => {
                        for (let desem in desempeno) {
                            if (desem.substring(7) === puntaje.substring(5)) {
                                resultado['desempenos'].push(desempeno[desem])
                            }
                        }
                    })
                    periodos[per].Promedios.forEach(promedios => {
                        for (let prom in promedios) {
                            if (prom === puntaje) {
                                resultado['promedios'].push(promedios[prom])
                            }
                        }
                    })
                    resultado['totalEstudiantes'].push(periodos[per].Total_estudiantes)
                    resultado['periodos'].push(per)

                }
            }
        });
        return resultado
    }
}

const desempenoReducer = (state = initialState, action) =>
    produce(state, draft => {
        switch (action.type) {
            case OBTENER_DESEMPENOS_SUCCESS:
                draft.desempenoData = action.payload.response
                draft.desempenosPuntajes = obtenerDesempenosPorPuntaje(draft.desempenoData, draft.puntaje)
                draft.totalEstudiantes = draft.desempenosPuntajes.totalEstudiantes

                break;
            case CHANGE:

                if (action.payload.target.name === 'departamentos-desempenos') {
                    draft.departamentoD = action.payload.target.value
                } else if (action.payload.target.name === 'municipios-desempenos') {
                    draft.municipioD = action.payload.target.value
                } else if (action.payload.target.name === 'calendario-desempenos') {
                    draft.calendario = action.payload.target.value
                } else if (action.payload.target.name === 'puntaje-desempenos') {
                    draft.puntaje = action.payload.target.value
                    draft.desempenosPuntajes = obtenerDesempenosPorPuntaje(draft.desempenoData, draft.puntaje)
                    draft.totalEstudiantes = draft.desempenosPuntajes.totalEstudiantes
                } else if (action.payload.target.id.substring(0, 9) === 'combo-box') {
                    draft.colegio = action.payload.target.innerText
                }
                break;
            case OBTENER_MUNICIPIOS_SUCCESS:
                draft.municipiosData = action.payload.response
                break;
            case OBTENER_COLEGIOS_SUCCESS:
                draft.colegiosData = action.payload.response.Colegios
                break;
            default:

        }
    })
export default desempenoReducer;