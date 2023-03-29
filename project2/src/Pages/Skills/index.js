


import Card1 from '../../Components/Card1'
import { Grid } from '@mui/material';
import Card2 from '../../Components/Card2';
import Card3 from '../../Components/Card3';
import Card4 from '../../Components/Card4';
import Card5 from '../../Components/Card5';
import Card6 from '../../Components/Card6';
import Card7 from '../../Components/Card7';
import Card9 from '../../Components/Card9';
import Card8 from '../../Components/Card8';
export default function Skills(){
  return(
    <>
      <Grid container sx={{ p: 3 }} spacing={4}>
        <Grid item xs={4}>
      <Card1/>
      </Grid>
      <Grid item xs={4}>
      <Card2/>
      </Grid>
      <Grid item xs={4}>
      <Card3/>
      </Grid>
      <Grid item xs={4}>
      <Card4/>
      </Grid>
      <Grid item xs={4}>
      <Card5/>
      </Grid>
      <Grid item xs={4}>
      <Card6/>
      </Grid>
      <Grid item xs={4}>
      <Card7/>
      </Grid>
      <Grid item xs={4}>
      <Card9/>
      </Grid>
      <Grid item xs={4}>
      <Card8/>
      </Grid>
      </Grid>
    </>
  )
}