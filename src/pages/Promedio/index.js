import { useEffect } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import {
  makeSelectperiodo,
  makeSelectPuntaje,
  makeSelectVariable,
  makeSelectData
}
  from './selectors'
import { obtenerData, change } from './actions'

// material
import { Box, Container, Card, Button, FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
// components
import Page from '../../components/Page';
import {
  AppPromedio
} from '../../components/_dashboard/app';

// ----------------------------------------------------------------------
export function DashboardApp({
  handleObtenerData,
  handleChange,
  periodo,
  data,
  variable,
  puntaje
}) {
  useEffect(() => {
    if (data === undefined) {
      handleObtenerData()
    }
  })
  return (
    <Page title="Tu Saber 11°">
      <Container maxWidth="xl">
        <Card>
          <Box sx={{ padding: '2rem', paddingBottom: '0' }}>
            <Box sx={{ display: 'flex', paddingBottom: '2rem' }}>
              <FormControl sx={{ width: 100 }}>
                <InputLabel id="demo-simple-select-label">Perdiodo</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={periodo}
                  label="Perdiodo"
                  name='periodo'
                  onChange={handleChange}
                >
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                </Select>
              </FormControl>
              <FormControl sx={{ width: 300, ml: '1rem' }} >
                <InputLabel id="variable-select-label">Variable</InputLabel>
                <Select
                  labelId="variable-select-label"
                  id="variable-select"
                  value={variable}
                  label="Variable"
                  name="variable"
                  onChange={handleChange}
                >
                  <MenuItem value={''}>Ninguno</MenuItem>
                  <MenuItem value={'ESTU_GENERO'}>GENERO</MenuItem>
                  <MenuItem value={'ESTU_TIENEETNIA'}>TIENE ETNIA</MenuItem>
                  <MenuItem value={'FAMI_ESTRATOVIVIENDA'}>ESTRATO VIVIENDA</MenuItem>
                  <MenuItem value={'FAMI_CUARTOSHOGAR'}>CUARTOS HOGAR</MenuItem>
                  <MenuItem value={'FAMI_PERSONASHOGAR'}>PERSONAS HOGAR</MenuItem>
                  <MenuItem value={'FAMI_TIENEINTERNET'}>TIENE INTERNET</MenuItem>
                  <MenuItem value={'FAMI_TIENESERVICIOTV'}>TIENE SERVICIO TV</MenuItem>
                  <MenuItem value={'FAMI_TIENECOMPUTADOR'}>TIENE COMPUTADOR</MenuItem>
                  <MenuItem value={'FAMI_TIENECONSOLAVIDEOJUEGOS'}>TIENE CONSOLA DE VIDEOJUEGOS</MenuItem>
                  <MenuItem value={'FAMI_TIENEAUTOMOVIL'}>TIENE AUTOMOVIL</MenuItem>
                  <MenuItem value={'FAMI_NUMLIBROS'}>NUMERO DE LIBROS</MenuItem>
                  <MenuItem value={'FAMI_SITUACIONECONOMICA'}>SITUACION ECONOMICA</MenuItem>
                  <MenuItem value={'FAMI_EDUCACIONPADRE'}>EDUCACION PADRE</MenuItem>
                  <MenuItem value={'FAMI_EDUCACIONMADRE'}>EDUCACION MADRE</MenuItem>
                  <MenuItem value={'FAMI_COMECARNEPESCADOHUEVO'}>FAMILIA COME CARNE, PESCADO, HUEVO</MenuItem>
                  <MenuItem value={'ESTU_DEDICACIONLECTURADIARIA'}>DEDICACION LECTURA DIARIA</MenuItem>
                  <MenuItem value={'ESTU_DEDICACIONINTERNET'}>DEDICACION INTERNET</MenuItem>
                  <MenuItem value={'ESTU_HORASSEMANATRABAJA'}>HORAS SEMANA TRABAJA</MenuItem>

                </Select>
              </FormControl>
              <FormControl sx={{ width: 300, mx: "1rem" }}>
                <InputLabel id="puntaje-select-label">Puntaje</InputLabel>
                <Select
                  labelId="puntaje-select-label"
                  id="puntaje-select"
                  value={puntaje}
                  label="Puntaje"
                  name="puntaje"
                  onChange={handleChange}
                >
                  <MenuItem value={'PUNT_LECTURA_CRITICA'}>LECTURA CRITICA</MenuItem>
                  <MenuItem value={'PUNT_MATEMATICAS'}>MATEMATICAS</MenuItem>
                  <MenuItem value={'PUNT_C_NATURALES'}>C. NATURALES</MenuItem>
                  <MenuItem value={'PUNT_SOCIALES_CIUDADANAS'}>SOCIALES & CIUDADANAS</MenuItem>
                  <MenuItem value={'PUNT_INGLES'}>INGLES</MenuItem>
                  <MenuItem value={'PUNT_GLOBAL'}>GLOBAL</MenuItem>
                </Select>
              </FormControl>
              <Button variant="contained" onClick={handleObtenerData} >Consultar</Button>
            </Box>
          </Box>
          <AppPromedio data={data} variable={variable} puntaje={puntaje} />
        </Card>

      </Container>
    </Page>
  );
}

DashboardApp.propTypes = {
  dispatch: PropTypes.func.isRequired,
  periodo: PropTypes.number,
  variable: PropTypes.string,
  puntaje: PropTypes.string,
  handleObtenerData: PropTypes.func,
  data: PropTypes.array
}

const mapStateToProps = createStructuredSelector({
  periodo: makeSelectperiodo(),
  variable: makeSelectVariable(),
  puntaje: makeSelectPuntaje(),
  data: makeSelectData()
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    handleObtenerData: () => dispatch(obtenerData()),
    handleChange: (event) => dispatch(change(event.target))
  }
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default compose(withConnect)(DashboardApp);