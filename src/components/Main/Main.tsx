import React from 'react';
import Inputs from './Inputs';
import Example from './Example';
import './Main.css';

class Main extends React.Component {
    state = {

    }

    render() {
        return (
            <div className="main-container">
                <Inputs />
                <Example />
            </div>
        )
    }
}

export default Main;