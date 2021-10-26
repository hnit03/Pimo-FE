import React from 'react';
import useStyles from '../../../assets/jss/material-kit-pro-react/components/EventInfoPage/infodetailStyle';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LocationOn from '@material-ui/icons/LocationOn';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';

export default function InfoDetails() {
   const classes = useStyles();
   const bool=true;
   return (
      <Box sx={{ flexGrow: 1 }} className={classes.box}>
         <Grid container spacing={2} className={classes.pageLeft_Style}>
            <Grid item xs={12} >
            <img className={classes.img} src="https://www.chanel.com/images//t_one//w_0.67,h_0.67,c_crop/q_auto:good,f_jpg,fl_lossy,dpr_1.2/w_1920/n-5-the-bath-tablets-factory-5-collection-limited-edition-10x0-60oz--packshot-default-105607-8840508309534.jpg"/>
            </Grid>
            <Grid item xs={0.5} >
            </Grid>
            <Grid item xs={9} >
               <h1>CALKWALK BST ÁNH SÁNG MÙA ĐÔNG CALKWALK BST ÁNH SÁNG MÙA ĐÔNG</h1>
               <ul className={classes.ul}>
                        <li style={{ display: 'flex', }} className={classes.li}>
                            <LocationOn className={classes.icon} />
                            <span className={classes.text} >Quận 1,tphcm</span>
                        </li>
                    </ul>
                    {bool ?
                        <Chip label="Đang diễn ra" className={classes.chipTrue} /> :
                        <Chip label="Đã kết thúc" className={classes.chipFalse} />
                    }
            </Grid>
            <Grid item xs={2} >
            <Button variant="contained" className={classes.button}>Ứng tuyển</Button>
            </Grid>

         </Grid>
      </Box>
   );
}