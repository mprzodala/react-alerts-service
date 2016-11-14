import React from 'react';
import {renderToString} from 'react-dom/server';
import {expect} from 'chai';
import {actions} from '../src';

describe('React Alerts', () => {
    it('should have 1 success message in storage', () => {
        actions.setSuccessMessage('success message');
        const alerts = actions.getAlerts();
        expect(alerts.messages).to.have.length(1);
        expect(alerts.messages[0]).to.have.property('type', 'success');
        expect(alerts.messages[0]).to.have.property('messageContent', 'success message');
        actions.setAlerts({messages:[]});
    });
    it('should have 1 success message in storage with 5 repeated', () => {
        actions.setSuccessMessage('success message');
        actions.setSuccessMessage('success message');
        actions.setSuccessMessage('success message');
        actions.setSuccessMessage('success message');
        actions.setSuccessMessage('success message');
        const alerts = actions.getAlerts();
        expect(alerts.messages).to.have.length(1);
        expect(alerts.messages[0]).to.have.property('type', 'success');
        expect(alerts.messages[0]).to.have.property('repeated', 5);
        expect(alerts.messages[0]).to.have.property('messageContent', 'success message');
        actions.setAlerts({messages:[]});
    });

    it('should have 1 warning message in storage', () => {
        actions.setWarningMessage('warning message');
        const alerts = actions.getAlerts();
        expect(alerts.messages).to.have.length(1);
        expect(alerts.messages[0]).to.have.property('type', 'warning');
        expect(alerts.messages[0]).to.have.property('messageContent', 'warning message');
        actions.setAlerts({messages:[]});
    });
    it('should have 1 warning message in storage with 5 repeated', () => {
        actions.setWarningMessage('warning message');
        actions.setWarningMessage('warning message');
        actions.setWarningMessage('warning message');
        actions.setWarningMessage('warning message');
        actions.setWarningMessage('warning message');
        const alerts = actions.getAlerts();
        expect(alerts.messages).to.have.length(1);
        expect(alerts.messages[0]).to.have.property('type', 'warning');
        expect(alerts.messages[0]).to.have.property('repeated', 5);
        expect(alerts.messages[0]).to.have.property('messageContent', 'warning message');
        actions.setAlerts({messages:[]});
    });

    it('should have 1 info message in storage', () => {
        actions.setInfoMessage('info message');
        const alerts = actions.getAlerts();
        expect(alerts.messages).to.have.length(1);
        expect(alerts.messages[0]).to.have.property('type', 'info');
        expect(alerts.messages[0]).to.have.property('messageContent', 'info message');
        actions.setAlerts({messages:[]});
    });
    it('should have 1 info message in storage with 5 repeated', () => {
        actions.setInfoMessage('info message');
        actions.setInfoMessage('info message');
        actions.setInfoMessage('info message');
        actions.setInfoMessage('info message');
        actions.setInfoMessage('info message');
        const alerts = actions.getAlerts();
        expect(alerts.messages).to.have.length(1);
        expect(alerts.messages[0]).to.have.property('type', 'info');
        expect(alerts.messages[0]).to.have.property('repeated', 5);
        expect(alerts.messages[0]).to.have.property('messageContent', 'info message');
        actions.setAlerts({messages:[]});
    });

    it('should have 1 error message in storage', () => {
        actions.setErrorMessage('error message');
        const alerts = actions.getAlerts();
        expect(alerts.messages).to.have.length(1);
        expect(alerts.messages[0]).to.have.property('type', 'error');
        expect(alerts.messages[0]).to.have.property('messageContent', 'error message');
        actions.setAlerts({messages:[]});
    });
    it('should have 1 error message in storage with 5 repeated', () => {
        actions.setErrorMessage('error message');
        actions.setErrorMessage('error message');
        actions.setErrorMessage('error message');
        actions.setErrorMessage('error message');
        actions.setErrorMessage('error message');
        const alerts = actions.getAlerts();
        expect(alerts.messages).to.have.length(1);
        expect(alerts.messages[0]).to.have.property('type', 'error');
        expect(alerts.messages[0]).to.have.property('repeated', 5);
        expect(alerts.messages[0]).to.have.property('messageContent', 'error message');
        actions.setAlerts({messages:[]});
    });

    it('should have 40 messages', () => {
        for(let a = 0; a < 10; a++) {
            actions.setSuccessMessage('success message' + a);
        }
        for(let a = 0; a < 10; a++) {
            actions.setInfoMessage('info message' + a);
        }
        for(let a = 0; a < 10; a++) {
            actions.setWarningMessage('warning message' + a);
        }
        for(let a = 0; a < 10; a++) {
            actions.setErrorMessage('error message' + a);
        }
        const alerts = actions.getAlerts();
        expect(alerts.messages).to.have.length(40);
        actions.setAlerts({messages:[]});
    });
});