import React from "react";
import useStyles from "../../../assets/jss/material-kit-pro-react/components/ModelInfoPage/travelNoticesStyle";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
export default function TravelNotices({ task }) {
   const classes = useStyles();
   var optionsRight = { day: 'numeric'};
   var optionsBottom = { year: 'numeric', month: 'long'};
   var startDate = new Date(task.startDate)
   var endDate = new Date(task.endDate)
   return (
      <Box sx={{ flexGrow: 1 }} className={classes.travelNotices_out_Style}>
         <Grid container spacing={1} className={classes.travelNotices_Style}>
          
            <Grid item xs={5} >
               <span className={classes.textTimeDate_Style}>{startDate.toLocaleDateString("vi-VN", optionsRight)}</span>
               <span className={classes.textTime_Style}>{startDate.toLocaleDateString("vi-VN", optionsBottom)}</span>
            </Grid>
            <Grid item xs={1} >
            <span className={classes.textTimeDate_Style}>-</span>
            </Grid>
            <Grid item xs={5} >
               <span className={classes.textTimeDate_Style}>{endDate.toLocaleDateString("vi-VN", optionsRight)}</span>
               <span className={classes.textTime_Style}>{endDate.toLocaleDateString("vi-VN", optionsBottom)}</span>
            </Grid>
            <Grid item xs={1} >
               <Divider className={classes.divider} orientation="vertical" flexItem></Divider>
            </Grid>
            <Grid item xs={12} >
               <div>
                  <span className={classes.travelName_Style}>{task.name}</span>
                  <span className={classes.textLocation_Style}> <LocationOnIcon className={classes.location_icon_small_Style}/>{task.location}</span>
               </div>
            </Grid>
         </Grid>
      </Box>
   );
}