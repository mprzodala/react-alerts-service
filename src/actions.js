import SimpleStorage from './simpleStorage';
import {findIndex} from 'lodash';

export class Actions {
    constructor(storageType = 'simpleStorage'){
        if(storageType === 'simpleStorage'){
            this.storage = SimpleStorage;
            this.getAlerts = () => {
                return this.storage.getItem('react-alerts') || {messages: []};
            };
            this.setAlerts = (alerts) => {
                this.storage.setItem('react-alerts', alerts);
            };
        }
        if(storageType === 'localStorage'){
            this.storage = localStorage;
            this.getAlerts = () => {
                return JSON.parse(this.storage.getItem('react-alerts')) || {messages: []};
            };
            this.setAlerts = (alerts) => {
                this.storage.setItem('react-alerts', JSON.stringify(alerts));
            };
        }
    }
    generateMessageId(){
        return Math.random().toString(36).substring(7);
    }
    setMessage(messageContent, type, messageIcon){
        const alerts = this.getAlerts();
        const index = findIndex(alerts.messages, m => m.messageContent.indexOf(messageContent) > -1);
        if(index > -1){
            alerts.messages[index].repeated ++;
        }else {
            alerts.messages.push({
                id: this.generateMessageId(),
                type,
                messageContent,
                messageIcon,
                timeCreated: new Date(),
                repeated: 1
            });
        }
        this.setAlerts(alerts);
    }
    setErrorMessage(message, icon){
        this.setMessage(message, 'error', icon);
    }
    setWarningMessage(message, icon){
        this.setMessage(message, 'warning', icon);
    }
    setInfoMessage(message, icon){
        this.setMessage(message, 'info', icon);
    }
    setSuccessMessage(message, icon){
        this.setMessage(message, 'success', icon);
    }
}

export default new Actions();