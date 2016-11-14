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
            id,
            animation
        } = this.props;
        if(animation) {
            this.animationStartTimeoutHandler = setTimeout(() => this.setState({animationClass: this.getAnimationClass('start')}), 100);
            this.animationEndTimeoutHandler = setTimeout(() => this.setState({animationClass: this.getAnimationClass('end')}), closeTime - 500);
        }
        this.timeoutHandler = setTimeout(() => onClose(id), closeTime);
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
            type,
            closeButtonContent = 'X',
            wrapperClassName,
            textClassName = 'message-text',
            closeButtonClassName= 'close-button',
            onClose = () => {},
            id,
            repeated
        } = this.props;
        return (
            <div className={(wrapperClassName || 'system-' + type + '-message') + this.state.animationClass}>
                {messageIcon && <div className="message-icon"><i className={messageIcon} /></div>}
                <div className={textClassName}>
                    {repeated > 1 && '(' + repeated + ') '}{messageContent}
                </div>
                <i onClick={() => onClose(id)} className={closeButtonClassName}>{closeButtonContent}</i>
            </div>
        );
    }
}