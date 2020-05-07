import { Theme, makeStyles } from '@material-ui/core/styles';

interface IStyles {
  root: {};
  form: {};
}

export default makeStyles((theme: Theme): IStyles => ({
  root: {
    margin: 0,
  },
  form: {
    padding: theme.spacing(4),
  },
}));