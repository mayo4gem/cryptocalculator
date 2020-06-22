import React, { Component } from 'react';
import { Card, CardTitle, CardText, Button } from 'reactstrap';
import COINBASE from './coinbase';
import PAXFUL from './coinbase';
import BLOCKCHAIN from './blockchain'

class Search extends Component {
    render(props) {
        return (
          <div>
            <Card body inverse color="success">
                <CardTitle>Check rate below</CardTitle>
                <CardText>
                    <h3>Coinbase: ({this.props.coinbase})</h3>
                    <h3>Blockchain: ({this.props.blockchain})</h3>
                    <h3>Paxful: ({this.paxful})</h3>
              </CardText>
            </Card>
          </div>
        );
    }
}

export default  Search