import { useEffect } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import {
  makeSelectperiodo,
  makeSelectdepartamento,
  makeSelectmunicipio,
  makeSelectmunicipiosData,
  makeSelectpuntajesEstudiantes
}
  from './selectors'
import { obtenerPuntajesEstudiantes, change, obtenerMunicipios } from './actions'

// material
import { Box, Container, Card, Button, FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
// components
import Page from '../../components/Page';
import { GraphPuntajesEstudiantes } from '../../components/_dashboard/app';

// ----------------------------------------------------------------------

export function AppPuntajesEstudiantes({
  handleObtenerPuntajesEstudiantes,
  handleChange,
  periodo,
  departamento,
  municipio,
  handleObtenerMunicipios,
  municipiosData,
  puntajesEstudiantesData,
  puntaje
}) {
  useEffect(() => {
    if (puntajesEstudiantesData === undefined) {
      handleObtenerPuntajesEstudiantes()
    }
  })
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
          <Box sx={{ padding: '2rem', paddingBottom: '0' }}>
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

              <Button variant="contained" onClick={handleObtenerPuntajesEstudiantes} >Consultar</Button>
            </Box>
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

            <GraphPuntajesEstudiantes data={puntajesEstudiantesData} />

          </Box>

        </Card>
      </Container>
    </Page>
  );
}

AppPuntajesEstudiantes.propTypes = {
  dispatch: PropTypes.func.isRequired,
  handleObtenerPuntajesEstudiantes: PropTypes.func,
  periodo: PropTypes.number,
  departamento: PropTypes.string,
  municipio: PropTypes.string,
  handleChange: PropTypes.func,
  municipiosData: PropTypes.array,
  handleObtenerMunicipios: PropTypes.func,
  puntajesEstudiantesData: PropTypes.object
}

const mapStateToProps = createStructuredSelector({
  periodo: makeSelectperiodo(),
  departamento: makeSelectdepartamento(),
  municipio: makeSelectmunicipio(),
  municipiosData: makeSelectmunicipiosData(),
  puntajesEstudiantesData: makeSelectpuntajesEstudiantes()
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    handleObtenerPuntajesEstudiantes: () => dispatch(obtenerPuntajesEstudiantes()),
    handleObtenerMunicipios: () => dispatch(obtenerMunicipios()),
    handleChange: (event) => dispatch(change(event.target))
  }
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default compose(withConnect)(AppPuntajesEstudiantes);