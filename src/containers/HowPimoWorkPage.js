import React from 'react';
import useStyles from '../assets/jss/material-kit-pro-react/components/ModelInfoPage/HowPimoWorkPage';
import AgendaList from '../components/HowPimoWork/AgendaList/AgendaList';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import AgendaContent from '../components/HowPimoWork/AgendaContent/AgendaContent';
import CustomButton from '../components/HowPimoWork/CustomButton/CustomButton';
const aboutMe = (
    `My instagram page: EcemUzgor1

    I am a very patient, creative and hard-working person. My future goals are to participate in catwalks and photo shoots made by creative stylists and photographers. I am also very interested in singing, playing violin/guitar.
    
    Top Model of The World'16 - Miss Turkey
    
    Miss Asia Pacific World Beauty Contest'12 (Top 10) / Korea - Miss Turkey`
);





export default function HowPimoWorkPage() {
    const classes = useStyles();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} className = {classes.agendaHeader}>
                   <CustomButton/>
                </Grid>
                <Grid item xs={2.5}>
                   <AgendaList></AgendaList>
                </Grid>
                <Grid item xs={0.5}>
                   <div className = {classes.dividerLine}></div>
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