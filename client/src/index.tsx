import ReactDOM from 'react-dom';
import App from "./App";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {store} from "./store";
import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`

ReactDOM.render(
    <Provider store ={store}>
        <BrowserRouter>
            <>
                <GlobalStyle/>
                <App/>
            </>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

