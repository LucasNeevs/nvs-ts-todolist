import React from 'react';
import { AppBar, Typography } from '@material-ui/core';
import useStyles from './Style';

export default (): React.ReactElement<HTMLElement> => {
  const classes = useStyles();

  return (
    <>
      <AppBar className={classes.root}>
        <Typography
          variant="h6"
          component="p"
          noWrap
        >
          Todo List
        </Typography>
      </AppBar>
    </>
  );
}