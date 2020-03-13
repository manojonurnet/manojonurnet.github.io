import React, { Component } from 'react'
import Social from '../components/Social';

class Contact extends Component {
    render() {
        return (
            <div className="condiv skills">
                <h1 className="subtopic">Contact Me</h1>
                <h3>Gmail: @manojonurnet</h3>
                <h3>Skype: @manojonurnet</h3>
                <h3>Phone: +977 9841434125</h3>
                <Social />
            </div>
        )
    }
}

export default Contact;