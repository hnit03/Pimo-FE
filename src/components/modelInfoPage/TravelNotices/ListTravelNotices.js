import React from "react";
import useStyles from "../../../assets/jss/material-kit-pro-react/components/ModelInfoPage/travelNoticesStyle";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import TravelNotices from "./TravelNotices";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import image from '../../../assets/img/travel.png';
import image2 from '../../../assets/img/2.png';
import Divider from '@mui/material/Divider';
import TodayIcon from '@mui/icons-material/Today';
export default function ListTravelNotices({ model }) {
   const classes = useStyles();
   return (
      <Box sx={{ flexGrow: 1 }} className={classes.box}>
         <Grid container spacing={2}>
            <Grid item xs={12} >
               <div className={classes.boxLeft}>
                  <h1 className={classes.h1}>LỊCH TRÌNH SẮP TỚI</h1>
                  <Divider className={classes.divider_Style} ></Divider>
                  {
                     model.availabilityList.map(task => (
                        <TravelNotices task={task}/>
                     ))
                  }
               </div>
            </Grid>

         </Grid>
      </Box>
   );
}