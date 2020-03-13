import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../img/image.jpg';
import Social from '../components/Social';

class Home extends Component {
    render() {
        return (
            <div className="condiv home">
                <img alt="profile" src={profilepic} className="profilepic"></img>
                <ReactTypingEffect className="typingeffect" text={['I am Manoj Neupane', 'I am a web developer']} speed={100} eraseDelay={700}/>
                <Social />
            </div>
        )
    }
}

export default Home;