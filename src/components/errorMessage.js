import React from 'react';
import {BasicMessage} from './basicMessage';

export const ErrorMessage = (props) => <BasicMessage {...props} messageType={'errorMessages'}/>;