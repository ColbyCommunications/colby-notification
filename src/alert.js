import React from 'react';
import PropTypes from 'prop-types';
import style from './style.css';

export default class Alert extends React.Component {
    static propTypes = {
        message: PropTypes.node,
        type: PropTypes.string,
        // eslint-disable-next-line react/require-default-props
        data: PropTypes.object,
        duration: PropTypes.number,
        cleanup: PropTypes.func.isRequired,
    };

    static defaultProps = {
        message: 'Are you sure?',
        type: 'success',
        duration: 5000,
    };

    componentDidMount() {
        setTimeout(() => {
            this.alert.style.right = '0px';
        });

        if (this.props.duration > 0) {
            setTimeout(this.abort, this.props.duration);
        }
    }

    abort = () => {
        if (!this.alert) {
            return;
        }

        this.alert.style.right = '-310px';
        setTimeout(this.props.cleanup, 300);
    };

    render() {
        // eslint-disable-next-line react/destructuring-assignment
        const { data } = this.props;

        return (
            <div
                className={style.alert}
                ref={item => {
                    this.alert = item;
                }}
            >
                <div className={`alert alert-${this.props.type}`}>
                    <button type="button" className={`close ${style.close}`} onClick={this.abort}>
                        &times;
                    </button>
                    {this.props.message}
                    {data && <pre className={style.pre}>{JSON.stringify(data, null, 2)}</pre>}
                </div>
            </div>
        );
    }
}
