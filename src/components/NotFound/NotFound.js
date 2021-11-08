
import React, { useState } from 'react';
import image from '../../assets/img/notfound.png';
import useStyles from '../../assets/jss/material-kit-pro-react/components/notFoundStyle';




export default function NotFound() {
  
   const classes = useStyles();
  

   return (
      <div className={classes.box}>
          <h1 className={classes.h1}>Không tìm thấy kết quả phù hợp</h1>
            <img src={image} className={classes.img}/>
      </div>
   );
}