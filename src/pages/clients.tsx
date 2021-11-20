import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Orders from '../components/orders';

function Clients() {
  return (
    <>
      <Grid item xs={12}>
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
          <Orders />
        </Paper>
      </Grid>
    </>
  );
}

export default Clients