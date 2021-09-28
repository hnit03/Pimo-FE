import React from "react";
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';
import useStyles from "./style";
import LocationOn from '@material-ui/icons/LocationOn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMale, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import WcIcon from '@mui/icons-material/Wc';


const Root = styled('div')(({ theme }) => ({
    width: '100%',
    ...theme.typography.body2,
    '& > :not(style) + :not(style)': {
        marginTop: theme.spacing(2),
    },
}));

export default function DividerLine(props) {
    const classes = useStyles();
    return (
        <Root>
            <div>
                <h1 className={classes.title}>{props.name}</h1>
                {/* <span className={classes.text} >{props.modelType}</span> */}
                <FontAwesomeIcon icon={faMapMarkerAlt} color="pink" fontSize="20"/>

                <ul className={classes.ul}>
                    <li style={{ display: 'flex', }} className={classes.li}>
                        <WcIcon className={classes.icon} /><span className={classes.text} >{props.modelType}</span>
                    </li>
                    <li style={{ display: 'flex', }} className={classes.li}>
                        <LocationOn className={classes.icon} /><span className={classes.text} >{props.location}</span>
                    </li>
                </ul>
                {/* <span className={classes.textLocation}><i class="fas fa-map-marker-alt"></i>{props.location}</span> */}
            </div>
            <Divider className={classes.divider_Style} >About Me</Divider>
            <div className={classes.textLocation}>
                {props.aboutMe}
            </div>
        </Root>
    );

}