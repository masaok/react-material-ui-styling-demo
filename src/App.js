import React from 'react'
import './App.css'

import { makeStyles } from '@material-ui/core/styles'

import Resume from './pages/Resume'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center'
    // backgroundColor: 'red'
  },

  container: {
    // backgroundColor: 'red'
    display: 'flex',
    flex: 1,
    minWidth: theme.spacing(600 / 8),
    maxWidth: theme.spacing(800 / 8)
  }
}))

const App = props => {
  const classes = useStyles(props)

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Resume />
      </div>
    </div>
  )
}

export default App
