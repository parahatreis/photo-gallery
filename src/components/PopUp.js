import React from 'react'
import {
   makeStyles
} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
   modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
   },
   paper: {
      backgroundColor: theme.palette.background.paper,
      borderRadius: '5px',
      boxShadow: theme.shadows[5],
      // padding: theme.spacing(2, 4, 3),
      padding: '0',
      margin : '0'
   },
}));

const PopUp = ({handleClose, open, current}) => {
   const classes = useStyles();
   
   console.log(current)

   return (
      <div>
         <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
               <img src={current.webformatURL}  alt="sad" style={{objectFit : 'cover'}} />
          </div>
        </Fade>
      </Modal>
      </div>
   )
}

export default PopUp
