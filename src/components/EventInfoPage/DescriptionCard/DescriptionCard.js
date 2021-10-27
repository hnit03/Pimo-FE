import React from 'react';
import useStyles from '../../../assets/jss/material-kit-pro-react/components/EventInfoPage/descriptionCardStyle';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilRuler } from '@fortawesome/free-solid-svg-icons'
import { faFileAlt } from '@fortawesome/free-solid-svg-icons'

export default function DescriptionCard(props) {
   const classes = useStyles();
   const bool = true;
   
   return (
      <Box sx={{ flexGrow: 1 }} className={classes.box}>
         <Grid container spacing={1} className={classes.pageLeft_Style}>
            <Grid item xs={0.5} ></Grid>
            <Grid item xs={11} >
               <ul className={classes.ul}>
                  <li style={{ display: 'flex', }} className={classes.li}>
                     <FontAwesomeIcon icon={faFileAlt} className={classes.iconDES} />
                     <h1 className={classes.titleCard}>MÔ TẢ CÔNG VIỆC</h1>
                  </li>
                  <div className={classes.valueReq}>{props.description}</div>
               </ul>


            </Grid>
            <Grid item xs={0.5} ></Grid>
            <Grid item xs={0.5} ></Grid>
            <Grid item xs={11} >
               <Divider className={classes.divider_Style} ></Divider>
            </Grid>
            <Grid item xs={0.5} ></Grid>
            <Grid item xs={0.5} ></Grid>
            <Grid item xs={11} >
               <ul className={classes.ul}>
                  <li style={{ display: 'flex', }} className={classes.li}>
                     <FontAwesomeIcon icon={faPencilRuler} className={classes.icon} />
                     <h1 className={classes.title}>YÊU CẦU CHI TIẾT DÀNH CHO NGƯỜI MẪU ỨNG TUYỂN</h1>
                  </li>
               </ul>
               
               <p className={classes.valueReq}>
                  {
                     props.request==""?
                     "Chiến dịch này không có yêu cầu chi tiết"
                     :
                     props.request.split('<br/>').map(line => <div>{line}</div>)
                  }
               </p>
            </Grid>
         </Grid>
      </Box>
   );
}