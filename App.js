import React from 'react';

import Button from '@material-ui/core/Button';
//import logo from './logo.svg';
import './App.css';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {useState} from 'react';

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

function Cell({takeTurn, cellNumber}) {
  console.log(takeTurn);
  const [text, setText] = useState('_');
  return (
    <Button onClick={ () => { if (text == '_') {setText(takeTurn(cellNumber));} } } variant="contained" color="primary" color="primary">
      {text}
    </Button>
  );
}

function FormRow({takeTurn, row}) {
  console.log(takeTurn);
  const classes = useStyles();
    return (
      <React.Fragment>
        <Grid item xs={1} alignContent="center">
          {/*<Paper className={classes.paper}>_</Paper>*/}
          {/*<Button onClick={ () => { this.changeText("O")}  }variant="contained" color="primary">
            {text}
          </Button>*/}
          <Cell cellNumber={row * 3} takeTurn={takeTurn}/>
        </Grid>
        <Grid item xs={1}>
          <Cell cellNumber={row * 3 + 1} takeTurn={takeTurn}/>
        </Grid>
        <Grid item xs={1}>
          <Cell cellNumber={row * 3 + 2} takeTurn={takeTurn}/>
        </Grid>
      </React.Fragment>
    );
}

function isWin({board}) {
    let row1 = [board[0], board[1], board[2]];
    let row2 = [board[3], board[4], board[5]];
    let row3 = [board[6], board[7], board[8]];

    let col1 = [board[0], board[3], board[6]];
    let col2 = [board[1], board[4], board[7]];
    let col3 = [board[2], board[5], board[8]];

    let diag1 = [board[0], board[4], board[8]];
    let diag2 = [board[2], board[4], board[6]];

    if (['X','X','X'] === row1) {
        return true
    } else if (['X','X','X'] === row2) {
        return true
    } else if (['X','X','X'] === row3) {
        return true
    } else if (['X','X','X'] === col1) {
        return true
    } else if (['X','X','X'] === col2) {
        return true
    } else if (['X','X','X'] === col3) {
        return true
    } else if (['X','X','X'] === diag1) {
        return true
    } else if (['X','X','X'] === diag2) {
        return true
    } else if (['O','O','O'] === row1) {
        return true
    } else if (['O','O','O'] === row2) {
        return true
    } else if (['O','O','O'] === row3) {
        return true
    } else if (['O','O','O'] === col1) {
        return true
    } else if (['O','O','O'] === col2) {
        return true
    } else if (['O','O','O'] === col3) {
        return true
    } else if (['O','O','O'] === diag1) {
        return true
    } else if (['O','O','O'] === diag2) {
        return true
    } else if (['-','-','-'] === row1) {
        return false
    } else if (['-','-','-'] === row2) {
        return false
    } else if (['-','-','-'] === row3) {
        return false
    } else if (['-','-','-'] === col1) {
        return false
    } else if (['-','-','-'] === col2) {
        return false
    } else if (['-','-','-'] === col3) {
        return false
    } else if (['-','-','-'] === diag1) {
        return false
    } else if (['-','-','-'] === diag2) {
        return false
    } else {
      return false
    }
}

function App() {
  const [board, setBoard] = useState(['_', '_', '_', '_', '_', '_', '_', '_', '_']);
  const [turn, setTurn] = useState("X");

  const takeTurn = (cellNumber) => {
    const thisTurn = turn;
    setTurn(turn === "X" ? "O" : "X");
    board[cellNumber] = thisTurn;
    setBoard(board);
    let state = isWin(board);
    console.log(board);
    console.log(state);
  return thisTurn;
  }
  return (
    <div className="App">
      <header className="App-header">
      {/*<img src={logo} className="App-logo" alt="logo" />*/}
      <Grid container spacing={1}>
        <Grid container item xs={7} spacing={5}>
        </Grid>
        <Grid container item xs={7} spacing={5}>
          <FormRow row={0} takeTurn={takeTurn}/>
        </Grid>
        <Grid container item xs={7} spacing={5}>
          <FormRow row={1} takeTurn={takeTurn}/>
        </Grid>
        <Grid container item xs={7} spacing={5}>
          <FormRow row={2} takeTurn={takeTurn}/>
        </Grid>
      </Grid>
      </header>
    </div>
  );
}

export default App;
