import { useEffect } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import {
  makeSelectdesempenosPuntajes,
  makeSelectdepartamento,
  makeSelectmunicipio,
  makeSelectmunicipiosData,
  makeSelectcalendario,
  makeSelectpuntaje,
  makeSelectcolegiosData,
  makeSelectcolegio,
}
  from './selectors'
import { obtenerDesempenos, change, obtenerMunicipios, obtenerColegios } from './actions'

// material
import {
  Box, Container, Card, Button, FormControl, InputLabel, MenuItem, Select, Divider,
  Autocomplete, TextField
} from '@material-ui/core';
// components
import Page from '../../components/Page';
import { AppDesempenos } from '../../components/_dashboard/app';

// ----------------------------------------------------------------------

export function DesempenoApp({
  desempenoData,
  desempenosPuntajes,
  calendario,
  handleObtenerDesempenos,
  handleChange,
  departamentoD,
  municipioD,
  handleObtenerMunicipios,
  municipiosData,
  puntaje,
  colegio,
  colegiosData,
  handleObtenerColegios,
}) {
  useEffect(() => {
    if (desempenoData === undefined) {
      handleObtenerDesempenos()
    }
  }, [desempenoData, handleObtenerDesempenos])

  useEffect(() => {
    handleObtenerMunicipios()
  }, [calendario, handleObtenerMunicipios])

  useEffect(() => {
    handleObtenerColegios()
  }, [municipioD, handleObtenerColegios])

  const municipiosss = municipiosData?.find(element => element.departamento === departamentoD)?.ciudades
  let arrayForSort = [];
  if (municipiosss !== undefined) {
    arrayForSort = [...municipiosss]
    arrayForSort = arrayForSort.sort()
  }

  return (
    <Page title="Tu Saber 11°">
      <Container maxWidth="xl">
        <Card>
          <Box sx={{ padding: '2rem', paddingBottom: '0' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '2rem' }}>
              <FormControl sx={{ width: 300 }} >
                <InputLabel id="calendario-select-label-desempenos">Calendario</InputLabel>
                <Select
                  labelId="calendario-select-label-desempenos"
                  id="calendario-select-desempenos"
                  value={calendario}
                  label="calendario-desempenos"
                  name="calendario-desempenos"
                  onChange={handleChange}
                >
                  <MenuItem value={'A'}>A</MenuItem>
                  <MenuItem value={'B'}>B</MenuItem>

                </Select>
              </FormControl>

              <FormControl sx={{ width: 300 }} >
                <InputLabel id="departamentos-select-label-desempenos">Departamento</InputLabel>
                <Select
                  labelId="departamentos-select-label-desempenos"
                  id="departamentos-select-desempenos"
                  value={departamentoD}
                  label="Departamentos-desempenos"
                  name="departamentos-desempenos"
                  onChange={handleChange}
                >
                  <MenuItem value={''}>País</MenuItem>
                  {municipiosData !== undefined && (
                    municipiosData.map((item, index) =>
                      <MenuItem key={index} value={item.departamento}>{item.departamento}</MenuItem>)
                  )
                  }

                </Select>
              </FormControl>


              <Button variant="contained" onClick={handleObtenerDesempenos} >Consultar</Button>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'rigth', paddingBottom: '2rem' }}>
              <FormControl sx={{ width: 300, marginRight: '200px' }}>
                <InputLabel id="municipios-select-label-desempenos">Municipio</InputLabel>
                <Select
                  labelId="municipios-select-label-desempenos"
                  id="municipios-select-desempenos"
                  value={municipioD}
                  label="Municipios-desempenos"
                  name="municipios-desempenos"
                  onChange={handleChange}
                >
                  <MenuItem value={''}>Ninguno</MenuItem>
                  {
                    arrayForSort.map((item, index) => <MenuItem key={index} value={item}>{item}</MenuItem>)
                  }

                </Select>
              </FormControl>

              <FormControl sx={{ width: 300 }}>
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={colegiosData}
                  value={colegio}
                  name="colegios-desempeno"
                  sx={{ width: 300 }}
                  onChange={handleChange}
                  isOptionEqualToValue={(option, value) => option.id === value.id}
                  renderInput={(params) => <TextField {...params} label="Colegio" />}
                />
              </FormControl>

              <>
              </>
            </Box>
            <Divider />
            <br></br>
            <FormControl sx={{ width: 300 }}>
              <InputLabel id="puntaje-select-label">Puntaje</InputLabel>
              <Select
                labelId="puntaje-select-label"
                id="puntaje-select"
                value={puntaje}
                label="Puntaje"
                name="puntaje-desempenos"
                onChange={handleChange}
              >
                <MenuItem value={'PUNT_MATEMATICAS'}>MATEMATICAS</MenuItem>
                <MenuItem value={'PUNT_C_NATURALES'}>C. NATURALES</MenuItem>
                <MenuItem value={'PUNT_SOCIALES_CIUDADANAS'}>SOCIALES & CIUDADANAS</MenuItem>
                <MenuItem value={'PUNT_INGLES'}>INGLES</MenuItem>
                <MenuItem value={'PUNT_LECTURA_CRITICA'}>LECTURA CRITICA</MenuItem>
                <MenuItem value={'PUNT_GLOBAL'}>GLOBAL</MenuItem>
              </Select>
            </FormControl>

          </Box>
          <Container>
            {desempenosPuntajes ? <AppDesempenos data={desempenosPuntajes} puntaje={puntaje} /> : <></>}

          </Container>
        </Card>
      </Container>
    </Page>
  );
}

DesempenoApp.propTypes = {
  dispatch: PropTypes.func.isRequired,
  departamentoD: PropTypes.string,
  municipioD: PropTypes.string,
  handleChange: PropTypes.func,
  municipiosData: PropTypes.array,
  handleObtenerMunicipios: PropTypes.func,
  calendario: PropTypes.string,
  puntaje: PropTypes.string,
  desempenosPuntajes: PropTypes.object,
  handleObtenerColegios: PropTypes.func,
  colegio: PropTypes.string,
  colegiosData: PropTypes.array,
}

const mapStateToProps = createStructuredSelector({
  departamentoD: makeSelectdepartamento(),
  municipioD: makeSelectmunicipio(),
  municipiosData: makeSelectmunicipiosData(),
  calendario: makeSelectcalendario(),
  puntaje: makeSelectpuntaje(),
  desempenosPuntajes: makeSelectdesempenosPuntajes(),
  colegiosData: makeSelectcolegiosData(),
  colegio: makeSelectcolegio(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    handleObtenerDesempenos: () => dispatch(obtenerDesempenos()),
    handleObtenerMunicipios: () => dispatch(obtenerMunicipios()),
    handleObtenerColegios: () => dispatch(obtenerColegios()),
    handleChange: (event) => dispatch(change(event.target))
  }
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default compose(withConnect)(DesempenoApp);