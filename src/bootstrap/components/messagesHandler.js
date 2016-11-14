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

const MessagesHandlerBootstrap = (props) => <MessagesHandler {...props} {...bootstrapClasses}/>;

MessagesHandlerBootstrap.propTypes = {
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

export {MessagesHandlerBootstrap};