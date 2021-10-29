import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWeight } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faPencilRuler } from '@fortawesome/free-solid-svg-icons'
import height from '../../../assets/img/heightIcon.png'
import FaceIcon from '@mui/icons-material/Face';
import shoe from '../../../assets/img/shoe.png'
import useStyles from '../../../assets/jss/material-kit-pro-react/components/ModelInfoPage/sectionContentStyle'
export default function SectionContent(props) {
   const classes = useStyles();
   var listAtr1 = props.list1;
   const listItemName = listAtr1.map((item) => {
      return (
         <div>
            <span className={classes.name_attribute}>{item.text}: </span>
         </div>
      );
   })
   const listItemValue = listAtr1.map((item) => {
      return (
         <div>
            {
               (item.value) ? (
                  (item.value.textValue) ?
                     (
                        <>

                           <span className={classes.value_attribute}>{item.value.textValue} </span>
                        </>
                     ) :
                     (
                        <span className={classes.value_attribute}>{`${item.value.quantityValue} ${item.value.measure}`} </span>
                     )
               ) : null
            }
         </div>
      );
   })
//props.name
   return (
      <Box sx={{ flexGrow: 1 }}>
         <Grid container spacing={2}>
            <Grid item xs={12}>
               <ul className={classes.ul}>
                  <li style={{ display: 'flex', }} className={classes.li}>
                     <img src={height} className={classes.iconIMG} />
                     <p className={classes.name_attribute}>Chiều cao</p>
                  </li>
               </ul>
               <ul className={classes.ul}>
                  <li style={{ display: 'flex', }} className={classes.li}>
                  <FontAwesomeIcon icon={faWeight} className={classes.icon} />
                     <p className={classes.name_attribute}>Cân nặng</p>
                  </li>
               </ul>
               <ul className={classes.ul}>
                  <li style={{ display: 'flex', }} className={classes.li}>
                  <FontAwesomeIcon icon={faPencilRuler} className={classes.icon} />
                     <p className={classes.name_attribute}>Vòng 1</p>
                  </li>
               </ul>
               {/* <ul className={classes.ul}>
                  <li style={{ display: 'flex', }} className={classes.li}>
                  <FontAwesomeIcon icon={faPencilRuler} className={classes.icon} />
                     <p className={classes.name_attribute}>Cân nặng</p>
                  </li>
               </ul>
               <ul className={classes.ul}>
                  <li style={{ display: 'flex', }} className={classes.li}>
                  <FontAwesomeIcon icon={faPencilRuler} className={classes.icon} />
                     <p className={classes.name_attribute}>Cân nặng</p>
                  </li>
               </ul> */}
               <ul className={classes.ul}>
                  <li style={{ display: 'flex', }} className={classes.li}>
                  <img src={shoe} className={classes.iconIMG} />
                     <p className={classes.name_attribute}>Size giày</p>
                  </li>
               </ul>
               <ul className={classes.ul}>
                  <li style={{ display: 'flex', }} className={classes.li}>
                     <FontAwesomeIcon icon={faStar} className={classes.icon} />
                     <p className={classes.name_attribute}>Hình xăm</p>
                  </li>
               </ul>
               <ul className={classes.ul}>
                  <li style={{ display: 'flex', }} className={classes.li}>
                     <FaceIcon className={classes.icon} />
                     <p className={classes.name_attribute}>Màu da</p>
                  </li>
               </ul>
               {listItemName}
            </Grid>
            <Grid item xs={props.value}>
               {listItemValue}
            </Grid>
         </Grid>
      </Box>
   );

}