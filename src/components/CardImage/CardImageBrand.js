import React, { useCallback, useState, useEffect } from "react";
import Button from '@mui/material/Button';
import useStyles from '../../assets/jss/profile/cardImageBrandStyle';
import { useHistory } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import BasicChips from '../modelInfoPage/Chip/Chip';
import LocationOn from '@material-ui/icons/LocationOn';
import WorkIcon from '@mui/icons-material/Work';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailIcon from '@mui/icons-material/Mail';
import Skeleton from '@mui/material/Skeleton';

export default function CardImage(brand) {
   const classes = useStyles();
   const history = useHistory();
   const [loading, setLoading] = useState(false);
   useEffect(() => {
      setLoading(brand.bool);
      setTimeout(() => {
         setLoading(!brand.bool);
      }, 1500);
      //setLoading(brand.bool);
   }, []);
   const onClickInfo = useCallback((param) => () => history.push(`/brand-info/${param}`), [history]);
   return (
      <div>
      {loading ?
         
         <div className={classes.hieuungbenngoai} >
            <div className={classes.hieuung1} >
               <div className={classes.noidung}>
                  <Skeleton animation="wave" variant="rectangular" className={classes.img1} />
                  
               </div>
               <div className={classes.thongtin1}> 
               <Skeleton animation="wave" height={50} style={{ marginTop: 4 }} width="40%" />
               <Skeleton animation="wave" height={2} width="100%"/>
               <Skeleton animation="wave" height={25} style={{ marginTop: 4 }} width="70%" className={classes.a}/>
               <Skeleton animation="wave" height={25} style={{ marginTop: 4 }} width="60%" className={classes.a}/>
               <Skeleton animation="wave" height={25} style={{ marginTop: 4 }} width="50%" className={classes.a}/>
               <Skeleton animation="wave" height={25} style={{ marginTop: 4 }} width="100%" className={classes.a}/>
               <Skeleton animation="wave" height={25} style={{ marginTop: 4 }} width="100%" className={classes.a}/>
                  </div>
            </div>
            {/* {setLoading(false)} */}
         </div>
         :
      <div className={classes.hieuungbenngoai} onClick={onClickInfo(brand.brand.brand.id)}>
         <div className={classes.hieuung}>
            <div className={classes.noidung}>
               <img src={brand.brand.brand.logo} className={classes.img} />
               <div className={classes.phude}>
                  <p className={classes.thongtin}>
                     <h2 className={classes.h2} >{brand.brand.brand.name} </h2>
                     <Divider className={classes.divider_Style} ></Divider>
                     <ul className={classes.ul}>
                            <li style={{ display: 'flex', }} className={classes.li}>
                                <WorkIcon className={classes.icon} /><span className={classes.text} >{brand.brand.name}</span>
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
      }
      </div>
   );
}