import React, { useCallback, useState, useEffect } from "react";
import useStyles from '../../assets/jss/profile/cardImageStyle';
import { useHistory } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';
export default function CardImage(model) {
   const [loading, setLoading] = useState(false);
   useEffect(() => {
      setLoading(true);
      setTimeout(() => {
         setLoading(false);
      }, 1500);
   }, []);
   const classes = useStyles();
   const history = useHistory();
   const onClickInfo = useCallback((param) => () => history.push(`/model-info/${param}`), [history]);
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
                  <Skeleton animation="wave" height={25} style={{ marginTop: 4 }} width="80%" className={classes.a}/>
                     </div>
               </div>
            </div>
            :
            <div className={classes.hieuungbenngoai} onClick={onClickInfo(model.model.model.id)}>
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
                           <p className={classes.p}><span className={classes.p_Title}>Tài năng: </span>{model.model.model.gifted}</p>
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         }
      </div>
   );
}