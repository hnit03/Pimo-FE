import React, { useCallback } from "react";
import Button from '@mui/material/Button';
import useStyles from '../../assets/jss/profile/cardImageStyle';
import { useHistory } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import BasicChips from '../modelInfoPage/Chip/Chip';
export default function CardImage(brand) {
   const classes = useStyles();
   const history = useHistory();
   const onClickInfo = useCallback(() => history.push(`/model-info/${brand.model.model.id}`), [history]);
   return (
      <div className={classes.hieuungbenngoai} onClick={onClickInfo}>
         <div className={classes.hieuung}>
            <div className={classes.noidung}>
               <img src={brand.brand.brand.logo} className={classes.img} />
               <div className={classes.phude}>
                  <p className={classes.thongtin}>
                     <h2 className={classes.h2} >{brand.brand.brand.name} </h2>
                     <Divider className={classes.divider_Style} ></Divider>
                     {/* <p className={classes.p}><span className={classes.p_Title}>Vị trí: </span>{brand.model.model.district}, {brand.model.model.country}</p> */}
                     {/* <p className={classes.p}><span className={classes.p_Title}>Tài năng: </span>{model.model.model.gifted}</p> */}
                     {/* <p className={classes.p}><span className={classes.p_Title}>Giới tính: </span>Nữ</p> */}
                     {/* <p className={classes.p}><span className={classes.p_Title}>Tài năng: </span>{brand.model.model.gifted}</p> */}
                  </p>
               </div>
            </div>
         </div>
      </div>
   );
}