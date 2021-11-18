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
  makeSelectListaColegios,
  makeSelectColegio,
  makeSelectRegistros
}
  from './selectors'
import { obtenerColegios, change, obtenerMunicipios, obtenerRegistros } from './actions'

// material
import { Box, Container, Card, Button, FormControl, InputLabel, MenuItem, Select, Autocomplete, TextField } from '@material-ui/core';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
// components
import Page from '../../components/Page';

// ----------------------------------------------------------------------

export function DashboardApp({
  handleObtenerColegios,
  handleChange,
  periodo,
  departamento,
  municipio,
  handleObtenerMunicipios,
  municipiosData,
  listaColegios,
  colegio,
  handleObtenerRegistros,
  registros
}) {

  useEffect(() => {
    handleObtenerMunicipios()
  }, [periodo, handleObtenerMunicipios])

  useEffect(() => {
    handleObtenerColegios()
  }, [municipio, handleObtenerColegios])

  const municipiosss = municipiosData?.find(element => element.departamento === departamento)?.ciudades
  let arrayForSort = [];
  if (municipiosss !== undefined) {
    arrayForSort = [...municipiosss]
    arrayForSort = arrayForSort.sort()
  }
  const rows = [
    ...registros.map((registro, index) => {
      return {
        ...registro,
        id: index
      }
    })
  ];
  console.log(rows)

  const columns = [
    { field: 'COLE_AREA_UBICACION', headerName: 'COLE_AREA_UBICACION', width: 200 },
    { field: 'COLE_BILINGUE', headerName: 'COLE_BILINGUE', width: 150 },
    { field: 'COLE_CALENDARIO', headerName: 'COLE_CALENDARIO', width: 200 },
    { field: 'COLE_CARACTER', headerName: 'COLE_CARACTER', width: 250 },
    { field: 'COLE_JORNADA', headerName: 'COLE_JORNADA', width: 150 },
    { field: 'COLE_NATURALEZA', headerName: 'COLE_NATURALEZA', width: 200 },
    { field: 'DESEMP_C_NATURALES', headerName: 'DESEMP_C_NATURALES', width: 200 },
    { field: 'DESEMP_INGLES', headerName: 'DESEMP_INGLES', width: 150 },
    { field: 'DESEMP_LECTURA_CRITICA', headerName: 'DESEMP_LECTURA_CRITICA', width: 250 },
    { field: 'DESEMP_MATEMATICAS', headerName: 'DESEMP_MATEMATICAS', width: 200 },
    { field: 'DESEMP_SOCIALES_CIUDADANAS', headerName: 'DESEMP_SOCIALES_CIUDADANAS', width: 250 },
    { field: 'ESTU_DEDICACIONINTERNET', headerName: 'ESTU_DEDICACIONINTERNET', width: 250 },
    { field: 'ESTU_DEDICACIONLECTURADIARIA', headerName: 'ESTU_DEDICACIONLECTURADIARIA', width: 280 },
    { field: 'ESTU_DEPTO_RESIDE', headerName: 'ESTU_DEPTO_RESIDE', width: 200 },
    { field: 'ESTU_EDAD', headerName: 'ESTU_EDAD', width: 150 },
    { field: 'ESTU_GENERACION-E', headerName: 'ESTU_GENERACION-E', width: 250 },
    { field: 'ESTU_GENERO', headerName: 'ESTU_GENERO', width: 150 },
    { field: 'ESTU_HORASSEMANATRABAJA', headerName: 'ESTU_HORASSEMANATRABAJA', width: 200 },
    { field: 'ESTU_MCPIO_RESIDE', headerName: 'ESTU_MCPIO_RESIDE', width: 200 },
    { field: 'ESTU_TIENEETNIA', headerName: 'ESTU_TIENEETNIA', width: 200 },
    { field: 'FAMI_COMECARNEPESCADOHUEVO', headerName: 'FAMI_COMECARNEPESCADOHUEVO', width: 280 },
    { field: 'FAMI_CUARTOSHOGAR', headerName: 'FAMI_CUARTOSHOGAR', width: 280 },
    { field: 'FAMI_EDUCACIONMADRE', headerName: 'FAMI_EDUCACIONMADRE', width: 280 },
    { field: 'FAMI_EDUCACIONPADRE', headerName: 'FAMI_EDUCACIONPADRE', width: 280 },
    { field: 'FAMI_ESTRATOVIVIENDA', headerName: 'FAMI_ESTRATOVIVIENDA', width: 280 },
    { field: 'FAMI_NUMLIBROS', headerName: 'FAMI_NUMLIBROS', width: 280 },
    { field: 'FAMI_PERSONASHOGAR', headerName: 'FAMI_PERSONASHOGAR', width: 280 },
    { field: 'FAMI_SITUACIONECONOMICA', headerName: 'FAMI_SITUACIONECONOMICA', width: 280 },
    { field: 'FAMI_TIENEAUTOMOVIL', headerName: 'FAMI_TIENEAUTOMOVIL', width: 280 },
    { field: 'FAMI_TIENECOMPUTADOR', headerName: 'FAMI_TIENECOMPUTADOR', width: 280 },
    { field: 'FAMI_TIENECONSOLAVIDEOJUEGOS', headerName: 'FAMI_TIENECONSOLAVIDEOJUEGOS', width: 280 },
    { field: 'FAMI_TIENEINTERNET', headerName: 'FAMI_TIENEINTERNET', width: 280 },
    { field: 'FAMI_TIENESERVICIOTV', headerName: 'FAMI_TIENESERVICIOTV', width: 280 },
    { field: 'PERCENTIL_GLOBAL', headerName: 'PERCENTIL_GLOBAL', width: 280 },
    { field: 'PUNT_C_NATURALES', headerName: 'PUNT_C_NATURALES', width: 280 },
    { field: 'PUNT_GLOBAL', headerName: 'PUNT_GLOBAL', width: 280 },
    { field: 'PUNT_INGLES', headerName: 'PUNT_INGLES', width: 280 },
    { field: 'PUNT_LECTURA_CRITICA', headerName: 'PUNT_LECTURA_CRITICA', width: 280 },
    { field: 'PUNT_MATEMATICAS', headerName: 'PUNT_MATEMATICAS', width: 280 },
    { field: 'PUNT_SOCIALES_CIUDADANAS', headerName: 'PUNT_SOCIALES_CIUDADANAS', width: 280 },

  ];

  return (
    <Page title="Tu Saber 11°">
      <Container maxWidth="xl">
        <Card>
          <Box sx={{ padding: '2rem', minHeight: '80vh' }}>
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
                  {
                    arrayForSort.map((item, index) => <MenuItem key={index} value={item}>{item}</MenuItem>)
                  }

                </Select>
              </FormControl>

              <Button variant="contained" onClick={handleObtenerRegistros} >Consultar</Button>
            </Box>
            <FormControl sx={{ width: 300 }}>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={listaColegios}
                value={colegio}
                name="colegios"
                sx={{ width: 300 }}
                onChange={handleChange}
                isOptionEqualToValue={(option, value) => option.id === value.id}
                renderInput={(params) => <TextField {...params} label="Colegio" />}
              />
            </FormControl>
            <Box sx={{ my: 5 }} />
            <div style={{ height: rows.length === 0 ? 200 : 60 * (rows.length + 1), width: '100%' }}>
              <DataGrid
                rows={rows}
                columns={columns}
                pageSize={20}
                rowsPerPageOptions={[20]}
              />
            </div>
          </Box>

        </Card>
      </Container>
    </Page>
  );
}

DashboardApp.propTypes = {
  dispatch: PropTypes.func.isRequired,
  topColegios: PropTypes.object,
  handleObtenerColegios: PropTypes.func,
  mejoresColegiosX: PropTypes.array,
  mejoresColegiosY: PropTypes.array,
  periodo: PropTypes.number,
  topNumero: PropTypes.string,
  departamento: PropTypes.string,
  municipio: PropTypes.string,
  handleChange: PropTypes.func,
  municipiosData: PropTypes.array,
  handleObtenerMunicipios: PropTypes.func,
  handleObtenerRegistros: PropTypes.func,
  numeroEstudiantes: PropTypes.string,
  listaColegios: PropTypes.array,
  registros: PropTypes.array,
  colegio: PropTypes.string
}

const mapStateToProps = createStructuredSelector({
  periodo: makeSelectperiodo(),
  departamento: makeSelectdepartamento(),
  municipio: makeSelectmunicipio(),
  municipiosData: makeSelectmunicipiosData(),
  listaColegios: makeSelectListaColegios(),
  colegio: makeSelectColegio(),
  registros: makeSelectRegistros()
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    handleObtenerColegios: () => dispatch(obtenerColegios()),
    handleObtenerMunicipios: () => dispatch(obtenerMunicipios()),
    handleObtenerRegistros: () => dispatch(obtenerRegistros()),
    handleChange: (event) => dispatch(change(event.target))
  }
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default compose(withConnect)(DashboardApp);