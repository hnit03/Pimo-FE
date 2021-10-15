import React, { useEffect } from 'react';
import useStyles from '../assets/jss/material-kit-pro-react/components/BrandInfoCard/brandInfoCardStyle';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import SectionFooter from "../components/Footer/SectionFooter";
import BrandInfoCard from '../components/BrandInfo/BrandInfoCard/BrandInfoCard';
import ListEvent from '../components/BrandInfo/ListEvent/ListEvent';
export default function BrandInfoPage(props) {

     const classes = useStyles();
     return (
          <>
               {
                    <div>
                         <Box sx={{ flexGrow: 1 }} className={classes.body}>
                              <Grid container spacing={2}>
                                   <Grid item xs={12} >
                                        <BrandInfoCard />
                                   </Grid>
                                   <Grid item xs={12}>
                                        <ListEvent />
                                   </Grid>
                              </Grid>
                         </Box>
                         <SectionFooter />
                    </div >
               }
          </>
     );
}
