import produce from 'immer'
import { CHANGE, PREDECIR_SUCCESS } from './constants'

export const initialState = {
    prediccion: undefined,
    edad: '',
    genero: '',
    lectura: '',
    horasInternet: '',
    horasTrabajo: '',
    calendario: '',
    coleNaturaleza: '',
    coleCaracter: '',
    coleBilingue: '',
    coleJornada: '',
    coleUbicacion: '',
    estratoVivienda: '',
    personasHogar: '',
    cuartosHogar: '',
    educacionPadre: '',
    educacionMadre: '',
    computador: '',
    libros: '',
    comeCarne: '',
    situaEcono: ''
};

const prediccionReducer = (state = initialState, action) =>
    produce(state, draft => {
        switch (action.type) {
            case PREDECIR_SUCCESS:
                draft.prediccion = action.payload.response.prediccion
                break;
            case CHANGE:
                if (action.payload.target.name === 'edad') {
                    draft.edad = action.payload.target.value
                } else if (action.payload.target.name === 'genero') {
                    draft.genero = action.payload.target.value
                } else if (action.payload.target.name === 'lectura') {
                    draft.lectura = action.payload.target.value
                } else if (action.payload.target.name === 'horas-internet') {
                    draft.horasInternet = action.payload.target.value
                } else if (action.payload.target.name === 'horas-trabajo') {
                    draft.horasTrabajo = action.payload.target.value
                } else if (action.payload.target.name === 'calendario') {
                    draft.calendario = action.payload.target.value
                } else if (action.payload.target.name === 'cole-naturaleza') {
                    draft.coleNaturaleza = action.payload.target.value
                } else if (action.payload.target.name === 'cole-caracter') {
                    draft.coleCaracter = action.payload.target.value
                } else if (action.payload.target.name === 'cole-bilingue') {
                    draft.coleBilingue = action.payload.target.value
                } else if (action.payload.target.name === 'cole-jornada') {
                    draft.coleJornada = action.payload.target.value
                } else if (action.payload.target.name === 'cole-ubicacion') {
                    draft.coleUbicacion = action.payload.target.value
                } else if (action.payload.target.name === 'estrato-vivienda') {
                    draft.estratoVivienda = action.payload.target.value
                } else if (action.payload.target.name === 'personas-hogar') {
                    draft.personasHogar = action.payload.target.value
                } else if (action.payload.target.name === 'cuartos-hogar') {
                    draft.cuartosHogar = action.payload.target.value
                } else if (action.payload.target.name === 'educacion-padre') {
                    draft.educacionPadre = action.payload.target.value
                } else if (action.payload.target.name === 'educacion-madre') {
                    draft.educacionMadre = action.payload.target.value
                } else if (action.payload.target.name === 'computador') {
                    draft.computador = action.payload.target.value
                } else if (action.payload.target.name === 'libros') {
                    draft.libros = action.payload.target.value
                } else if (action.payload.target.name === 'come-carne') {
                    draft.comeCarne = action.payload.target.value
                } else if (action.payload.target.name === 'situa-econo') {
                    draft.situaEcono = action.payload.target.value
                }
                break;
            default:
                break;
        }
    })
export default prediccionReducer;