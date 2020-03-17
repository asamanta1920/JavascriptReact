import React from 'react';

import Button from '@material-ui/core/Button';
//import logo from './logo.svg';
import './App.css';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

// state = {
//   text: "_"
// }
// changeText = (text) => {
//   this.setState({ text });
// }
// const { text } = this.state



//onClick={ () => { this.changeText("O")}  }

function FormRow() {
  const classes = useStyles();
    return (
      <React.Fragment>
        <Grid item xs={4} alignContent="center">
          {/*<Paper className={classes.paper}>_</Paper>*/}
          <Button variant="contained" color="primary">
            _
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button variant="contained" color="primary">
            _
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button variant="contained" color="primary">
            _
          </Button>
        </Grid>
      </React.Fragment>
    );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
      {/*<img src={logo} className="App-logo" alt="logo" />*/}

      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
      </Grid>
      </header>
    </div>
  );
}

export default App;
