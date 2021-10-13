import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import useStyles from '../../../assets/jss/material-kit-pro-react/components/ModelInfoPage/sectionContentStyle'
export default function SectionContent(props) {
   const classes = useStyles();
   var listAtr1 = props.list1;
   const listItemName = listAtr1.map((item) => {
      return (
         <div>
            <span className={classes.name_attribute}>{item.text}: </span>
         </div>
      );
   })
   const listItemValue = listAtr1.map((item) => {
      return (
         <div>
            {
               (item.value) ? (
                  (item.value.textValue) ?
                     (
                        <span className={classes.value_attribute}>{item.value.textValue} </span>
                     ) :
                     (
                        <span className={classes.value_attribute}>{`${item.value.quantityValue} ${item.value.measure}`} </span>
                     )
               ) : null
            }
         </div>
      );
   })

   return (
      <Box sx={{ flexGrow: 1 }}>
         <Grid container spacing={2}>
            <Grid item xs={props.name}>
               {listItemName}
            </Grid>
            <Grid item xs={props.value}>
               {listItemValue}
            </Grid>
         </Grid>
      </Box>
   );

}