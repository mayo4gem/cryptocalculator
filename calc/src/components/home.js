import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';
import Compo from './cryptoCompo';


class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <Compo />
                <Footer />
            </div>
        )
    }
}

export default Home
