import './App.css';
import Main from './Components/MainComponent';
import { Component } from 'react';
import {BrowserRouter} from "react-router-dom"
import { Provider } from "react-redux";
import { configureStore } from "./redux/configureStore"

class App extends Component {
  render() {

    const store = configureStore()
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Main/>
          </div>
        </BrowserRouter>
      </Provider>
    )
  };
}

export default App;
