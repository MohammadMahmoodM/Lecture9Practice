import React from 'react';
import {Button, Icon, makeStyles, Grid, AppBar, IconButton, Typography, Toolbar} from '@material-ui/core';  // Import those component first before use
import './App.css';
import MenuIcon from '@material-ui/icons/Menu';

import {Pie} from 'react-chartjs-2';

const data = {
	labels: [
		'Red',
		'Blue',
		'Yellow'
	],
	datasets: [{
		data: [200, 50, 100],
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		]
	}]
};



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  button: {
    margin: theme.spacing(2),
  },
  loginbutton:{
    backgroundColor: "red",
  },
}));


function App() {
  const design = useStyles();
  return (
    <div>

<AppBar position="static">
  <Toolbar>
    <IconButton edge="start" className={design.menuButton} color="inherit" aria-label="menu">
      <MenuIcon />
    </IconButton>
    <Typography variant="h6" className={design.title}>
      News
    </Typography>
    <Button color="inherit" className={design.loginbutton}>Login</Button>
  </Toolbar>
</AppBar>

      Hello World
      <Button variant="contained" color="primary">Hello Button</Button>
      <Button variant="outlined" color="secondary">Hello Button</Button>
      <Button variant="text" color="secondary">Hello Button</Button>

      {/* This Button uses a Font Icon, see the installation instructions in the Icon component docs. */}
      <Button
        variant="contained"
        color="primary"
        className={design.button}
        endIcon={<Icon>send</Icon>}
      >
        Send
      </Button>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          Hello 1
        </Grid>
        <Grid item xs={6}>
          Hello 2
        </Grid>
        <Grid item xs={6}>
          Hello 3
        </Grid>
        <Grid item xs={2} style={{backgroundColor:"purple",textAlign: 'center'}}>   {/*Can control textAlign Here or in theme portion*/} 
          Hello Center
        </Grid>
        <Grid item xs={8} style={{backgroundColor:"Blue",textAlign: 'center'}}>
          Hello Align
        </Grid>
        <Grid item xs={2} style={{backgroundColor:"red",textAlign: 'right'}}>  
          Hello
        </Grid>
      </Grid>

      <Pie data={data} width={35} height={20} margin={50}/>


    </div>
  );
}

export default App;
