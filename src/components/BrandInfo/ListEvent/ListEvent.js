import React from 'react';
import useStyles from '../../../assets/jss/material-kit-pro-react/components/BrandInfoCard/listEventStyle';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import EventCard from '../EventCard/EventCard';
export default function ListEvent({ castings }) {
    

    const classes = useStyles();
    return (
        <Box sx={{ flexGrow: 1 }} className={classes.box}>
            <Grid container spacing={3} className={classes.pageLeft_Style}>
                <Grid item xs={12} >
                    <h1 className={classes.title}>DANH SÁCH CHIẾN DỊCH</h1>
                </Grid>
                <Grid item xs={0.8} >
                </Grid>
                <Grid container spacing={3} item xs={10.6} >
                {
                    castings.castings != undefined ?
                        castings.castings.map((item) =>
                        item.casting.status?
                            <Grid item xs={4} >
                                <EventCard
                                    loading = {false}
                                    id = {item.casting.id}
                                    style={true}
                                    date={item.casting.closeTime}
                                    value={item.casting.name}
                                    dayTime={(new Date(item.casting.openTime).toLocaleDateString("vi-VN", {
                                        year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit'
                                     }))}
                                    endTime={(new Date(item.casting.closeTime).toLocaleDateString("vi-VN", {
                                        year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit'
                                     }))}
                                    location={item.casting.address}
                                    img={item.casting.poster}
                                />
                            </Grid>:null
                        )
                        : null
                }
                </Grid>
                <Grid item xs={0.7} >
                </Grid>
            </Grid>
        </Box>
    );
}