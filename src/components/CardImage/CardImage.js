import React, { useCallback  } from "react";
import Button from '@mui/material/Button';
import useStyles from '../../assets/jss/profile/cardImageStyle';
import { useHistory } from 'react-router-dom';

export default function CardImage(model) {
   const classes = useStyles();
   const history = useHistory();

   const onClickInfo = useCallback(() => history.push('/model-info'), [history]);

   return (
      <div className={classes.hieuungbenngoai}>
         <div className={classes.hieuung}>
            <div className={classes.noidung}>
               <img src={model.model.avatar} className={classes.img} />
               <div className={classes.phude}>
                  <p className={classes.thongtin}>
                     <h2 className={classes.h2}>{model.model.name} </h2>
                     <p className={classes.p}>{model.model.district}, {model.model.country}</p>
                     <p className={classes.p}>{model.model.gifted}</p>
                     <Button onClick={onClickInfo} variant="outlined" className={classes.button}>XEM THÔNG TIN</Button>
                  </p>
               </div>
            </div>
         </div>
      </div>
   );
}