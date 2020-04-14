import React from 'react';
import ReactDOM from 'react-dom';
import Alert from './alert.js';
import Modal from './Modal.js';
import style from './style.css';

export default options => {
    if (typeof options === 'string') {
        // eslint-disable-next-line no-param-reassign
        options = {
            message: options,
        };
    }

    let wrapper = document.getElementById('colby-notification-wrapper');
    if (!wrapper) {
        wrapper = document.body.appendChild(document.createElement('div'));
        wrapper.id = 'colby-notification-wrapper';
        wrapper.className = style.wrapper;
    }

    const target = wrapper.appendChild(document.createElement('div'));
    const cleanup = () => {
        ReactDOM.unmountComponentAtNode(target);
        setTimeout(() => {
            target.remove();
        });
    };

    if (options.inModal) {
        ReactDOM.render(<Modal {...options} cleanup={cleanup} />, target);
    } else {
        ReactDOM.render(<Alert {...options} cleanup={cleanup} />, target);
    }
};
