// material
import { Card, CardHeader, Box } from '@material-ui/core';
//components
import Chart from '../../Chart'
// ----------------------------------------------------------------------


export default function AppWebsiteVisits() {
  
  return (
    <Card>
      <CardHeader title="Website Visits" subheader="(+43%) than last year" />
      <Box sx={{ p: 3, pb: 1 }} dir="ltr">
         <Chart></Chart>
      </Box>
    </Card>
  );
}
