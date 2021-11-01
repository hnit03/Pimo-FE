import React from 'react';
import useStyles from '../../../assets/jss/material-kit-pro-react/components/EventInfoPage/infodetailStyle';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LocationOn from '@material-ui/icons/LocationOn';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import DownloadModal from '../DownloadModal/DownloadModal';

export default function InfoDetails(props) {
   var bool= true;
    var today = new Date();
    var currentDay = today.getDate();
    var currentMonth = today.getMonth()+1;
    var currentYear = today.getFullYear();
    var parts =props.date.split('-');
    var month = parts[1];
    var partsDate =parts[2].split('T');
    var date = partsDate[0];
    var time = partsDate[1].split(':');
    var year = parts[0];
    var currentDate = new Date(currentYear, currentMonth, currentDay,today.getHours(),today.getMinutes(),today.getSeconds()); 
    var myDate = new Date(year, month, date,time[0],time[1],time[2]); 
    if(currentDate>myDate){
        var bool= false;
    }
   const classes = useStyles();
   return (
      <Box sx={{ flexGrow: 1 }} className={classes.box}>
         <Grid container spacing={2} className={classes.pageLeft_Style}>
            <Grid item xs={12} >
               <img className={classes.img} src={props.img}/>
            </Grid>
            <Grid item xs={0.5} >
            </Grid>
            <Grid item xs={9} >
               <h1 className={classes.h1}>{props.castingName}</h1>
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
               <DownloadModal bool={bool}/>
            </Grid>

         </Grid>
      </Box>
   );
}