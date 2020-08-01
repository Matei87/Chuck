import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <footer>
                Made by&nbsp;<p>Matei Mircea</p>&nbsp;@ {new Date().getFullYear()}
            </footer>
        )
    }
}

export default Footer;
