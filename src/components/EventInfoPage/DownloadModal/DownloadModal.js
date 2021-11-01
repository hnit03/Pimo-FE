import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import CloseIcon from '@mui/icons-material/Close';
import useStyles from '../../../assets/jss/material-kit-pro-react/components/EventInfoPage/downloadModalStyle';
import DownloadPimo from '../../Accordion/DownloadPimoContent';
import TransitionAlerts from "./Alert";
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '70rem',
  height: '33rem',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  overflow: 'hidden',
};

export default function DownloadModal(props) {
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
      {props.bool ?
        <Button onClick={handleOpen} variant="outlined" className={classes.button}>ỨNG TUYỂN</Button>:
        <TransitionAlerts/>
      }
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Grid container spacing={2}>
            <Grid item xs={11} >
            </Grid>
            <Grid item xs={1} >
              <CloseIcon onClick={handleClose} className={classes.close} />
            </Grid>
            <Grid item xs={12} className={classes.scroll}>
              <DownloadPimo />
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}