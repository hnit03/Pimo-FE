import React from "react";
import useStyles from "./style";
import DividerLine from "./Divider";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Divider from '@mui/material/Divider';

export default function TravelNotices(){
    const classes = useStyles();
    return(
        <>
            <div className={classes.travelNotices_out_Style}>
                <div className={classes.travelNotices_Style}>
                    <span className={classes.travelName_Style}><span className={classes.travelType_Style} >18+</span> Shooting proposes in Belgium</span>
                    <span className={classes.textTime_Style}>Paid(75) - Sep 21, 2021</span>
                    <span className={classes.textLocation_Style}> <LocationOnIcon className={classes.location_icon_small_Style}/>Ho Chi Minh City, Viet Nam</span>
                </div>
            </div>
        </>
    );
} 