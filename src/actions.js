import SimpleStorage from './simpleStorage';
import {findIndex} from 'lodash';

export class Actions {
    constructor(storageType = 'simpleStorage'){
        if(storageType === 'simpleStorage'){
            this.storage = SimpleStorage;
            this.getAlerts = () => {
                return this.storage.getItem('react-alerts') || {errorMessages: [], warningMessages: [], infoMessages: [], successMessages: []};
            };
            this.setAlerts = (alerts) => {
                this.storage.setItem('react-alerts', alerts);
            };
        }
        if(storageType === 'localStorage'){
            this.storage = localStorage;
            this.getAlerts = () => {
                return JSON.parse(this.storage.getItem('react-alerts')) || {errorMessages: [], warningMessages: [], infoMessages: [], successMessages: []};
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
        const index = findIndex(alerts[type], m => m.messageContent.indexOf(messageContent) > -1);
        if(index > -1){
            alerts[type][index].repeated ++;
        }else {
            alerts[type].push({
                id: this.generateMessageId(),
                messageContent,
                messageIcon,
                timeCreated: new Date(),
                repeated: 0
            });
        }
        this.setAlerts(alerts);
    }
    setErrorMessage(message, icon){
        this.setMessage(message, 'errorMessages', icon);
    }
    setWarningMessage(message, icon){
        this.setMessage(message, 'warningMessages', icon);
    }
    setInfoMessage(message, icon){
        this.setMessage(message, 'infoMessages', icon);
    }
    setSuccessMessage(message, icon){
        this.setMessage(message, 'successMessages', icon);
    }
}

export default new Actions();