import React from 'react';

export class BasicMessage extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            animationClass: this.getAnimationClass('hidden')
        }
    }

    componentWillMount () {
        const {
            closeTime = 5000,
            onClose = () => {},
            messageType,
            id,
            animation
        } = this.props;

        if(animation) {
            this.animationStartTimeoutHandler = setTimeout(() => this.setState({animationClass: this.getAnimationClass('start')}), 100);
            this.animationEndTimeoutHandler = setTimeout(() => this.setState({animationClass: this.getAnimationClass('end')}), closeTime - 500);
        }
        this.timeoutHandler = setTimeout(() => onClose(messageType, id), closeTime);
    }

    componentWillUnmount () {
        if(this.props.animation){
            clearTimeout(this.animationStartTimeoutHandler);
            clearTimeout(this.animationEndTimeoutHandler);
        }
    }

    getAnimationClass (when) {
        if(!this.props.animation || !when){
            return '';
        }
        return ' ' + this.props.animation + '-' + when;
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
            id,
            repeated
        } = this.props;
        return (
            <div className={wrapperClassName + this.state.animationClass}>
                {messageIcon && <div className="message-icon"><i className={messageIcon} /></div>}
                <div className={textClassName}>
                    {repeated > 0 && '(' + repeated + ') '}{messageContent}
                </div>
                <i onClick={() => onClose(messageType, id)} className={closeButtonClassName}>{closeButtonContent}</i>
            </div>
        );
    }
}