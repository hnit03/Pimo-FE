import React from "react";
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';
import useStyles from "../../../assets/jss/material-kit-pro-react/components/ModelInfoPage/modelProfileStyle";
import LocationOn from '@material-ui/icons/LocationOn';
import WcIcon from '@mui/icons-material/Wc';
import EventNoteIcon from '@mui/icons-material/EventNote';

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
                <ul className={classes.ul}>
                    <li style={{ display: 'flex', }} className={classes.li}>
                    <WcIcon className={classes.icon}/><span className={classes.text} >{props.modelType}</span>
                    </li>
                    <li style={{ display: 'flex', }} className={classes.li}>
                        <EventNoteIcon className={classes.icon} /><span className={classes.text} >{props.dateOfBỉrth}</span>
                    </li>
                    <li style={{ display: 'flex', }} className={classes.li}>
                        <LocationOn className={classes.icon} /><span className={classes.text} >{props.location}</span>
                    </li>
                </ul>    
            </div>
            <Divider className={classes.divider_Style} >Mô tả</Divider>
            <div className={classes.textLocation}>
                {props.aboutMe}
            </div>
        </Root>
    );

}