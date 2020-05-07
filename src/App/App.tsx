import React from 'react';
import AppBar from '../Components/AppBar/Appbar';
import Header from '../Components/Header/Header';
import TodoFinal from '../Components/TodoFinal/TodoFinal';

export default (): React.ReactElement<HTMLElement> => (
  <>
    <AppBar />
    <Header />
    <TodoFinal />
  </>
);