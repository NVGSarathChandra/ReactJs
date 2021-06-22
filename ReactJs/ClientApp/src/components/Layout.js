import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';
import ExpenseItem from './ExpenseItem';

export class Layout extends Component {
    static displayName = Layout.name;
    constructor(props) {
        super(props)
        console.log(Layout.name, this.props)
    }

    render() {
        return (
            <div>
                <NavMenu />
                <Container>
                    {this.props.children}
                </Container>
            </div>

        );
    }
}
