import React from "react";
import useStyles from "../../../assets/jss/material-kit-pro-react/components/ModelInfoPage/travelNoticesStyle";
import LocationOnIcon from '@material-ui/icons/LocationOn';

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