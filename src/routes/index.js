import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Layout from '../components/Layout.js';
import Settings from '../components/Settings.js';
import History from '../components/History.js';
import Public from '../components/Public.js';
import About from '../components/About.js';
import OurPrinciples from '../components/OurPrinciples.js';

import { createStore, applyMiddleware } from 'redux';
import { foodsAppReducer } from '../foods/FoodsReducers.js';
import { getAndRenderFoods } from '../foods/FoodsActions.js';

import  thunk  from 'redux-thunk';
import { Provider } from 'react-redux';
import FoodsList from '../foods/FoodsList.js';
import AddFood from '../addFoods/AddFood.js';

let store = createStore(foodsAppReducer, applyMiddleware(thunk) );
store.subscribe(()=> { console.log(store.getState()) } );

const AppRoutes =
        (
          <Provider store={store}>
        <Router history={hashHistory} >
          <Route path='/' component={ Layout } >
            <IndexRoute component={ FoodsList } ></IndexRoute>
            <Route path='add' component={ AddFood } ></Route>
            <Route path='foods' component={ FoodsList } ></Route>
            <Route path='menus' component={ AddFood } ></Route>
          </Route>
        </Router>
        </Provider>
      );
export default AppRoutes;
