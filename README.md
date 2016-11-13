##React alerts service (ES6)

####Installation

```js
npm i react-alerts-service --save
```

####MessagesHandler

Basic use example
```js
import {MessagesHandler} from 'react-alerts-service';

<MessagesHandler />
```

Advanced use example
```js
import {MessagesHandler} from 'react-alerts-service';

errorProps = {
    wrapperClassName: 'ui negative message',
    textClassName: 'header',
    closeButtonClassName: 'close icon',
    closeButtonContent: ''
};
warningProps = {
    wrapperClassName: 'ui warning message',
    textClassName: 'header',
    closeButtonClassName: 'close icon',
    closeButtonContent: ''
};
successProps = {
    wrapperClassName: 'ui positive message',
    textClassName: 'header',
    closeButtonClassName: 'close icon',
    closeButtonContent: ''
};
infoProps = {
    wrapperClassName: 'ui info message',
    textClassName: 'header',
    closeButtonClassName: 'close icon',
    closeButtonContent: ''
};

<MessagesHandler
    animation={'rotate'}
    storageType={'simpleStorage'}
    wrapperClassName={'messages-wrapper'}
    errorMessageProps={errorProps}
    warningMessageProps={warningProps},
    infoMessageProps={infoProps},
    successMessageProps={successProps},
    closeTime={5000},
/>
```

also You can use ready semanticUI or Bootstrap theme

```js
import {MessagesHandlerSemantic} from 'react-alerts-service';

<MessagesHandlerSemantic />
```

```js
import {MessagesHandlerBootstrap} from 'react-alerts-service';

<MessagesHandlerBootstrap />
```


####Actions
```js
setErrorMessage(message, icon)
```

```js
setWarningMessage(message, icon)
```

```js
setInfoMessage(message, icon)
```

```js
setSuccessMessage(message, icon)
```

simple example

```js
import {actions} from 'react-alerts-service';

export const errorButton = () => (
    <a onClick={() => actions.setErrorMessage('Some error message text')}>Error alert button</a>
);

export const warningButton = () => (
    <a onClick={() => actions.setWarningMessage('Some error message text')}>Warning alert button</a>
);

export const infoButton = () => (
    <a onClick={() => actions.setInfoMessage('Some error message text')}>Info alert button</a>
);

export const successButton = () => (
    <a onClick={() => actions.setSuccessMessage('Some error message text')}>Success alert button</a>
);
```

####Storage

You can use localStorage or simpleStorage, simpleStorage is default if You want use localStorage You must set it on Actions and messages handler

```js
import {Actions} from 'react-alerts-service';
const actions = new Actions('localStorage');

<MessagesHandlerBootstrap storageType={'localStorage'} />

```