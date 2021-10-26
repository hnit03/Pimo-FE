import React from 'react';
import useStyles from '../../../assets/jss/material-kit-pro-react/components/EventInfoPage/brandCardStye';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import LocationOn from '@material-ui/icons/LocationOn';
import WorkIcon from '@mui/icons-material/Work';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailIcon from '@mui/icons-material/Mail';

export default function BrandCard() {
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
               <img src="https://cdn.elly.vn/uploads/2021/01/06205934/y-nghia-logo-thuong-hieu-chanel.png" className={classes.img} />
               <div className={classes.phude}>
                  <p className={classes.thongtin}>
                     <h2 className={classes.h2} >sssss </h2>
                     <Divider className={classes.divider_Style} ></Divider>
                     <ul className={classes.ul}>
                            <li style={{ display: 'flex', }} className={classes.li}>
                                <WorkIcon className={classes.icon} /><span className={classes.text} >Fashion</span>
                            </li>
                            <li style={{ display: 'flex', }} className={classes.li}>
                                <MailIcon className={classes.icon} /><span className={classes.text} >ddd</span>
                            </li>
                            <li style={{ display: 'flex', }} className={classes.li}>
                                <LocalPhoneIcon className={classes.icon} /><span className={classes.text} >dđ</span>
                            </li>
                            <li style={{ display: 'flex', }} className={classes.li}>
                                <LocationOn className={classes.icon} /><span className={classes.text} >dđ</span>
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