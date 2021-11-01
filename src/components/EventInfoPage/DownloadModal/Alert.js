import * as React from 'react';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import useStyles from '../../../assets/jss/material-kit-pro-react/components/EventInfoPage/downloadModalStyle';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';

export default function TransitionAlerts() {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  return (
    <Box sx={{ width: '100%' }}>
      <Button
        className={classes.button}
        disabled={open}
        variant="outlined"
        onClick={() => {
          setOpen(true);
        }}
      >
        Ứng tuyển
      </Button>
      <Collapse in={open}  sx={{ width: '100%' }}>
        <Alert
        severity="warning"
            className={classes.alert}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 10 }}
        >
          <span className={classes.span}>Đã hết thời gian ứng tuyển</span>
        </Alert>
      </Collapse>
    </Box>
  );
}