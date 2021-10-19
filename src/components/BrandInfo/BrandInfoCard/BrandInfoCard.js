import React from 'react';
import useStyles from '../../../assets/jss/material-kit-pro-react/components/BrandInfoCard/brandInfoCardStyle';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LocationOn from '@material-ui/icons/LocationOn';
import WorkIcon from '@mui/icons-material/Work';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailIcon from '@mui/icons-material/Mail';
import Divider from '@mui/material/Divider';

export default function StyleCard({ brand }) {
   const classes = useStyles();
   return (
      <Box sx={{ flexGrow: 1 }} className={classes.box}>
         <Grid container spacing={2} className={classes.pageLeft_Style}>
            <Grid item xs={1} >
            </Grid>
            <Grid item xs={3.5} >
               <div>
                  <img className={classes.logoBrand} src={brand.brand.logo} />
               </div>
            </Grid>
            <Grid item xs={0.3} >
            </Grid>
            <Grid item xs={6}>
               <div className={classes.model_info_Style}>
                  <h1 className={classes.title}>{brand.brand.name}</h1>
                  <ul className={classes.ul}>
                     <li style={{ display: 'flex', }} className={classes.li}>
                        <WorkIcon className={classes.icon} /><span className={classes.text} >Fashion</span>
                     </li>
                     <li style={{ display: 'flex', }} className={classes.li}>
                        <MailIcon className={classes.icon} /><span className={classes.text} >{brand.brand.mail}</span>
                     </li>
                     <li style={{ display: 'flex', }} className={classes.li}>
                        <LocalPhoneIcon className={classes.icon} /><span className={classes.text} >{brand.brand.phone}</span>
                     </li>
                     <li style={{ display: 'flex', }} className={classes.li}>
                        <LocationOn className={classes.icon} /><span className={classes.text} >{brand.brand.address}</span>
                     </li>
                  </ul>
                  <Divider className={classes.divider_Style} >Mô tả</Divider>
               </div>
            </Grid>
            <Grid item xs={1} >
            </Grid>
            <Grid item xs={1} >
            </Grid>
            <Grid item xs={10} >
               <div className={classes.textLocation}>
               {brand.brand.description}
               </div>
            </Grid>
         </Grid>
      </Box>
   );
}