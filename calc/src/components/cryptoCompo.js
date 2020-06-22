import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, CustomInput } from 'reactstrap';
import Search from './searchComponent' 

class cryptoCompo extends Component {
    render() {
        return (
            <reactFragment>  
                <div className='form1'>
                    <Form inline >
                        <FormGroup >
                            <Label for="exampleEmail" hidden>Email</Label>
                            <CustomInput type="select" id="exampleCustomSelect" name="customSelect">
                            <option value="">Select Merchant</option>
                            <option>All</option>
                            <option>Coinbase</option>
                            <option>Paxful</option>
                            <option>Blockchain</option>
                            </CustomInput>
                            <CustomInput type="select" id="exampleCustomSelect" name="customSelect">
                            <option value="">Select Crypto</option>
                            <option>BTC</option>
                            <option>ETH</option>
                            <option>LTC</option>
                            </CustomInput>
                            <CustomInput type="select" id="exampleCustomSelect" name="customSelect">
                            <option value="">Country</option>
                            <option>U.S (Dollar)</option>
                            <option>Nigeria (Naira)</option>
                            <option>Ghana (Cedi)</option>
                            <option>South Africa </option>
                            </CustomInput>
                            <Input type="number" name="number" id="numberCry" placeholder="Enter Amount" />
                        </FormGroup>
                        {' '}
                        <Button onClick={this.Search}>Calculate</Button>
                    </Form>
                </div>
            </reactFragment>
        )
    }
}

export default cryptoCompo;
