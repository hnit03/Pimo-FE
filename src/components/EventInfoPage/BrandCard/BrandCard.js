import React from 'react';
import useStyles from '../../../assets/jss/material-kit-pro-react/components/EventInfoPage/brandCardStye';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import LocationOn from '@material-ui/icons/LocationOn';
import WorkIcon from '@mui/icons-material/Work';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailIcon from '@mui/icons-material/Mail';

export default function BrandCard(props) {
   const classes = useStyles();
   const bool=true;
   return (
      <Box sx={{ flexGrow: 1 }} className={classes.box}>
         <Grid container spacing={1} className={classes.pageLeft_Style}>
         <Grid item xs={1} />
            <Grid item xs={10} >
            <h1 className={classes.title} >ĐƯỢC TẠO BỞI </h1>
            <div className={classes.hieuung}>
            <div className={classes.noidung}>
               <img src={props.img} className={classes.img} />
               <div className={classes.phude}>
                  <p className={classes.thongtin}>
                     <h2 className={classes.h2} >{props.brandName} </h2>
                     <Divider className={classes.divider_Style} ></Divider>
                     <ul className={classes.ul}>
                            <li style={{ display: 'flex', }} className={classes.li}>
                                <WorkIcon className={classes.icon} /><span className={classes.text} >{props.brandWorks}</span>
                            </li>
                            <li style={{ display: 'flex', }} className={classes.li}>
                                <MailIcon className={classes.icon} /><span className={classes.text} >{props.brandEmail}</span>
                            </li>
                            <li style={{ display: 'flex', }} className={classes.li}>
                                <LocalPhoneIcon className={classes.icon} /><span className={classes.text} >{props.brandPhone}</span>
                            </li>
                            <li style={{ display: 'flex', }} className={classes.li}>
                                <LocationOn className={classes.icon} /><span className={classes.text} >{props.brandAddress}</span>
                            </li>
                        </ul>
                  </p>
               </div>
            </div>
         </div>
            
            </Grid>
         </Grid>
      </Box>
   );
}