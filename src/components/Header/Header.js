import React, { Component } from 'react'
import './Header.css';

class Header extends Component {
    render() {
        return (
            <header>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <img src={require('../../logo.jpg')} alt="logo" />
                            <p>Chuck Norris JOKES</p>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}
export default Header;