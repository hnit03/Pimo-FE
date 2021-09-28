import React from 'react'
import useStyles from "./style";



export default function Detail(props) {
    const classes = useStyles();

    return (
        <div className={classes.description}>
         <p className={classes.subDescription}>
          <span>
           {props.SubDescription}
          </span>
        </p>
      </div>
    )
}
