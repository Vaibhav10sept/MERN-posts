import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid,Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import CreateIcon from '@material-ui/icons/Create';

import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import { getPosts } from './actions/posts';
import useStyles from './styles';
import DeleteIcon from '@material-ui/icons/Delete';
// import memories from './images/memories.png';
import heart from './images/heart.png'

const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();
  const [togglecreate, settogglecreate] = useState(false)

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Container maxWidth="lg">
    
      <AppBar className={classes.appBar} position="static" color="inherit">
      {!togglecreate?   <Button size="large" color="secondary"   onClick={()=>{settogglecreate(prev=>(!prev))}}><CreateIcon  fontSize="medium" /> create a memory</Button>:""}
        <Typography className={classes.heading} variant="h2" xs={{fontSize:'10px'}}>Memories</Typography>
        <img className={classes.image} src={heart} alt="icon" height="80" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item lg ={8} xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
           { togglecreate?(
            <Grid item  xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>):""}
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
