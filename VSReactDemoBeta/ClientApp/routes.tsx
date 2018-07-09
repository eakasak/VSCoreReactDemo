import * as React from 'react';
import { Route } from 'react-router-dom';
import { Main_Layout } from './components/Main_Layout';
import { Home } from './components/Home';
import { Login } from './components/Login/Login';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';

export const routes = <Main_Layout>
    <Route exact path='/' component={ Home } />
    <Route path='/login' component={ Login } />
    <Route path='/counter' component={ Counter } />
    <Route path='/fetchdata' component={ FetchData } />
</Main_Layout>;
