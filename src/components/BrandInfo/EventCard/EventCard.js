import React from 'react';
import useStyles from '../../../assets/jss/material-kit-pro-react/components/BrandInfoCard/eventCardStyle';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LocationOn from '@material-ui/icons/LocationOn';
import WorkIcon from '@mui/icons-material/Work';
import EventIcon from '@mui/icons-material/Event';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';

export default function ListEvent(props) {
    const classes = useStyles();
    return (
        <Box sx={{ flexGrow: 1 }} className={classes.box}>
            <Grid container spacing={1} className={classes.pageLeft_Style}>
                <Grid item xs={12} >
                    <img className={classes.imgBrand} src={props.img}></img>
                </Grid>
                <Grid item xs={12} className={classes.smallBox}>
                    <div className={classes.name}>
                        <h1 className={classes.title}>{props.value}</h1>
                    </div>
                    <ul className={classes.ul}>
                        <li style={{ display: 'flex', }} className={classes.li}>
                            <EventIcon className={classes.icon} /><span className={classes.text} >{props.dayTime}</span>
                        </li>
                        <li style={{ display: 'flex', }} className={classes.li}>
                            <LocationOn className={classes.icon} /><span className={classes.text} >{props.location}</span>
                        </li>
                    </ul>
                    {props.bool ?
                        <Chip label="Đang diễn ra" className={classes.chipTrue} /> :
                        <Chip label="Đã kết thúc" className={classes.chipFalse} />
                    }
                </Grid>
            </Grid>
        </Box>
    );
}