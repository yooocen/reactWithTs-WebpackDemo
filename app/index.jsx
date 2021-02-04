import * as React from "react";
import * as ReactDOM from "react-dom";

import  MarryMe  from "./MarryMe";

import {AppContainer} from 'react-hot-loader';

ReactDOM.render(
    <AppContainer>
    <MarryMe />
    </AppContainer>,
    document.getElementById("root")
)

if (module.hot) {
    module.hot.accept('./Hello', () => {
        const MarryMe = require('./MarryMe').default;
        ReactDOM.render(
            <AppContainer>
                <MarryMe />
            </AppContainer>,
            document.getElementById('root')
        );
    });
}
  