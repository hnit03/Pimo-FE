import React from 'react';
import useStyles from '../../../assets/jss/material-kit-pro-react/components/ModelInfoPage/listCardGalleryStyle';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CardImage1 from '../CardImage/CardImage';
import Button from '@mui/material/Button';
import GalleryModal from '../GalleryModal/GalleryModal';

export default function ListCardGallery({ model }) {
   const classes = useStyles();
   var listProject = []

   model.listCollectionProject.map(item => {
      listProject.push({
         image: item.imageList[0] === undefined ? '' : item.imageList[0].fileName,
         nameGallery: item.collection === undefined ? '' : item.collection.name,
         description: item.collection === undefined ? '' : item.collection.description,
         imageList: item.imageList,
         brandName: '',
      })
   })

   return (
      <Box sx={{ flexGrow: 1 }} className={classes.box}>
         <Grid container spacing={1} className={classes.gallery}>
            <Grid item xs={12}>
               <p className={classes.galleryTitle}>CÁC DỰ ÁN NỔI BẬT</p>
               {/* <p className={classes.galleryDes}>Đa dạng hình ảnh, đa dạng trong từng phong cách</p> */}
            </Grid>
            {listProject.length>0?
            listProject.map((item) => {
               return (
                  <Grid item xs={4}>
                     <CardImage1 listGallery={item} />
                  </Grid>
               );
            }
            ):<span className={classes.noneText}>Người mẫu này chưa hợp tác với nhãn hàng nào</span>}
         </Grid>
      </Box>
   );
}