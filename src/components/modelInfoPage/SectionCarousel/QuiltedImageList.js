
import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import useStyles from "../../../assets/jss/material-kit-pro-react/components/ModelInfoPage/sectionCarouselStyle";

export default function QuiltedImageList(props) {
  var bool = props.bool;
  const classes = useStyles();
  var quiltedImageStyle = classes.img;
  bool == true ? (quiltedImageStyle = classes.img):(quiltedImageStyle = classes.imgSmall)

  const listImage = props.list.map((item, i) => (
    
    <ImageListItem key={i} >
      <img
        src= {bool ? (`${item.name}`):(`${item.fileName}`)}
        srcSet={bool ? (`${item.name}`):(`${item.fileName}`)}
        loading="lazy"
        className = {quiltedImageStyle}
      />
    </ImageListItem>
  ))

  return (
    bool ?
    
    <ImageList sx={{ width: 900, height: 450 }} cols={4} rowHeight={230} className = {classes.imgList}>
        {listImage}
    </ImageList>
    :
    <ImageList sx={{ width: 770, height: 400 }} cols={3} rowHeight={260} className = {classes.imgList}>
        {listImage}
    </ImageList>
  );
}
