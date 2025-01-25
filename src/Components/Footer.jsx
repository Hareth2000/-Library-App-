import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className={this.props.className}>
                <p>جميع الحقوق محفوظة &copy; 2023</p>
            </footer>
        );
    }
}

export default Footer;