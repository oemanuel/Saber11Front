import { useEffect } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import {
  makeSelectperiodo,
  makeSelectlimitSup,
  makeSelectdepartamento,
  makeSelectmunicipio,
  makeSelectmunicipiosData,
  makeSelectlimitInf,
  makeSelectPuntaje,
  makeSelectProbabilidad
}
  from './selectors'
import { obtenerProbabilidad, change, obtenerMunicipios } from './actions'

// material
import { Box, Container, Card, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@material-ui/core';
// components
import Page from '../../components/Page';

// ----------------------------------------------------------------------

export function Probabilidad({
  handleObtenerProbabilidad,
  handleChange,
  periodo,
  departamento,
  municipio,
  handleObtenerMunicipios,
  municipiosData,
  puntaje,
  limitSup,
  limitInf,
  probabilidad
}) {
  useEffect(() => {
    handleObtenerMunicipios()
  }, [periodo, handleObtenerMunicipios])

  const municipiosss = municipiosData?.find(element => element.departamento === departamento)?.ciudades
  let arrayForSort = [];
  if (municipiosss !== undefined) {
    arrayForSort = [...municipiosss]
    arrayForSort = arrayForSort.sort()
  }
  return (
    <Page title="Tu Saber 11°">
      <Container maxWidth="xl">
        <Card>
          <Box sx={{ padding: '2rem' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '2rem' }}>
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
                  <MenuItem value={20211}>20211</MenuItem>
                  <MenuItem value={20202}>20202</MenuItem>
                  <MenuItem value={20201}>20201</MenuItem>
                  <MenuItem value={20192}>20192</MenuItem>
                  <MenuItem value={20182}>20182</MenuItem>
                  <MenuItem value={20181}>20181</MenuItem>
                  <MenuItem value={20172}>20172</MenuItem>
                  <MenuItem value={20171}>20171</MenuItem>
                </Select>
              </FormControl>

              <FormControl sx={{ width: 300 }} >
                <InputLabel id="departamentos-select-label">Departamento</InputLabel>
                <Select
                  labelId="departamentos-select-label"
                  id="departamentos-select"
                  value={departamento}
                  label="Departamento"
                  name="departamento"
                  onChange={handleChange}
                >
                  {municipiosData !== undefined && (
                    municipiosData.map((item, index) =>
                      <MenuItem key={index} value={item.departamento}>{item.departamento}</MenuItem>)
                  )
                  }

                </Select>
              </FormControl>
              <FormControl sx={{ width: 300 }}>
                <InputLabel id="municipios-select-label">Municipio</InputLabel>
                <Select
                  labelId="municipios-select-label"
                  id="municipios-select"
                  value={municipio}
                  label="Municipio"
                  name="municipios"
                  onChange={handleChange}
                >
                  <MenuItem value={''}>Ninguno</MenuItem>
                  {
                    arrayForSort.map((item, index) => <MenuItem key={index} value={item}>{item}</MenuItem>)
                  }

                </Select>
              </FormControl>

              <Button variant="contained" onClick={handleObtenerProbabilidad} >Consultar</Button>
            </Box>
            <FormControl sx={{ width: 300, mr: "1rem" }}>
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
            <FormControl sx={{ width: 150, mr: "1rem" }} >
              <TextField
                id="outlined-number"
                label="Limite Inferior"
                name="limit-inf"
                type="number"
                value={limitInf}
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl sx={{ width: 150 }} >
              <TextField
                id="outlined-number"
                label="Limite Superior"
                name="limit-sup"
                type="number"
                value={limitSup}
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={handleChange}
              />
            </FormControl>
            <Box sx={{mt:2}}/>
            {
              probabilidad?.respuesta && (
                <Typography variant='h6'>
                  ⚠️{probabilidad.respuesta}⚠️
                </Typography>
              )
            }
          </Box>

        </Card>
      </Container>
    </Page>
  );
}

Probabilidad.propTypes = {
  dispatch: PropTypes.func.isRequired,
  handleObtenerProbabilidad: PropTypes.func,
  periodo: PropTypes.number,
  departamento: PropTypes.string,
  municipio: PropTypes.string,
  handleChange: PropTypes.func,
  municipiosData: PropTypes.array,
  handleObtenerMunicipios: PropTypes.func,
  limitInf: PropTypes.string,
  limitSup: PropTypes.string,
  puntaje: PropTypes.string,
  probabilidad: PropTypes.object
}

const mapStateToProps = createStructuredSelector({
  periodo: makeSelectperiodo(),
  limitInf: makeSelectlimitInf(),
  departamento: makeSelectdepartamento(),
  municipio: makeSelectmunicipio(),
  municipiosData: makeSelectmunicipiosData(),
  limitSup: makeSelectlimitSup(),
  puntaje: makeSelectPuntaje(),
  probabilidad: makeSelectProbabilidad()
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    handleObtenerProbabilidad: () => dispatch(obtenerProbabilidad()),
    handleObtenerMunicipios: () => dispatch(obtenerMunicipios()),
    handleChange: (event) => dispatch(change(event.target))
  }
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default compose(withConnect)(Probabilidad);