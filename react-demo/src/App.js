import React, { Component } from "react";
import "./App.css"
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./router/AppRouter";
import 'antd/dist/antd.css';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <AppRouter />
        </div>
      </Router>
    );
  }
}

export default App;
