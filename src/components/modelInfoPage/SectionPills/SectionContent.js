import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import useStyles from '../../../assets/jss/material-kit-pro-react/components/ModelInfoPage/sectionContentStyle'
export default function SectionContent(props) {
    const classes = useStyles();
    var listAtr1 = props.list1;
    const listItem1 = listAtr1.map((item1) => {
        return (
            <div>
                <span className={classes.name_attribute}>{item1.name}: </span>
                <span className={classes.value_attribute}>{item1.value} </span>
            </div>
        );
    })


    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    {listItem1}
                </Grid>
            </Grid>
        </Box>
    );

}