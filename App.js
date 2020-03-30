import React from 'react';
import ReactDOM from 'react-dom'

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
  const [text, setText] = useState('_');
  return (
    <Button onClick={ () => { if (text == '_') {setText(takeTurn(cellNumber));} } } variant="contained" color="primary">
      {text}
    </Button>
  );
}

function FormRow({takeTurn, row}) {
  const classes = useStyles();
    return (
      <React.Fragment>
        <Grid container item xs={1} alignItems="center">
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

function isWin(board) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (board[a] !== '_' && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
}

function isTie(board) {
  return !(board.includes('_'))
}

function show(win, tie) {
  let element = '';
  if (win == 'O') {
    element = <h3>O wins!</h3>;
    return ReactDOM.render(element, document.getElementById('root'));
  }
  if (win == 'X') {
    element = <h3>X wins!</h3>;
    return ReactDOM.render(element, document.getElementById('root'));
  }
  if (tie == true) {
    element = <h3>It's a tie!</h3>;
    return ReactDOM.render(element, document.getElementById('root'));
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
    const win = isWin(board);
    const tie = isTie(board);
    const some = show(win, tie)
    console.log(board);
    console.log(win);
    console.log(tie);
    console.log(some);
    return thisTurn;
  }
  return (
    <div className="App">
      <header className="App-header">
      {/*<img src={logo} className="App-logo" alt="logo" />*/}
      <Grid container spacing={1}>
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
