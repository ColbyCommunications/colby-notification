import React from 'react';
import PropTypes from 'prop-types';
import Modal from '@colbycommunications/colby-modal';
import style from './style.css';

export default class Component extends React.Component {
    static propTypes = {
        // eslint-disable-next-line react/require-default-props
        message: PropTypes.node,
        cleanup: PropTypes.func.isRequired,
        // eslint-disable-next-line react/require-default-props
        data: PropTypes.object,
        // eslint-disable-next-line react/require-default-props
        showModalCloseButton: PropTypes.bool,
        // eslint-disable-next-line react/require-default-props
        modalCloseButton: PropTypes.node,
        modalProps: PropTypes.object,
    };

    static defaultProps = {
        modalProps: {
            title: 'Message',
        },
    };

    componentDidMount() {
        this.modal.open();
    }

    cleanup = () => {
        setTimeout(this.props.cleanup, 1000);
    };

    close = e => {
        // eslint-disable-next-line no-unused-expressions
        e && e.preventDefault();
        this.modal.close();
    };

    render() {
        // eslint-disable-next-line react/destructuring-assignment
        const { data } = this.props;

        return (
            <Modal
                title="Message"
                {...this.props.modalProps}
                trigger={null}
                ref={modal => {
                    this.modal = modal;
                }}
                afterClose={this.cleanup}
            >
                <div>{this.props.message}</div>
                {data && <pre className={style.pre}>{JSON.stringify(data, null, 2)}</pre>}
                {this.props.showModalCloseButton && (
                    <div className={style.closeButton}>
                        {this.props.modalCloseButton ? (
                            <button type="button" className="btn btn-primary" onClick={this.close}>
                                {this.props.modalCloseButton}
                            </button>
                        ) : (
                            <button type="button" className="btn btn-primary" onClick={this.close}>
                                Ok
                            </button>
                        )}
                    </div>
                )}
            </Modal>
        );
    }
}
