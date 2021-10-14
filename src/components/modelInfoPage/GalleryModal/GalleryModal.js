import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import SectionCarousel from '../SectionCarousel/SectionCarousel';
import QuiltedImageList from '../SectionCarousel/QuiltedImageList';
import CloseIcon from '@mui/icons-material/Close';
import ViewCarouselIcon from '@mui/icons-material/ViewCarousel';
import ViewComfyIcon from '@mui/icons-material/ViewComfy';

import useStyles from '../../../assets/jss/material-kit-pro-react/components/ModelInfoPage/galleryModalStyle';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '70rem',
  height: '31rem',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};


export default function GalleryModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [view, setView] = useState(true);
  const changeViewType = (e) => {
    setView(e);
  };
  const classes = useStyles();
  return (
    <div>
      <Button onClick={handleOpen} variant="outlined" className={classes.button}>XEM CHI TIẾT</Button>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          {/* <Typography id="keep-mounted-modal-title" variant="h3" component="h2">
            BỘ SƯU TẬP CÁ NHÂN
          </Typography> */}
          <Grid container spacing={2}>
            <Grid item xs={11} >
              {
                view == true ?
                  (<div className={classes.buttonIcon}>
                    <ViewComfyIcon className={classes.iconViewCarouse} onClick={() => changeViewType(false)} />
                    <ViewCarouselIcon className={classes.iconViewComfyIcon} onClick={() => changeViewType(true)} />
                  </div>) :
                  (<div className={classes.buttonIcon}>
                    <ViewComfyIcon className={classes.iconViewCarouseChange} onClick={() => changeViewType(false)} />
                    <ViewCarouselIcon className={classes.iconViewComfyIconChange} onClick={() => changeViewType(true)} />
                  </div>)
              }
            </Grid>
            <Grid item xs={1} >
              <CloseIcon onClick={handleClose} className={classes.close} />
            </Grid>
            <Grid item xs={8.5} >
              {
                view == true ? 
                <SectionCarousel listCal={props.listImage.imageList} bool={false} /> : 
                <QuiltedImageList list={props.listImage.imageList} bool={false} />
              }
            </Grid>
            <Grid item xs={3.2} >
              <h1 className={classes.h1}>{props.listImage.nameGallery}</h1>
              <Divider className={classes.divider_Style}></Divider>
              <p>{props.listImage.brandName}</p>
              <p>{props.listImage.description}</p>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}