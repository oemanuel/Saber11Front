import { useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { makeSelectState } from './selectors'
import { change, predecir } from './actions'

// material
import { Box, Container, Card, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography, Modal } from '@material-ui/core';
// components
import Page from '../../components/Page';

// ----------------------------------------------------------------------

export function Prediccion({ handleChange, handlePredecir, state }) {
  const [open, setOpen] = useState(false)
  const [visto, setVisto] = useState(false)
  const handleClose = () => {
    setOpen(false)
  }
  useEffect(() => {
    if (state.prediccion !== undefined && visto === false) {
      setOpen(true)
      setVisto(true)
    }
  }, [setOpen, state.prediccion, visto])
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          p: 4,
        }}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Su resultado
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {state?.prediccion}
          </Typography>
        </Box>
      </Modal>
      <Page title="Tu Saber 11°">
        <Container maxWidth="xl">
          <Card>
            <Box sx={{ padding: '2rem' }} >
              <Typography variant="h4">
                Predice tu resultado Prueba saber 11°
              </Typography>
              <Typography variant="body1">
                Responde el siguiente formulario con preguntas sencillas de información personal, familiar y acerca de tu colegio para poder darte una predicción general de como podría ser tu desempeño en las pruebas saber 11° <strong>SOLO</strong> teniendo encuenta tus condiciones socio economicos y <strong>NO</strong> académicas. Dadas las condiciones para está predicción solo existen dos resultados posibles: estar por encima de la media o estra por debajo de la media nacional.
              </Typography>
            </Box>
            <Box
              component="form"
              sx={{
                '& .MuiTextField-root': { mr: 1, width: 300 },
                '& .MuiFormControl-root': { mr: 1, width: 300 },
                padding: '2rem'
              }}
              noValidate
              autoComplete="off"
            >
              <Typography variant="h5">
                Información Personal
              </Typography>
              <Box sx={{ m: 2 }} />
              <div>
                <FormControl sx={{ width: 300 }} >
                  <TextField
                    id="edad-id"
                    label="Edad"
                    name="edad"
                    type="number"
                    value={state.edad}
                    onChange={handleChange}
                  />
                </FormControl>
                <FormControl>
                  <InputLabel id="genero-label">Género</InputLabel>
                  <Select
                    labelId="genero-label"
                    id="genero-id"
                    value={state.genero}
                    label="Género"
                    name='genero'
                    onChange={handleChange}
                  >
                    <MenuItem value={''}>Seleccionar</MenuItem>
                    <MenuItem value={'F'}>F</MenuItem>
                    <MenuItem value={'M'}>M</MenuItem>
                  </Select>
                </FormControl>
                <FormControl>
                  <InputLabel id="lectura-label">Dedicación Lectura Diaria</InputLabel>
                  <Select
                    labelId="lectura-label"
                    id="lectura-id"
                    value={state.lectura}
                    label="Dedicación Lectura Diaria"
                    name='lectura'
                    onChange={handleChange}
                  >
                    <MenuItem value={''}>Seleccionar</MenuItem>
                    <MenuItem value={'No leo por entretenimiento'}>No leo por entretenimiento</MenuItem>
                    <MenuItem value={'30 minutos o menos'}>30 minutos o menos</MenuItem>
                    <MenuItem value={'Entre 30 y 60 minutos'}>Entre 30 y 60 minutos</MenuItem>
                    <MenuItem value={'Entre 1 y 2 horas'}>Entre 1 y 2 horas</MenuItem>
                    <MenuItem value={'Más de 2 horas'}>Más de 2 horas</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <Box sx={{ m: 2 }} />
              <div>
                <FormControl>
                  <InputLabel id="horas-internet-label">Dedicación Internet Diario</InputLabel>
                  <Select
                    labelId="horas-internet-label"
                    id="horas-internet-id"
                    value={state.horasInternet}
                    label="Dedicación Internet Diario"
                    name='horas-internet'
                    onChange={handleChange}
                  >
                    <MenuItem value={''}>Seleccionar</MenuItem>
                    <MenuItem value={'No Navega Internet'}>No Navega Internet</MenuItem>
                    <MenuItem value={'30 minutos o menos'}>30 minutos o menos</MenuItem>
                    <MenuItem value={'Entre 30 y 60 minutos'}>Entre 30 y 60 minutos</MenuItem>
                    <MenuItem value={'Entre 1 y 3 horas'}>Entre 1 y 3 horas</MenuItem>
                    <MenuItem value={'Más de 3 horas'}>Más de 3 horas</MenuItem>
                  </Select>
                </FormControl>
                <FormControl>
                  <InputLabel id="horas-trabajo-label">Horas de Trabajo a la Semana</InputLabel>
                  <Select
                    labelId="horas-trabajo-label"
                    id="horas-trabajo-id"
                    value={state.horasTrabajo}
                    label="Horas de Trabajo a la Semana"
                    name='horas-trabajo'
                    onChange={handleChange}
                  >
                    <MenuItem value={''}>Seleccionar</MenuItem>
                    <MenuItem value={'0'}>0</MenuItem>
                    <MenuItem value={'Menos de 10 horas'}>Menos de 10 horas</MenuItem>
                    <MenuItem value={'Entre 11 y 20 horas'}>Entre 11 y 20 horas</MenuItem>
                    <MenuItem value={'Entre 21 y 30 horas'}>Entre 21 y 30 horas</MenuItem>
                    <MenuItem value={'Más de 30 horas'}>Más de 30 horas</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <Box sx={{ m: 5 }} />
              <Typography variant="h5">
                Información del Colegio
              </Typography>
              <Box sx={{ m: 2 }} />
              <div>
                <FormControl >
                  <InputLabel id="calendario-label">Calendario</InputLabel>
                  <Select
                    labelId="calendario-label"
                    id="calendario-label-id"
                    value={state.calendario}
                    label="Calendario"
                    name='calendario'
                    onChange={handleChange}
                  >
                    <MenuItem value={''}>Seleccionar</MenuItem>
                    <MenuItem value={'A'}>A</MenuItem>
                    <MenuItem value={'B'}>B</MenuItem>
                  </Select>
                </FormControl>
                <FormControl>
                  <InputLabel id="cole-naturaleza-label">Naturaleza del Colegio</InputLabel>
                  <Select
                    labelId="cole-naturaleza-label"
                    id="cole-naturaleza-id"
                    value={state.coleNaturaleza}
                    label="Naturaleza del Colegio"
                    name='cole-naturaleza'
                    onChange={handleChange}
                  >
                    <MenuItem value={''}>Seleccionar</MenuItem>
                    <MenuItem value={'OFICIAL'}>OFICIAL</MenuItem>
                    <MenuItem value={'NO OFICIAL'}>NO OFICIAL</MenuItem>
                  </Select>
                </FormControl>
                <FormControl>
                  <InputLabel id="cole-carater-label">Caracter del Colegio</InputLabel>
                  <Select
                    labelId="cole-caract-label"
                    id="cole-caracter-id"
                    value={state.coleCaracter}
                    label="Caracter del Colegio"
                    name='cole-caracter'
                    onChange={handleChange}
                  >
                    <MenuItem value={''}>Seleccionar</MenuItem>
                    <MenuItem value={'ACADÉMICO'}>ACADÉMICO</MenuItem>
                    <MenuItem value={'TÉCNICO'}>TÉCNICO</MenuItem>
                    <MenuItem value={'TÉCNICO/ACADÉMICO'}>TÉCNICO/ACADÉMICO</MenuItem>
                    <MenuItem value={'NO APLICA'}>NO APLICA</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <Box sx={{ m: 2 }} />
              <div>
                <FormControl>
                  <InputLabel id="cole-bilingue-label">Colegio Bilingue</InputLabel>
                  <Select
                    labelId="cole-bilingue-label"
                    id="cole-bilingue-id"
                    value={state.coleBilingue}
                    label="Colegio Bilingue"
                    name='cole-bilingue'
                    onChange={handleChange}
                  >
                    <MenuItem value={''}>Seleccionar</MenuItem>
                    <MenuItem value={'S'}>Si</MenuItem>
                    <MenuItem value={'N'}>No</MenuItem>
                  </Select>
                </FormControl>
                <FormControl>
                  <InputLabel id="cole-jornada-label">Jornada del Colegio</InputLabel>
                  <Select
                    labelId="cole-jornada-label"
                    id="cole-jornada-id"
                    value={state.coleJornada}
                    label="Jornada del Colegio"
                    name='cole-jornada'
                    onChange={handleChange}
                  >
                    <MenuItem value={''}>Seleccionar</MenuItem>
                    <MenuItem value={'COMPLETA'}>COMPLETA</MenuItem>
                    <MenuItem value={'MAÑANA'}>MAÑANA</MenuItem>
                    <MenuItem value={'NOCHE'}>NOCHE</MenuItem>
                    <MenuItem value={'TARDE'}>TARDE</MenuItem>
                    <MenuItem value={'UNICA'}>UNICA</MenuItem>
                    <MenuItem value={'SABATINA'}>SABATINA</MenuItem>
                  </Select>
                </FormControl>
                <FormControl>
                  <InputLabel id="cole-carater-label">Ubicación del Colegio</InputLabel>
                  <Select
                    labelId="cole-ubicacion-label"
                    id="cole-ubicacion-id"
                    value={state.coleUbicacion}
                    label="Ubicación del Colegio"
                    name='cole-ubicacion'
                    onChange={handleChange}
                  >
                    <MenuItem value={''}>Seleccionar</MenuItem>
                    <MenuItem value={'URBANO'}>URBANO</MenuItem>
                    <MenuItem value={'RURAL'}>RURAL</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <Box sx={{ m: 5 }} />
              <Typography variant="h5">
                Información familiar
              </Typography>
              <Box sx={{ m: 2 }} />
              <div>
                <FormControl>
                  <InputLabel id="estrato-hogar-label">Estrato de la Vivienda</InputLabel>
                  <Select
                    labelId="estrato-hogar-label"
                    id="estrato-hogar-id"
                    value={state.estratoVivienda}
                    label="Estrato de la Vivienda"
                    name='estrato-vivienda'
                    onChange={handleChange}
                  >
                    <MenuItem value={''}>Seleccionar</MenuItem>
                    <MenuItem value={'0'}>0</MenuItem>
                    <MenuItem value={'1'}>1</MenuItem>
                    <MenuItem value={'2'}>2</MenuItem>
                    <MenuItem value={'3'}>3</MenuItem>
                    <MenuItem value={'4'}>4</MenuItem>
                    <MenuItem value={'5'}>5</MenuItem>
                    <MenuItem value={'6'}>6</MenuItem>
                  </Select>
                </FormControl>
                <FormControl>
                  <InputLabel id="personas-hogar-label">Personas en el Hogar</InputLabel>
                  <Select
                    labelId="personas-hogar-label"
                    id="personas-hogar-id"
                    value={state.personasHogar}
                    label="Personas en el Hogar"
                    name='personas-hogar'
                    onChange={handleChange}
                  >
                    <MenuItem value={''}>Seleccionar</MenuItem>
                    <MenuItem value={'1 a 2'}>1 a 2</MenuItem>
                    <MenuItem value={'3 a 4'}>3 a 4</MenuItem>
                    <MenuItem value={'5 a 6'}>5 a 6</MenuItem>
                    <MenuItem value={'7 a 8'}>7 a 8</MenuItem>
                    <MenuItem value={'9 o más'}>9 o más</MenuItem>
                  </Select>
                </FormControl>
                <FormControl>
                  <InputLabel id="cuartos-hogar-label">Cuartos en el Hogar</InputLabel>
                  <Select
                    labelId="cuartos-hogar-label"
                    id="cuartos-hogar-id"
                    value={state.cuartosHogar}
                    label="Cuartos en el Hogar"
                    name='cuartos-hogar'
                    onChange={handleChange}
                  >
                    <MenuItem value={''}>Seleccionar</MenuItem>
                    <MenuItem value={'1'}>1</MenuItem>
                    <MenuItem value={'2'}>2</MenuItem>
                    <MenuItem value={'3'}>3</MenuItem>
                    <MenuItem value={'4'}>4</MenuItem>
                    <MenuItem value={'5'}>5</MenuItem>
                    <MenuItem value={'6'}>6 o más</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <Box sx={{ m: 2 }} />
              <div>
                <FormControl>
                  <InputLabel id="educacion-padre-label">Nivel Educación Padre</InputLabel>
                  <Select
                    labelId="educacion-padre-label"
                    id="educacion-padre-id"
                    value={state.educacionPadre}
                    label="Nivel Educación Padre"
                    name='educacion-padre'
                    onChange={handleChange}
                  >
                    <MenuItem value={''}>Seleccionar</MenuItem>
                    <MenuItem value={'Ninguno'}>Ninguno</MenuItem>
                    <MenuItem value={'No sabe'}>No sabe</MenuItem>
                    <MenuItem value={'No Aplica'}>No Aplica</MenuItem>
                    <MenuItem value={'Primaria incompleta'}>Primaria incompleta</MenuItem>
                    <MenuItem value={'Secundaria (Bachillerato) incompleta'}>Secundaria (Bachillerato) incompleta</MenuItem>
                    <MenuItem value={'Secundaria (Bachillerato) completa'}>Secundaria (Bachillerato) completa</MenuItem>
                    <MenuItem value={'Técnica o tecnológica incompleta'}>Técnica o tecnológica incompleta</MenuItem>
                    <MenuItem value={'Técnica o tecnológica completa'}>Técnica o tecnológica completa</MenuItem>
                    <MenuItem value={'Educación profesional incompleta'}>Educación profesional incompleta</MenuItem>
                    <MenuItem value={'Educación profesional completa'}>Educación profesional completa</MenuItem>
                    <MenuItem value={'Postgrado'}>Postgrado</MenuItem>
                  </Select>
                </FormControl>
                <FormControl>
                  <InputLabel id="educacion-madre-label">Nivel Educación Madre</InputLabel>
                  <Select
                    labelId="educacion-madre-label"
                    id="educacion-madre-id"
                    value={state.educacionMadre}
                    label="Nivel Educación Madre"
                    name='educacion-madre'
                    onChange={handleChange}
                  >
                    <MenuItem value={''}>Seleccionar</MenuItem>
                    <MenuItem value={'Ninguno'}>Ninguno</MenuItem>
                    <MenuItem value={'No sabe'}>No sabe</MenuItem>
                    <MenuItem value={'No Aplica'}>No Aplica</MenuItem>
                    <MenuItem value={'Primaria incompleta'}>Primaria incompleta</MenuItem>
                    <MenuItem value={'Secundaria (Bachillerato) incompleta'}>Secundaria (Bachillerato) incompleta</MenuItem>
                    <MenuItem value={'Secundaria (Bachillerato) completa'}>Secundaria (Bachillerato) completa</MenuItem>
                    <MenuItem value={'Técnica o tecnológica incompleta'}>Técnica o tecnológica incompleta</MenuItem>
                    <MenuItem value={'Técnica o tecnológica completa'}>Técnica o tecnológica completa</MenuItem>
                    <MenuItem value={'Educación profesional incompleta'}>Educación profesional incompleta</MenuItem>
                    <MenuItem value={'Educación profesional completa'}>Educación profesional completa</MenuItem>
                    <MenuItem value={'Postgrado'}>Postgrado</MenuItem>
                  </Select>
                </FormControl>
                <FormControl>
                  <InputLabel id="computador-label">Computador en el Hogar</InputLabel>
                  <Select
                    labelId="computador-label"
                    id="computador-id"
                    value={state.computador}
                    label="Computador en el Hogar"
                    name='computador'
                    onChange={handleChange}
                  >
                    <MenuItem value={''}>Seleccionar</MenuItem>
                    <MenuItem value={'Si'}>Si</MenuItem>
                    <MenuItem value={'No'}>No</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <Box sx={{ m: 2 }} />
              <div>
                <FormControl>
                  <InputLabel id="libros-label">Libros en el Hogar</InputLabel>
                  <Select
                    labelId="libros-label"
                    id="libros-id"
                    value={state.libros}
                    label="Libros en el Hogar"
                    name='libros'
                    onChange={handleChange}
                  >
                    <MenuItem value={''}>Seleccionar</MenuItem>
                    <MenuItem value={'0 A 10 LIBROS'}>0 A 10 LIBROS</MenuItem>
                    <MenuItem value={'11 A 25 LIBROS'}>11 A 25 LIBROS</MenuItem>
                    <MenuItem value={'26 A 100 LIBROS'}>26 A 100 LIBROS</MenuItem>
                    <MenuItem value={'MÁS DE 100 LIBROS'}>MÁS DE 100 LIBROS</MenuItem>
                  </Select>
                </FormControl>
                <FormControl>
                  <InputLabel id="come-carne-label">Come carne,pescado, huevo en el Hogar</InputLabel>
                  <Select
                    labelId="come-carne-label"
                    id="come-carne-id"
                    value={state.comeCarne}
                    label="Come carne,pescado, huevo en el Hogar"
                    name='come-carne'
                    onChange={handleChange}
                  >
                    <MenuItem value={''}>Seleccionar</MenuItem>
                    <MenuItem value={'1 o 2 veces por semana'}>1 o 2 veces por semana</MenuItem>
                    <MenuItem value={'3 a 5 veces por semana'}>3 a 5 veces por semana</MenuItem>
                    <MenuItem value={'Todos o casi todos los días'}>Todos o casi todos los días</MenuItem>
                    <MenuItem value={'Nunca o rara vez comemos eso'}>Nunca o rara vez comemos eso</MenuItem>
                  </Select>
                </FormControl>
                <FormControl>
                  <InputLabel id="situa-econo-label">Situación económica en el Hogar</InputLabel>
                  <Select
                    labelId="situa-econo-label"
                    id="situa-econo-id"
                    value={state.situaEcono}
                    label="Situación economica en el Hogar"
                    name='situa-econo'
                    onChange={handleChange}
                  >
                    <MenuItem value={''}>Seleccionar</MenuItem>
                    <MenuItem value={'Peor'}>Peor que año pasado</MenuItem>
                    <MenuItem value={'Igual'}>Igual que año pasado</MenuItem>
                    <MenuItem value={'Mejor'}>Mejor que año pasado</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <Box sx={{ m: 2 }} />
              <Button sx={{ height: '56px' }} variant="contained" onClick={() => { handlePredecir(); setVisto(false) }} >Consultar</Button>
            </Box>
          </Card>
        </Container>
      </Page>
    </>
  );
}

Prediccion.propTypes = {
  dispatch: PropTypes.func.isRequired,
  state: PropTypes.object,
  handlePredecir: PropTypes.func,
  handleChange: PropTypes.func
}

const mapStateToProps = createStructuredSelector({
  state: makeSelectState()
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    handleChange: (event) => dispatch(change(event.target)),
    handlePredecir: () => dispatch(predecir())
  }
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default compose(withConnect)(Prediccion);