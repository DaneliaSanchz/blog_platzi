import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Menu from './Menu';
import Users from './users/index';
import Publications from './Publications';

const Tasks = () => <div>Tasks</div>;

const App = () => (
  <BrowserRouter>
    <Menu />
    <div className='margin'>
      <Route exact path='/' component={Users}></Route>
      <Route exact path='/tasks' component={Tasks}></Route>
      <Route exact path='/publications/:key' component={Publications}></Route>
    </div>
  </BrowserRouter>
);

export default App;
