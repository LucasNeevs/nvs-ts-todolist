import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import useStyles from './Style';

export default (): React.ReactElement<HTMLElement> => {
  const classes = useStyles();

  return (
    <>
      <Grid
        container
        spacing={2}
        justify="center"
        alignItems="center"
        className={classes.root}
      >
        <Grid item md={12} xs={12}>
          <Typography
            variant="h6"
            component="p"
            color="primary"
            align="center"
          >
            TS ▪ React ▪ Storybook
          </Typography>
        </Grid>
        <Grid item md={12} xs={12}>
          <Typography
            component="h1"
            variant="h1"
            color="primary"
            align="center"
            className={classes.title}
          >
            Todo List
          </Typography>
        </Grid>
        <Grid item md={12} xs={12}>
          <Typography
            variant="h4"
            component="p"
            color="primary"
            align="center"
          >
            What do you need to do today?
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};