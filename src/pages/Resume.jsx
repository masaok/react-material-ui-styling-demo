import React from 'react'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: 'blue'
  }
}))

const Resume = props => {
  const classes = useStyles(props)
  return (
    <div className={classes.root}>
      <div>TOP</div>
      <div>BOTTOM</div>
    </div>
  )
}

export default Resume
