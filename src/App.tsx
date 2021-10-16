import React, { FC, Fragment } from 'react';
import './App.css';

import { 
  Header,
  Meals
  } from '@components';

const App: FC = () => {
  return (
    <Fragment>
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
