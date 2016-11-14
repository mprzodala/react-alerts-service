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

const MessagesHandlerSemantic = (props) => <MessagesHandler {...props} {...sematicClasses}/>;

MessagesHandlerSemantic.propTypes = {
    wrapperClassName: React.PropTypes.string,
    errorMessageProps: React.PropTypes.shape({
        wrapperClassName: React.PropTypes.string,
        textClassName: React.PropTypes.string,
        closeButtonClassName: React.PropTypes.string,
        closeButtonContent: React.PropTypes.any
    }),
    warningMessageProps: React.PropTypes.shape({
        wrapperClassName: React.PropTypes.string,
        textClassName: React.PropTypes.string,
        closeButtonClassName: React.PropTypes.string,
        closeButtonContent: React.PropTypes.any
    }),
    infoMessageProps: React.PropTypes.shape({
        wrapperClassName: React.PropTypes.string,
        textClassName: React.PropTypes.string,
        closeButtonClassName: React.PropTypes.string,
        closeButtonContent: React.PropTypes.any
    }),
    successMessageProps: React.PropTypes.shape({
        wrapperClassName: React.PropTypes.string,
        textClassName: React.PropTypes.string,
        closeButtonClassName: React.PropTypes.string,
        closeButtonContent: React.PropTypes.any
    }),
    closeTime: React.PropTypes.number,
    animation: React.PropTypes.string
};

export {MessagesHandlerSemantic};