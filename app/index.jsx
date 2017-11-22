import * as React from "react";
import * as ReactDOM from "react-dom";

import  Hello  from "./Hello";

import {AppContainer} from 'react-hot-loader';

ReactDOM.render(
    <AppContainer>
    <Hello />
    </AppContainer>,
    document.getElementById("root")
)

if (module.hot) {
    module.hot.accept('./Hello', () => {
        const NewHello = require('./Hello').default;
        ReactDOM.render(
            <AppContainer>
                <NewHello />
            </AppContainer>,
            document.getElementById('root')
        );
    });
}
  