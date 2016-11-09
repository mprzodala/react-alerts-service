import React from 'react';
import {MessagesHandler} from '../../components/messagesHandler';

let sematicClasses = {
    errorMessageProps: {
        wrapperClassName: 'ui negative message',
        textClassName: 'header',
        closeButtonClassName: 'close icon',
        closeButtonContent: ''
    },
    warningMessageProps: {
        wrapperClassName: 'ui warning message',
        textClassName: 'header',
        closeButtonClassName: 'close icon',
        closeButtonContent: ''
    },
    successMessageProps: {
        wrapperClassName: 'ui positive message',
        textClassName: 'header',
        closeButtonClassName: 'close icon',
        closeButtonContent: ''
    },
    infoMessageProps: {
        wrapperClassName: 'ui info message',
        textClassName: 'header',
        closeButtonClassName: 'close icon',
        closeButtonContent: ''
    }
};

export const MessagesHandlerSemantic = (props) => <MessagesHandler {...props} {...sematicClasses}/>;

