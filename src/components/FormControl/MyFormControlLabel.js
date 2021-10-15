import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Check from "@material-ui/icons/Check";
import workStyle from "../../assets/jss/material-kit-pro-react/views/landingPageSections/workStyle.js";
const useStyles = makeStyles(workStyle);

function MyFormControlLabel({listStyle,checkedStyle,setCheckedStyle }) {
   // const list =[];
   // list.push(listStyle)
   console.log('23232 ', listStyle)
   console.log('checkedStyle ', checkedStyle)
   const classes = useStyles();
   const handlerFilter = (e,item) =>{
      const updateStyle = listStyle.map((value) => {
         value.checked = value.id === item.id ? !value.checked : value.checked;
         return value;
      });
      setCheckedStyle(updateStyle);
   }
   return (
      <div>
         {
            (listStyle !== undefined) ? (
               listStyle.map(item => (
                   <FormControlLabel
                     control={
                        <Checkbox
                           tabIndex={-1}
                           checked={item.checked}
                           value={item.id}
                           checkedIcon={<Check className={classes.checkedIcon} />}
                           icon={<Check className={classes.uncheckedIcon} />}
                           onClick={(input) => handlerFilter(input, item)}
                           classes={{
                              checked: classes.checked,
                              root: classes.checkRoot,
                           }}
                        />
                     }
                     classes={{ label: classes.label, root: classes.labelRoot }}
                     label={item.name}
                     className={classes.formControl}
                  />
               ))
            ) : null
         }
      </div>
   )
}

export default MyFormControlLabel
