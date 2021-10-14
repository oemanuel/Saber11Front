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
import { Box, /*Grid, */Container,/* Typography, */Card, Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@material-ui/core';
// components
import Page from '../../components/Page';
import {
  /* AppTasks,
   AppNewUsers,
   AppBugReports,
   AppItemOrders,
   AppNewsUpdate,
   AppWeeklySales,
   AppOrderTimeline,
   AppCurrentVisits,
   AppWebsiteVisits,
   AppTrafficBySite,
   AppCurrentSubject,
   AppConversionRates,*/
  AppMejoresColegios
} from '../../components/_dashboard/app';

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
  numeroEstudiantes
}) {
  useEffect(() => {
    if (topColegios === undefined) {
      handleObtenerTopColegios()
    }
  })
  useEffect(() => {
    handleObtenerMunicipios()
  }, [periodo, handleObtenerMunicipios])
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
                    municipiosData.map((item, index) => <MenuItem key={index} value={item.departamento}>{item.departamento}</MenuItem>)
                  )
                  }

                </Select>
              </FormControl>
              <FormControl sx={{ width: 300 }}>
                <InputLabel id="municipios-select-label">Municipios</InputLabel>
                <Select
                  labelId="municipios-select-label"
                  id="municipios-select"
                  value={municipio}
                  label="Municipios"
                  name="municipios"
                  onChange={handleChange}
                >
                  <MenuItem value={''}>Ninguno</MenuItem>
                  {
                    departamento !== '' && (
                      municipiosData.find(element => element.departamento === departamento)?.ciudades?.map((item, index) => <MenuItem key={index} value={index}>{item}</MenuItem>)
                    )
                  }

                </Select>
              </FormControl>
              <Button variant="contained" onClick={handleObtenerTopColegios} >Consultar</Button>
            </Box>
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
        </Card>
        <>
          {/*
        <Box sx={{ pb: 5 }}>
          <Typography variant="h4">Hi, Welcome back</Typography>
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AppWeeklySales />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppNewUsers />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppItemOrders />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppBugReports />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppWebsiteVisits />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppConversionRates />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentSubject />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppNewsUpdate />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppOrderTimeline />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppTrafficBySite />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppTasks />
          </Grid>
        </Grid>*/}
        </>
      </Container>
    </Page>
  );
}

DashboardApp.propTypes = {
  dispatch: PropTypes.func.isRequired,
  topColegios: PropTypes.object,
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