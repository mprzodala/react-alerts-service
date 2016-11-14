import React from 'react';
import {Actions} from '../actions';
import {BasicMessage} from './basicMessage';
import {findIndex} from 'lodash';

export class MessagesHandler extends React.Component {
    constructor (props) {
        super(props);
        this.actions = new Actions(props.storageType);
        this.state = {
            messages: []
        };
        this.onClose = this.onClose.bind(this);
    }

    componentWillMount () {
        const originalSetAlerts = this.actions.storage.setItem;
        const self = this;
        const onSetItemEvent = function(itemName) {
            if(itemName !== 'react-alerts') {
                return;
            }
            const {messages = []} = self.actions.getAlerts() || {};
            self.setState({messages});
        };
        this.actions.storage.setItem = function () {
            originalSetAlerts.apply(this, arguments);
            onSetItemEvent.apply(this, arguments);
        };
        onSetItemEvent('react-alerts');
    }
    
    onClose (id) {
        const index = findIndex(this.state.messages, m => m.id === id);
        if(index > -1) {
            let messages = this.state.messages;
            messages.splice(index, 1);
            this.setState({messages});
            this.actions.setAlerts(this.state);
        }
    }

    renderMessage ({item, key, closeTime, animation, messagesProps}) {
        const currentMessageProps = messagesProps[item.type];
        return (
            <BasicMessage
                closeTime={closeTime}
                animation={animation}
                {...currentMessageProps}
                {...item}
                key={'error' + key}
                onClose={this.onClose}
            />
        );
    }

    render () {
        const {
            wrapperClassName = 'messages-handler-wrapper',
            errorMessageProps = {},
            warningMessageProps = {},
            infoMessageProps = {},
            successMessageProps = {},
            closeTime = 5000,
            animation
        } = this.props;
        const messagesProps = {
            error: errorMessageProps,
            warning: warningMessageProps,
            info: infoMessageProps,
            success: successMessageProps
        };
        return (
            <div className={wrapperClassName}>
                {this.state.messages.map((item, key) => this.renderMessage({
                    item,
                    key,
                    closeTime,
                    animation,
                    messagesProps
                }))}
            </div>
        );
    }
}