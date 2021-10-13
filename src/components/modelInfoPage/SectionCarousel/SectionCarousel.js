import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@material-ui/core'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import useStyles from "../../../assets/jss/material-kit-pro-react/components/ModelInfoPage/sectionCarouselStyle";


export default function SectionCarousel(props) {
   const classes = useStyles();
   var bool = props.bool;
   var carouselStyle = classes.carousel;
   bool == true ? (carouselStyle = classes.carousel):(carouselStyle = classes.carouselSmall)
      return (
         <Carousel
            className={carouselStyle}
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
   function Item(props) {
      return (
         <>
         {
            bool == true ? 
            (<Paper className={classes.paper}>
               <img src={props.item.name} alt="First slide" className={classes.image} />
            </Paper>) : 
            (<Paper className={classes.paperSmall}>
               <img src={props.item.fileName} alt="First slide" className={classes.imageSmall} />
            </Paper>)
         }
         </>
      )
   }
}