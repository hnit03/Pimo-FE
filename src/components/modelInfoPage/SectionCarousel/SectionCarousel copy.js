import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@material-ui/core'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import useStyles from "../../../assets/jss/material-kit-pro-react/components/ModelInfoPage/sectionCarouselStyle";
import SectionCarousel from '../SectionCarousel/SectionCarousel';

export default function Carousel1(props) {
   const classes = useStyles();
   var bool = props.bool;
   var carouselStyle = classes.carousel;
   bool == true ? (carouselStyle = classes.carousel):(carouselStyle = classes.carouselSmall)
   var items = [
      {
          name: "https://cdn2.vectorstock.com/i/1000x1000/54/86/fashion-banner-design-with-perfume-outfit-vector-31175486.jpg",
          description: "Probably the most random thing you have ever seen!"
      },
      {
          name: "https://intphcm.com/data/upload/cac-buoc-thiet-ke-poster-thoi-trang.jpg",
          description: "Hello World!"
      },
      {
         name: "https://cdn3.vectorstock.com/i/1000x1000/54/82/fashion-banner-design-with-shirt-bag-camera-case-vector-31175482.jpg",
         description: "Hello World!"
     },
      {
         name: "https://datacare.vn/wp-content/uploads/2020/11/Banner-Thoi-Trang-%E2%80%93-TR1811202010.jpg",
         description: "Hello World!"
   },
   {
      name: "https://i.pinimg.com/originals/8e/dc/a0/8edca0fc9ba10f24a23a34753ec53588.jpg",
      description: "Hello World!"
}
  ]
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
               items.map( (item, i) => <Item key={i} item={item} /> )
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