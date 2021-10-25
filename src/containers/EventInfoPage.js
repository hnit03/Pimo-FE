import React, { useEffect } from 'react';
import useStyles from '../assets/jss/material-kit-pro-react/components/EventInfoPage/eventInfoCardStyle';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import SectionFooter from "../components/Footer/SectionFooter";
import InfoDetails from '../components/EventInfoPage/InfoDetails/Infodetails';

export default function EventInfoPage(props) {

   const classes = useStyles();
   return (
      <>
         {
            <div>
               <Box sx={{ flexGrow: 1 }} className={classes.body}>
                  <Grid container spacing={2}>
                     <Grid item xs={12} >
                        <InfoDetails/>
                     </Grid>
                     <Grid item xs={12}>
                        
                     </Grid>
                  </Grid>
               </Box>
               <SectionFooter />
            </div >
         }
      </>
   );
}
