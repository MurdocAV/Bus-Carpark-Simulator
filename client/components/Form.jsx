/* eslint-disable */

import React from 'react'
import { makeStyles, createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'
import TextField from '@material-ui/core/TextField'
import { pink, indigo } from '@material-ui/core/colors'
import DialogSelect from './Select'
import OutlinedButton from './Submit'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
}))

const theme = createMuiTheme({
  palette: {
    primary: pink,
    secondary: indigo,
  },
})

export default function Form(props) {
  const classes = useStyles()

  const [data, setData] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    queryType: ''
  })

  function handleSubmit (event) {
    event.preventDefault()
  }

  function changeHandler(label, event) {
    data[label] = event.target.value
  }

  return (
    <form onSubmit={handleSubmit} className={`${classes.root} formMUI`} noValidate>
      <ThemeProvider theme={theme}>
        <div className="lineOne">
          <TextField
            className={`${classes.margin} formBox one`}
            id={"Name"}
            label="Name"
            variant="outlined"
            onChange={(e) => changeHandler('name', e)}
          />
          <TextField
            className={`${classes.margin} formBox one`}
            label="Email" 
            variant="outlined"
            onChange={(e) => changeHandler('email', e)}
          />
          <DialogSelect changeHandler={changeHandler} />
          {/* <QueryType className="oneHalf"></QueryType> */}
          <TextField
            className={`${classes.margin} formBox two`}
            label="Subject"
            variant="outlined"
            onChange={(e) => changeHandler('subject', e)}
          />
          {/* </div>
          <div className="lineTwo"> */}
          <TextField
            className={`${classes.margin} formBox two message`}
            label="Message"
            variant="outlined"
            onChange={(e) => changeHandler('message', e)}
          />
          <OutlinedButton type="submit" data={data} isSubmited={props.isSubmited}/>
        </div>
      </ThemeProvider>
    </form>
  )
}