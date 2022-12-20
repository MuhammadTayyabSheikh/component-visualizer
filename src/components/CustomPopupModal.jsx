import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { withStyles } from "@material-ui/core/styles";
import { useState } from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'max-content',
  bgcolor: '#002b36',
  border: '2px solid #b58900',
  boxShadow: 24,
  p: 3,
  borderRadius: '10px'
};

const WhiteTextTypography = withStyles({
  root: {
    color: "#b58900"
  }
})(Typography);

export default function CustomPopupModal() {
  const [open, setOpen] = useState(!localStorage.getItem('showGreetingModal') ? true : JSON.parse(localStorage.getItem('showGreetingModal')));
  const handleClose = () => {
    setOpen(false);
    localStorage.setItem('showGreetingModal', false);
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <WhiteTextTypography id="transition-modal-title" variant="h4" component="h2">
              Welcome to ComponentVisualizer
              <span style={{ fontSize: '10px', paddingLeft: '6px', position: 'relative', bottom: '16px' }} id="transition-modal-title">
                𝓑𝓮𝓽𝓪
              </span>

            </WhiteTextTypography>
            <WhiteTextTypography id="transition-modal-description" sx={{ mt: 3 }}>
              <WhiteTextTypography id="transition-modal-title" variant="h5" component="h2">
              <br></br>
              Info and instructions:
              </WhiteTextTypography>
              <br></br>
              ➜  The Mobile Screen is Resizeable from all sides.
              <br></br>
              ➜  States are kept persistent even
              <br></br>
              ......... Page is reloaded.
              <br></br>
              ......... Tab is closed.
              <br></br>
              ......... Browser is quitted.
              <br></br>
              ➜ You can change mobile screen color (persistent state).
              <br></br>
              <br></br>
              <WhiteTextTypography id="transition-modal-title" variant="h5" component="h2">
                Latest Update:
              </WhiteTextTypography>
              ➜  Persistent States are applied to component styles.
              <br></br>
              ➜ Two most basic components are added
              <br></br>
              ......... Button
              <br></br>
              ......... Textfield
              <br></br>
              ➜ Both components are fully styleable with sliders.
              <br></br>
              <br></br>
              ➜ UI and UX (user experience) suggestion are welcomed and appericiated
            </WhiteTextTypography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}