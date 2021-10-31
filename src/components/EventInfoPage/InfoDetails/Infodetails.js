import React from 'react';
import useStyles from '../../../assets/jss/material-kit-pro-react/components/EventInfoPage/infodetailStyle';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LocationOn from '@material-ui/icons/LocationOn';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import DownloadModal from '../DownloadModal/DownloadModal';

export default function InfoDetails(props) {
   const classes = useStyles();
   const bool = true;
   return (
      <Box sx={{ flexGrow: 1 }} className={classes.box}>
         <Grid container spacing={2} className={classes.pageLeft_Style}>
            <Grid item xs={12} >
               <img className={classes.img} src={props.img}/>
            </Grid>
            <Grid item xs={0.5} >
            </Grid>
            <Grid item xs={9} >
               <h1>{props.castingName}</h1>
               <ul className={classes.ul}>
                  <li style={{ display: 'flex', }} className={classes.li}>
                     <LocationOn className={classes.icon} />
                     <span className={classes.text} >{props.castingAddress}</span>
                  </li>
               </ul>
               {bool ?
                  <Chip label="Đang diễn ra" className={classes.chipTrue} /> :
                  <Chip label="Đã kết thúc" className={classes.chipFalse} />
               }
            </Grid>
            <Grid item xs={2} >
               <DownloadModal />
            </Grid>

         </Grid>
      </Box>
   );
}