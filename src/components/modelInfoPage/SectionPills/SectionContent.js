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
   var listAtr = props.list1;
   var listBody = props.list2;
   const Item = function(props) {
      return (
         <div>
            <ul className={classes.ul}>
                  <li style={{ display: 'flex', }} className={classes.li}>
                     {props.bool?<img src={props.icon} className={classes.iconIMG} />: 
                     <FontAwesomeIcon icon={props.icon} className={classes.icon} />
                     }
                     <p className={classes.name_attribute}>{listAtr[props.num].text}:</p>
                     {listAtr[props.num].value===null?
                     <p className={classes.value_attribute}>-</p>:<p className={classes.value_attribute}>{`${listAtr[props.num].value.quantityValue} ${listAtr[props.num].value.measure}`}</p>
                     // <p className={classes.value_attribute}>{`${listAtr[props.num].value.quantityValue} ${listAtr[props.num].value.measure}`}</p>
                     }
                     
                  </li>

               </ul>
         </div>
      )
    }

   return (
      <Box sx={{ flexGrow: 1 }}>
         <Grid container spacing={2}>
         <Grid item xs={2}>
              
            </Grid>
            <Grid item xs={4.5}>
               <Item num={0} icon={height} bool={true}/>
               <Item num={2} icon={faPencilRuler} bool={false}/>
               <Item num={3} icon={faPencilRuler} bool={false}/>
               <Item num={4} icon={faPencilRuler} bool={false}/>
            </Grid>
            <Grid item xs={4.5}>
            <Item num={1} icon={faWeight} bool={false}/>
            {/* <Item num={5} icon={shoe} bool={true}/> */}
            <ul className={classes.ul}>
                  <li style={{ display: 'flex', }} className={classes.li}>
                     <FontAwesomeIcon icon={faStar} className={classes.icon} />
                     <p className={classes.name_attribute}>{listAtr[5].text}:</p>
                     <p className={classes.value_attribute}>{listAtr[5].value.textValue}</p>
                  </li>
               </ul>
               <ul className={classes.ul}>
                  <li style={{ display: 'flex', }} className={classes.li}>
                     <FaceIcon className={classes.icon} />
                     <p className={classes.name_attribute}>{listBody[0].text}:</p>
                     <p className={classes.value_attribute}>{listBody[0].value.textValue}</p>
                  </li>
               </ul>

            </Grid>
         </Grid>
      </Box>
   );

}