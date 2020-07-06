import React from 'react'

import { makeStyles } from '@material-ui/core/styles'

import clsx from 'clsx'

import Avatar from '@material-ui/core/Avatar'

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: 'lightblue',
    height: '100vh'
  },

  // Panels
  topPanel: {
    display: 'flex',
    flexDirection: 'row',
    flexGrow: 1,
    // height: '300px',
    height: theme.spacing(36), // default increments of 8 units
    backgroundColor: 'lightgreen'
  },

  bottomPanel: {
    backgroundColor: 'lightyellow'
  },

  // Top Section
  topSection: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    backgroundColor: 'purple'
  },

  picture: {
    flexGrow: 1,
    justifyContent: 'center'
  },

  topCenterSection: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 2,
    backgroundColor: 'pink'
  },

  social: {
    flexGrow: 1
  },

  // Top Center Section
  bio: {
    height: theme.spacing(30)
  },

  tabs: {
    display: 'flex',
    flexDirection: 'column'
  }
}))

const Resume = props => {
  const classes = useStyles(props)
  return (
    <div className={classes.root}>
      <div className={classes.topPanel}>
        {/* Picture */}
        <div className={clsx(classes.topSection, classes.picture)}>
          <Avatar alt="Remy Sharp" src="/pacman.png" />
        </div>

        {/* Center */}
        <div className={clsx(classes.topSection, classes.topCenterSection)}>
          <div className={classes.bio}>Carter Pon etc etc</div>
          <div className={classes.tabs}>
            <div>HOME</div>
            <div>EXPERIENCE</div>
            <div>PROJECTS</div>
            <div>OTHER INTERESTS</div>
          </div>
        </div>

        {/* Social */}
        <div className={clsx(classes.topSection, classes.social)}>SOCIAL</div>
      </div>
      <div className={classes.bottomPanel}>BOTTOM</div>
    </div>
  )
}

export default Resume
