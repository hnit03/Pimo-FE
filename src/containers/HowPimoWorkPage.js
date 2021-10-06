import React from 'react';
import useStyles from '../assets/jss/material-kit-pro-react/components/HowPimoWorkPage/howPimoWorkPage';
import AgendaList from '../components/HowPimoWork/AgendaList/AgendaList';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import AgendaContent from '../components/HowPimoWork/AgendaContent/AgendaContent';

export default function HowPimoWorkPage() {
    const classes = useStyles();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} className = {classes.agendaHeader}>
                </Grid>
                <Grid item xs={3}>
                   <AgendaList></AgendaList>
                </Grid>
                {/* <Grid item xs={0.5}>
                   <div className = {classes.dividerLine}></div>
                </Grid> */}
                <Grid item xs={9.0}>
                   <AgendaContent></AgendaContent>
                </Grid>
                <Grid item xs={12}>
                
   
                </Grid>
            </Grid>
        </Box>
    );
}