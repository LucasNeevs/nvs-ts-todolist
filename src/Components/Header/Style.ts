import { Theme, makeStyles } from '@material-ui/core/styles';

interface IStyles {
  root: {};
  title: {};
}

export default makeStyles((theme: Theme): IStyles => ({
  root: {
    padding: theme.spacing(1),
    marginTop: '3rem',
  },
  title: {
    textShadow: '2px 2px 2px #d4d4d4'
  },
}));