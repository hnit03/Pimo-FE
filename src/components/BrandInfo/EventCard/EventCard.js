import React, { useCallback } from 'react';
import useStyles from '../../../assets/jss/material-kit-pro-react/components/BrandInfoCard/eventCardStyle';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LocationOn from '@material-ui/icons/LocationOn';
import EventIcon from '@mui/icons-material/Event';
import Chip from '@mui/material/Chip';
import { useHistory } from 'react-router-dom';
import TodayIcon from '@mui/icons-material/Today';


export default function ListEvent(props) {
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
    const history = useHistory();
    const onClickInfo = useCallback((param) => () => history.push(`/event-info/${param}`), [history]);
    return (
        <Box sx={{ flexGrow: 1 }} className={classes.box} onClick={onClickInfo(props.id)}>
            <Grid container spacing={1} className={classes.pageLeft_Style}>
                <Grid item xs={12} >
                    <img className={props.style ? classes.imgBrand : classes.imgBrandSmall} src={props.img}></img>
                </Grid>
                <Grid item xs={12} className={classes.smallBox}>
                    <div className={classes.name}>
                        <h1 className={props.style ? classes.title : classes.titleSmall}>{props.value}</h1>
                    </div>
                    <ul className={classes.ul}>
                        <li style={{ display: 'flex', }} className={classes.li}>
                            <TodayIcon className={props.style ? classes.icon : classes.iconSmall} />
                            <span className={classes.textOn} >Ngày bắt đầu:</span>
                            <span className={classes.text} >{props.dayTime}</span>
                        </li>
                        <li style={{ display: 'flex', }} className={classes.li}>
                            <EventIcon className={props.style ? classes.icon : classes.iconSmall} />
                            <span className={classes.textOn} >Ngày kết thúc:</span>
                            <span className={classes.text} >{props.endTime}</span>
                        </li>
                        <li style={{ display: 'flex', }} className={classes.li}>
                            <LocationOn className={props.style ? classes.icon : classes.iconSmall} />
                            <span className={classes.textIn} >{props.location}</span>
                        </li>
                    </ul>
                    {
                    bool ?
                        <Chip label="Đang diễn ra" className={props.style ? classes.chipTrue : classes.chipTrueSmall} /> :
                        <Chip label="Đã kết thúc" className={props.style ? classes.chipFalse : classes.chipFalseSmall} />
                    }
                </Grid>
            </Grid>
        </Box>
    );
}