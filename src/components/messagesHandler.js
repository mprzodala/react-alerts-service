import React from 'react';
import {Actions} from '../actions';
import {ErrorMessage} from './errorMessage';
import {WarningMessage} from './warningMessage';
import {InfoMessage} from './infoMessage';
import {SuccessMessage} from './successMessage';
import {findIndex} from 'lodash';

export class MessagesHandler extends React.Component {
    constructor (props) {
        super(props);
        this.actions = new Actions(props.storageType);
        this.state = {
            errorMessages: [],
            warningMessages: [],
            infoMessages: [],
            successMessages: []
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
            const {
                errorMessages = [],
                warningMessages = [],
                infoMessages = [],
                successMessages = []
            } = self.actions.getAlerts() || {};
            self.setState({errorMessages,warningMessages,infoMessages,successMessages});
        };
        this.actions.storage.setItem = function () {
            originalSetAlerts.apply(this, arguments);
            onSetItemEvent.apply(this, arguments);
        };
        onSetItemEvent('react-alerts');
    }

    componentWillUnmount () {
        clearInterval(this.intervalHandler);
    }
    
    onClose (type, id) {
        const index = findIndex(this.state[type], m => m.id === id);
        if(index > -1) {
            let messages = this.state[type];
            messages.splice(index, 1);
            this.setState({[type]: messages});
            this.actions.setAlerts(this.state);
        }
    }

    render () {
        const {
            wrapperClassName = 'messages-handler-wrapper',
            errorMessageProps = {},
            warningMessageProps = {},
            infoMessageProps = {},
            successMessageProps = {},
            closeTime = 5000
        } = this.props;
        return (
            <div className={wrapperClassName}>
                {this.state.errorMessages.map((item, key) => <ErrorMessage closeTime={closeTime} {...errorMessageProps} {...item} key={'error' + key} onClose={this.onClose} />)}
                {this.state.warningMessages.map((item, key) => <WarningMessage closeTime={closeTime} {...warningMessageProps} {...item} key={'warning' + key} onClose={this.onClose} />)}
                {this.state.infoMessages.map((item, key) => <InfoMessage closeTime={closeTime} {...infoMessageProps} {...item} key={'info' + key} onClose={this.onClose} />)}
                {this.state.successMessages.map((item, key) => <SuccessMessage closeTime={closeTime} {...successMessageProps} {...item} key={'success' + key} onClose={this.onClose} />)}
            </div>
        );
    }
}