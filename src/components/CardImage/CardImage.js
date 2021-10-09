import React, { useCallback } from "react";
import Button from '@mui/material/Button';
import useStyles from '../../assets/jss/profile/cardImageStyle';
import { useHistory } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import BasicChips from '../modelInfoPage/Chip/Chip';
export default function CardImage(model) {
   const classes = useStyles();
   const history = useHistory();

   const onClickInfo = useCallback(() => history.push('/model-info'), [history]);

   return (
      <div className={classes.hieuungbenngoai} onClick={onClickInfo}>
         <div className={classes.hieuung}>
            <div className={classes.noidung}>
               <img src={model.model.model.avatar} className={classes.img} />
               <div className={classes.phude}>
                  <p className={classes.thongtin}>
                     <h2 className={classes.h2} >{model.model.model.name} </h2>
                     <Divider className={classes.divider_Style} ></Divider>
                     <p className={classes.p}><span className={classes.p_Title}>Vị trí: </span>{model.model.model.district}, {model.model.model.country}</p>
                     {/* <p className={classes.p}><span className={classes.p_Title}>Tài năng: </span>{model.model.model.gifted}</p> */}
                     <p className={classes.p}><span className={classes.p_Title}>Giới tính: </span>Nữ</p>
                     {
                        (model.listTop3Label !== undefined) ? (
                           (model.listTop3Label.length > 0) ? (
                              <p className={classes.p}><span className={classes.p_Title}>Phong cách: </span>{model.listTop3Label[0]}, {model.listTop3Label[1]}, {model.listTop3Label[2]}</p>
                              
                           ) : (null)) : null
      
                     }
                  </p>
               </div>
            </div>
         </div>
      </div>
   );
}