import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Check from "@material-ui/icons/Check";
import workStyle from "../../assets/jss/material-kit-pro-react/views/landingPageSections/workStyle.js";
const useStyles = makeStyles(workStyle);

function MyFormControlLabel({ label }) {
   const classes = useStyles();
   return (
      <div>
         {
            label.map(item => (
               <FormControlLabel
                  control={
                     <Checkbox
                        tabIndex={-1}
                        checkedIcon={<Check className={classes.checkedIcon} />}
                        icon={<Check className={classes.uncheckedIcon} />}
                        classes={{
                           checked: classes.checked,
                           root: classes.checkRoot,
                        }}
                     />
                  }
                  classes={{ label: classes.label, root: classes.labelRoot }}
                  label={item}
                  className={classes.formControl}
               />
            ))
         }
      </div>
   )
}

export default MyFormControlLabel
