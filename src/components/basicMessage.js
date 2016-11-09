import React from 'react';

export class BasicMessage extends React.Component {
    constructor (props) {
        super(props);
    }

    componentWillMount () {
        const {
            closeTime = 5000,
            onClose = () => {},
            messageType,
            id
        } = this.props;
        this.timeoutHandler = setTimeout(() => onClose(messageType, id), closeTime);
    }

    render () {
        const {
            messageIcon,
            messageContent,
            messageType,
            closeButtonContent = 'X',
            wrapperClassName = 'system-error-message',
            textClassName = 'message-text',
            closeButtonClassName= 'close-button',
            onClose = () => {},
            id
        } = this.props;
        return (
            <div className={wrapperClassName}>
                {messageIcon && <div className="message-icon"><i className={messageIcon} /></div>}
                <div className={textClassName}>
                    {messageContent}
                </div>
                <i onClick={() => onClose(messageType, id)} className={closeButtonClassName}>{closeButtonContent}</i>
            </div>
        );
    }
}