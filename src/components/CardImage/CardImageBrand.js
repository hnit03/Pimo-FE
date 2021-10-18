import React, { useCallback } from "react";
import Button from '@mui/material/Button';
import useStyles from '../../assets/jss/profile/cardImageBrandStyle';
import { useHistory } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import BasicChips from '../modelInfoPage/Chip/Chip';
import LocationOn from '@material-ui/icons/LocationOn';
import WorkIcon from '@mui/icons-material/Work';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailIcon from '@mui/icons-material/Mail';

export default function CardImage(brand) {
   const classes = useStyles();
   const history = useHistory();
   const onClickInfo = useCallback(() => history.push(`/brand-info/${brand.brand.brand.id}`), [history]);
   console.log(brand);
   return (
      <div className={classes.hieuungbenngoai} onClick={onClickInfo}>
         <div className={classes.hieuung}>
            <div className={classes.noidung}>
               <img src={brand.brand.brand.logo} className={classes.img} />
               <div className={classes.phude}>
                  <p className={classes.thongtin}>
                     <h2 className={classes.h2} >{brand.brand.brand.name} </h2>
                     <Divider className={classes.divider_Style} ></Divider>
                     <ul className={classes.ul}>
                            <li style={{ display: 'flex', }} className={classes.li}>
                                <WorkIcon className={classes.icon} /><span className={classes.text} >Fashion</span>
                            </li>
                            <li style={{ display: 'flex', }} className={classes.li}>
                                <MailIcon className={classes.icon} /><span className={classes.text} >{brand.brand.brand.mail}</span>
                            </li>
                            <li style={{ display: 'flex', }} className={classes.li}>
                                <LocalPhoneIcon className={classes.icon} /><span className={classes.text} >{brand.brand.brand.phone}</span>
                            </li>
                            <li style={{ display: 'flex', }} className={classes.li}>
                                <LocationOn className={classes.icon} /><span className={classes.text} >{brand.brand.brand.address}</span>
                            </li>
                        </ul>
                  </p>
               </div>
            </div>
         </div>
      </div>
   );
}