import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@material-ui/core'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import useStyles from "../../../assets/jss/material-kit-pro-react/components/ModelInfoPage/sectionCarouselStyle";


export default function SectionCarousel(props) {
   const classes = useStyles();
   {
      return (
         <Carousel
            className={classes.carousel}
            NavButton={({ onClick, className, style, next, prev }
            ) => {
               return (
                  <Button onClick={onClick} className={classes.button} style={style}>
                     {next && <ArrowForwardIosIcon />}
                     {prev && <ArrowBackIosIcon />}
                  </Button>
               )
            }}
               animation="slide"
            
            >
            {
               props.listCal.map((item, i) => <Item key={i} item={item} />)
            }
         </Carousel>
      )
   }

   function Item(props) {
      return (
         <>
            <Paper className={classes.paper}>

               <img src={props.item.name} alt="First slide" className={classes.image} />
            </Paper>
         </>
      )
   }
}