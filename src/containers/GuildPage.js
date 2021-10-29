import React from 'react';
import useStyles from '../assets/jss/guild/guildStyle';
import AgendaList from '../components/AgendaList/AgendaList';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import AgendaContent from '../components/AgendaContent/AgendaContent';

export default function HowPimoWorkPage() {
   const classes = useStyles();
   document.body.style.backgroundImage = 'none';
   return (
      <Box sx={{ flexGrow: 1 }}>
         <Grid container spacing={2}>
            <Grid item xs={12} className={classes.agendaHeader}>
            </Grid>
            <Grid item xs={3}>
               <AgendaList></AgendaList>
            </Grid>
            <Grid item xs={9.0}>
               <AgendaContent></AgendaContent>
            </Grid>
            <Grid item xs={12}>
            </Grid>
         </Grid>
      </Box>
   );
}