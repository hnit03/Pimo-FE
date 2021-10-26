import React, { useEffect } from 'react';
import useStyles from '../assets/jss/material-kit-pro-react/components/EventInfoPage/eventInfoCardStyle';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import SectionFooter from "../components/Footer/SectionFooter";
import InfoDetails from '../components/EventInfoPage/InfoDetails/Infodetails';
import RequirementInfo from '../components/EventInfoPage/RequirementInfo/RequirementInfo';
import BrandCard from '../components/EventInfoPage/BrandCard/BrandCard';
import DescriptionCard from '../components/EventInfoPage/DescriptionCard/DescriptionCard';
export default function EventInfoPage(props) {

   const classes = useStyles();
   return (
      <>
         {
            <div>
               <Box sx={{ flexGrow: 1 }} className={classes.body}>
                  <Grid container spacing={2}>
                     <Grid item xs={12} >
                        <InfoDetails />
                     </Grid>
                     {/* <Box sx={{ flexGrow: 1 }} className={classes.body1}>
                        <Grid container spacing={2}>
                        <Grid item xs={6}>
                        <RequirementInfo/>
                     </Grid>
                     <Grid item xs={6}>
                        <BrandCard/>
                     </Grid>
                        </Grid>
                     </Box> */}
                     <Grid item xs={12}>
                        <div className={classes.body1}>
                           <div className={classes.body2}><RequirementInfo/></div>
                           <div className={classes.body2}><BrandCard/></div>
                        </div>
                     </Grid>
                     <Grid item xs={12}>
                        <DescriptionCard />
                     </Grid>
                  </Grid>
               </Box>
               <SectionFooter />
            </div >
         }
      </>
   );
}
