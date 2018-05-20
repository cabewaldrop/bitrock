import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

export class HelloWorld extends Component {
    render() {
        return (
            <Jumbotron>
                <h1>Bitrock</h1>
                <p>
                    Invest in the world's fastest growing asset class in the same way you invest in stocks.
                </p>
                <p>
                    <Button bsStyle="primary">Learn more</Button>
                </p>
            </Jumbotron>
        );
    }
}
export default HelloWorld;