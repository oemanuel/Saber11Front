import { useEffect } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import {
  makeSelectTopColegios,
  makeSelectmejoresColegiosX,
  makeSelectmejoresColegiosY,
  makeSelectperiodo,
  makeSelecttopNumero,
  makeSelectdepartamento,
  makeSelectmunicipio,
  makeSelectmunicipiosData,
  makeSelectnumeroEstudiantes
}
  from './selectors'
import { obtenerTopColegios, change, obtenerMunicipios } from './actions'

// material
import { Box, Container, Card, Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@material-ui/core';
import { DataGrid } from '@mui/x-data-grid';
// components
import Page from '../../components/Page';
import { AppMejoresColegios } from '../../components/_dashboard/app';

// ----------------------------------------------------------------------

export function DashboardApp({ topColegios,
  handleObtenerTopColegios,
  mejoresColegiosX,
  mejoresColegiosY,
  handleChange,
  periodo,
  topNumero,
  departamento,
  municipio,
  handleObtenerMunicipios,
  municipiosData,
  numeroEstudiantes,
  puntaje
}) {
  useEffect(() => {
    if (topColegios.length === 0) {
      handleObtenerTopColegios()
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

  let rows = [
    ...topColegios.map((registro, index) => {
      return {
        ...registro,
        id: index
      }
    }),
  ];

  const columns = [
    { field: 'posicion', headerName: 'Posición', width: 100 },
    { field: 'nombre', headerName: 'Nombre', width: 380 },
    { field: 'puntajepromedio', headerName: 'Puntaje Promedio', width: 380 },
    { field: 'departamento', headerName: 'Departamento', width: 380 },
    { field: 'municipio', headerName: 'Municipio', width: 380 },
    { field: 'area', headerName: 'Area', width: 380 },
    { field: 'bilingue', headerName: 'Bilingue', width: 380 },
    { field: 'caracter', headerName: 'Caracter', width: 380 },
    { field: 'naturaleza', headerName: 'Naturaleza', width: 380 },
    { field: 'numeroEstudiantes', headerName: 'N° Estudiantes', width: 380 },
    { field: 'promedioEstratoFamiliaEstudiante', headerName: 'Promedio Estratos', width: 380 },
  ]
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
              <FormControl sx={{ width: 100 }} >
                <TextField
                  id="outlined-number"
                  label="Top número"
                  name="topNumero"
                  type="number"
                  value={topNumero}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={handleChange}
                />
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
                  <MenuItem value={''}>Ninguno</MenuItem>
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

              <Button variant="contained" onClick={handleObtenerTopColegios} >Consultar</Button>
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

            <FormControl sx={{ width: 100 }} >
              <TextField
                id="outlined-number"
                label="Estudiantes"
                name="numeroEstudiantes"
                type="number"
                value={numeroEstudiantes}
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={handleChange}
              />
            </FormControl>
          </Box>
          <AppMejoresColegios x={mejoresColegiosX} y={mejoresColegiosY} />
          <Box sx={{ my: 5 }} />
          <Box sx={{ padding: '2rem', height: rows.length === 0 ? 200 : 600, width: '100%' }}>
            <DataGrid
              rows={rows}
              columns={columns}
            />
          </Box>
        </Card>
      </Container>
    </Page>
  );
}

DashboardApp.propTypes = {
  dispatch: PropTypes.func.isRequired,
  topColegios: PropTypes.array,
  handleObtenerTopColegios: PropTypes.func,
  mejoresColegiosX: PropTypes.array,
  mejoresColegiosY: PropTypes.array,
  periodo: PropTypes.number,
  topNumero: PropTypes.string,
  departamento: PropTypes.string,
  municipio: PropTypes.string,
  handleChange: PropTypes.func,
  municipiosData: PropTypes.array,
  handleObtenerMunicipios: PropTypes.func,
  numeroEstudiantes: PropTypes.string
}

const mapStateToProps = createStructuredSelector({
  topColegios: makeSelectTopColegios(),
  mejoresColegiosX: makeSelectmejoresColegiosX(),
  mejoresColegiosY: makeSelectmejoresColegiosY(),
  periodo: makeSelectperiodo(),
  topNumero: makeSelecttopNumero(),
  departamento: makeSelectdepartamento(),
  municipio: makeSelectmunicipio(),
  municipiosData: makeSelectmunicipiosData(),
  numeroEstudiantes: makeSelectnumeroEstudiantes()
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    handleObtenerTopColegios: () => dispatch(obtenerTopColegios()),
    handleObtenerMunicipios: () => dispatch(obtenerMunicipios()),
    handleChange: (event) => dispatch(change(event.target))
  }
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default compose(withConnect)(DashboardApp);