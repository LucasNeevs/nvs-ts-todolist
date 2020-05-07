import React from 'react';
import { Grid, TextField } from '@material-ui/core';
import useInputState from '../TodoActions/useInputState';
import useStyles from './Style';

interface IForm {
  saveTodo: (value: any) => void;
}

export default ({ saveTodo }: IForm): React.ReactElement<HTMLElement> => {
  const { value, onChange, reset } = useInputState('');
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <form
        onSubmit={(event: any) => {
          event.preventDefault();
          // Creating a new todo with sented value
          saveTodo(value);
          // Cleaning the input field
          reset();
        }}
      >
        <Grid
          container
          spacing={2}
          justify="center"
          alignItems="center"
          className={classes.form}
        >
          <Grid item md={12} xs={12}>
            <TextField 
              variant="outlined"
              margin="dense"
              value={value}
              onChange={onChange}
              title="Insert a todo and press enter"
              fullWidth
            />
          </Grid>
        </Grid>
      </form>
    </div>
  );
};