import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import useStyles from './Style';

interface ITodoList {
  todos: string[];
  deleteTodo: (index: number) => void;
}

export default ({ todos, deleteTodo }: ITodoList): React.ReactElement<HTMLElement> => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List>
        {
          todos.map((todo: string, index: number): React.ReactElement<HTMLElement> => (
            <ListItem key={index} dense button>
              <Checkbox tabIndex={-1} disableRipple />
              <ListItemText primary={todo} />
              <ListItemSecondaryAction>
                <IconButton
                  aria-label="Delete"
                  onClick={(): void => {
                    deleteTodo(index)
                  }}
                >
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))
        }
      </List>
    </div>
  );
};