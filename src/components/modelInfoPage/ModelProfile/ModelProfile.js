import React from "react";
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';
import useStyles from "../../../assets/jss/material-kit-pro-react/components/ModelInfoPage/modelProfileStyle";
import LocationOn from '@material-ui/icons/LocationOn';
import WcIcon from '@mui/icons-material/Wc';
import EventNoteIcon from '@mui/icons-material/EventNote';
import Grid from '@mui/material/Grid';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';


const Root = styled('div')(({ theme }) => ({
    width: '100%',
    ...theme.typography.body2,
    '& > :not(style) + :not(style)': {
        marginTop: theme.spacing(2),
    },
}));

export default function ModelProfile(props) {
    const classes = useStyles();
    return (
        <Root>
            <div>
                <h1 className={classes.title}>{props.name}</h1>
                <Grid container spacing={2} className={classes.pageLeft_Style}>
                    <Grid item xs={6} >
                        <ul className={classes.ul}>
                            <li style={{ display: 'flex', }} className={classes.li}>
                                <WcIcon className={classes.icon} style={{ color: 'black' }} /><span className={classes.text} >{props.modelType}</span>
                            </li>
                            <li style={{ display: 'flex', }} className={classes.li}>
                                <EventNoteIcon className={classes.icon} style={{ color: '#19B728' }} /><span className={classes.text} >{props.dateOfBỉrth}</span>
                            </li>
                            <li style={{ display: 'flex', }} className={classes.li}>
                                <LocationOn className={classes.icon} style={{ color: 'red' }} /><span className={classes.text} >{props.location}</span>
                            </li>
                        </ul>
                    </Grid>
                    <Grid item xs={6} >
                        <ul className={classes.ul}>
                            {props.instagram == "" ?
                                null : <li style={{ display: 'flex', }} className={classes.li}>
                                    <InstagramIcon className={classes.icon} style={{ color: '#C7125E' }} />
                                    <a
                                        href={props.instagram}
                                        className={classes.text} target="_blank"><span className={classes.ins}>Instagram</span></a>
                                </li>}
                            {props.facebook == "" ? null :
                                <li style={{ display: 'flex', }} className={classes.li} >
                                    <FacebookIcon className={classes.icon} style={{ color: '#0775E8' }} />
                                    <a href={props.facebook} className={classes.text} target="_blank">
                                        <span className={classes.fa}>Facebook {props.facebook} nnnn</span></a>
                                </li>
                                
                            }
                            {props.twitter == "" ? null :
                            <li style={{ display: 'flex', }} className={classes.li}>
                                <TwitterIcon className={classes.icon} style={{ color: '#1C99E6' }} />
                                <a href={props.twitter} className={classes.text} target="_blank">
                                    <span className={classes.twi}>Twitter</span></a>
                            </li>
                            }



                </ul>
            </Grid>
        </Grid>

            </div >
            <Divider className={classes.divider_Style} ><span className={classes.textInDiv}>Giới thiệu</span></Divider>
            <div className={classes.textLocation}>
                {props.aboutMe}
            </div>
        </Root >
    );

}