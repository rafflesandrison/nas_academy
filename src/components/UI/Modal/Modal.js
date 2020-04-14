import React, { Component } from 'react';
import Aux from '../../../hoc/Auxiliary';

class Modal extends Component {
    render() {
        return (
            <Aux>
                <div>
                    {this.props.children}
                </div>
            </Aux>
        )
    }
}

export default Modal;