/* eslint-disable */

import React from 'react';
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import { green } from '@material-ui/core/colors';


const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});

export default function OutlinedButton(props) {
  const classes = useStyles();
  const {isSubmited, data} = props

  return (
    <React.Fragment>
        <Button onClick={() => {
          isSubmited(data)
        }} variant="contained" color="primary" className={classes.margin}>
          Submit
        </Button>
    </React.Fragment>
  );
}