import React, { useState, useEffect } from "react";
import {
  Container,
  AppBar,
  Typography,
  Grow,
  Grid
  
} from "@material-ui/core";
import {  Button } from '@material-ui/core'
import { useDispatch } from "react-redux";
import CreateIcon from "@material-ui/icons/Create";

import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import { getPosts } from "./actions/posts";
import useStyles1 from "./styles";
import DeleteIcon from "@material-ui/icons/Delete";
// import memories from './images/memories.png';
import heart from "./images/heart.png";
import { makeStyles } from '@material-ui/core/styles';
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
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));
const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles1();
  const [ModalVisible, setModalVisible] = useState(false)
  const classes1 = useStyles();
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
     
      <Button type="primary" onClick={handleOpen}>
      <CreateIcon fontSize="medium" /> create a memory
        </Button>   
           
       
     
        <Typography
          className={classes.heading}
          variant="h2"  
          xs={{ fontSize: "10px" }}
          style={{fontFamily: 'Gochi Hand'
        }}
        >
          yaadein
        </Typography>
        <img className={classes.image} src={heart} alt="icon" height="80" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item lg={8} xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} handleOpen={handleOpen} />
            </Grid>
            <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes1.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
        <Grid item xs={12} sm={4}>
                  <Form currentId={currentId} setCurrentId={setCurrentId} />
                </Grid>
        </Fade>
      </Modal>
         
                
           
          
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
