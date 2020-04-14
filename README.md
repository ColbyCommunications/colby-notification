# colby-notification

A react component to show a bootstrap alert in the top right corner of the browser.

## Usage

### Simple Notification

```javascript
import React from 'react';
import notification from 'colby-notification';

export default () => (
    <button
        type="button"
        className="btn btn-default"
        onClick={() => notification('Simple Notification')}
    >
        Click Me
    </button>
);
```

### Different Types

```javascript
import React from 'react';
import notification from 'colby-notification';

export default class Component extends React.Component {
    showSuccessNotification = () => {
        notification({ message: 'Success', type: 'success' });
    };

    showInfoNotification = () => {
        notification({ message: 'Info', type: 'info' });
    };

    showWarningNotification = () => {
        notification({ message: 'Warning', type: 'warning' });
    };

    showDangerNotification = () => {
        notification({ message: 'Danger', type: 'danger' });
    };

    render() {
        return (
            <div>
                <button
                    type="button"
                    className="btn btn-default"
                    onClick={this.showSuccessNotification}
                >
                    Success
                </button>{' '}
                <button
                    type="button"
                    className="btn btn-default"
                    onClick={this.showInfoNotification}
                >
                    Info
                </button>{' '}
                <button
                    type="button"
                    className="btn btn-default"
                    onClick={this.showWarningNotification}
                >
                    Warning
                </button>{' '}
                <button
                    type="button"
                    className="btn btn-default"
                    onClick={this.showDangerNotification}
                >
                    Danger
                </button>
            </div>
        );
    }
}
```

### In Modal

```javascript
import React from 'react';
import notification from 'colby-notification';

export default class Component extends React.Component {
    onClick = () => {
        notification({
            message: 'Notification in modal',
            inModal: true,
        });
    };

    render() {
        return (
            <div>
                <button type="button" className="btn btn-default" onClick={this.onClick}>
                    Click Me
                </button>
            </div>
        );
    }
}
```
