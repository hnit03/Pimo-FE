import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import useStyles from '../../../assets/jss/material-kit-pro-react/components/ModelInfoPage/sectionContentStyle'
export default function SectionContent(props) {
    const classes = useStyles();
    var listAtr1 = props.list1;
    var listAtr2 = props.list2;
    var listAtr3 = props.list3;
    var listAtr4 = props.list4;
    // const listLength = listAtr.length;
    // let listItem1 = null;
    // let listItem2 = null;
    const listItem1 = listAtr1.map((item1) => {
        return (
            <div>
                <span className={classes.name_attribute}>{item1.name}: </span>
                <span className={classes.value_attribute}>{item1.value} </span>
            </div>
        );
    })
    const listItem2 = listAtr2.map((items) => {
        return (
            <div>
                <span className={classes.name_attribute}>{items.name}: </span> 
                <span className={classes.value_attribute}>{items.value} </span>
            </div>
        );
    })
    const listItem3 = listAtr3.map((item3) => {
        return (
            <div>
                <span className={classes.name_attribute}>{item3.name}: </span> 
                <span className={classes.value_attribute}>{item3.value} </span>
            </div>
        );
    })
    const listItem4 = listAtr4.map((item4) => {
        return (
            <div>
                <span className={classes.value_attribute}>{item4}: </span> 
                
            </div>
        );
    })

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    {listItem1}
                </Grid>
                <Grid item xs={3}>
                    {listItem2}
                </Grid>
                <Grid item xs={3}>
                    {listItem3}
                </Grid>
                <Grid item xs={3}>
                    {listItem4}
                </Grid>
            </Grid>
        </Box>
    );

}