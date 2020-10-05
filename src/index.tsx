import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store";
import App from "./App";

import getMuiTheme from "material-ui/styles/getMuiTheme";
import { MuiThemeProvider, lightBaseTheme } from "material-ui/styles";

const lightMuiTheme = getMuiTheme(lightBaseTheme);
const store = configureStore();

const Root = () => (
  <Provider store={store}>
    <MuiThemeProvider muiTheme={lightMuiTheme}>
      <App />
    </MuiThemeProvider>
  </Provider>
);

const rootElement = document.getElementById("root");
render(<Root />, rootElement);
