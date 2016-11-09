export const actions = {
    getAlerts(){
        return JSON.parse(localStorage.getItem('react-alerts')) || {errorMessages: [], warningMessages: [], infoMessages: [], successMessages: []};
    },
    setAlerts(alerts){
        localStorage.setItem('react-alerts', JSON.stringify(alerts));
    },
    generateMessageId(){
        return Math.random().toString(36).substring(7);
    },
    setMessage(messageContent, type, messageIcon){
        const alerts = this.getAlerts();
        alerts[type].push({id: this.generateMessageId() ,messageContent, messageIcon, timeCreated: new Date()});
        this.setAlerts(alerts);
    },
    setErrorMessage(message, icon){
        this.setMessage(message, 'errorMessages', icon);
    },
    setWarningMessage(message, icon){
        this.setMessage(message, 'warningMessages', icon);
    },
    setInfoMessage(message, icon){
        this.setMessage(message, 'infoMessages', icon);
    },
    setSuccessMessage(message, icon){
        this.setMessage(message, 'successMessages', icon);
    }
};