import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import VerticalTabs from '../Tabs/tabs';
import useStyles from '../../../assets/jss/material-kit-pro-react/components/ModelInfoPage/galleryModalStyle';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '70rem',
  height:'30rem',
  bgcolor: 'background.paper',
  //border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


export default function GalleryModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
    const classes = useStyles();
  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Typography id="keep-mounted-modal-title" variant="h3" component="h2">
            BỘ SƯU TẬP CÁ NHÂN
          </Typography>
          {/* <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}
          <Grid container spacing={2}>
                <Grid item xs={12} >
                    <VerticalTabs/>
                </Grid>
                {/* <Grid item xs={2} >
                </Grid> */}
            </Grid>
        </Box>
      </Modal>
    </div>
  );
}