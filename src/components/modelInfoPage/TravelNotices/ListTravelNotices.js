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
         <Grid item xs={1} >
         </Grid>
            <Grid item xs={10} >
               <div className={classes.boxLeft}>
                  <h1 className={classes.h1}>LỊCH TRÌNH SẮP TỚI</h1>
                  <Divider className={classes.divider_Style} ></Divider>
                  <Grid container spacing={1}> 
                  {
                     model.availabilityList.length>0?
                     model.availabilityList.map(task => (
                           <Grid item xs={4} >
                              <TravelNotices task={task} />
                           </Grid>
                     )):<span className={classes.noneText} >Người mẫu này chưa có lịch trình trong thời gian tới</span>
                  }
                  </Grid>
               </div>
            </Grid>

         </Grid>
      </Box>
   );
}