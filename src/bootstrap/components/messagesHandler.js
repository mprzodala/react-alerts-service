import React from 'react';
import {MessagesHandler} from '../../components/messagesHandler';

let bootstrapClasses = {
    errorMessageProps: {
        wrapperClassName: 'alert alert-danger alert-dismissible',
        textClassName: 'copntent',
        closeButtonClassName: 'close',
        closeButtonContent: 'X'
    },
    warningMessageProps: {
        wrapperClassName: 'alert alert-warning alert-dismissible',
        textClassName: 'content',
        closeButtonClassName: 'close',
        closeButtonContent: 'X'
    },
    successMessageProps: {
        wrapperClassName: 'alert alert-success alert-dismissible',
        textClassName: 'content',
        closeButtonClassName: 'close',
        closeButtonContent: 'X'
    },
    infoMessageProps: {
        wrapperClassName: 'alert alert-info alert-dismissible',
        textClassName: 'content',
        closeButtonClassName: 'close',
        closeButtonContent: 'X'
    }
};

export const MessagesHandlerBootstrap = (props) => <MessagesHandler {...props} {...bootstrapClasses}/>;

