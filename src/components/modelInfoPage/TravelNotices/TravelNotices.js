import React from "react";
import useStyles from "../../../assets/jss/material-kit-pro-react/components/ModelInfoPage/travelNoticesStyle";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
export default function TravelNotices() {
    const classes = useStyles();
    return (
        <Box sx={{ flexGrow: 1 }} className={classes.travelNotices_out_Style}>
            <Grid container spacing={2} className={classes.travelNotices_Style}>
                <Grid item xs={2.5} >
                    <span className={classes.textTimeDate_Style}>8</span>
                    <span className={classes.textTime_Style}>Tháng 10, 2021</span>
                </Grid>
                <Grid item xs={0.5} >
                    <Divider className={classes.divider} orientation="vertical" flexItem></Divider>
                </Grid>

                <Grid item xs={8.5} >
                    <div>
                        <span className={classes.travelName_Style}>Catwalk Runway - bộ sưu tập Ánh sáng </span>
                        <span className={classes.textLocation_Style}> <LocationOnIcon className={classes.location_icon_small_Style} />Ho Chi Minh City, Viet Nam</span>
                    </div>
                </Grid>
            </Grid>
        </Box>
    );
}