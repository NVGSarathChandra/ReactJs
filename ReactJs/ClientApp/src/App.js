import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';

import './custom.css'
import ExpenseItem from './components/Expenses/ExpenseItem';

export default class App extends Component {
    static displayName = App.name;
    constructor() {
        super()
        this.state = {
            collapsed: true,

        };
    }

    render() {
        return (
            <Layout>

                <Route exact path='/' component={Home} />

                <Route path='/counter' component={Counter} />
                <Route path='/fetch-data' component={FetchData} />
                <Route
                    path='/expense-item' component={ExpenseItem} />
            </Layout>
        );
    }
}
