import { lazy, Suspense } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createStore } from "redux";
import "./App.scss";
import chartReducer from "./core/context/core/reducers/chartReducer";

const state = createStore(chartReducer);

const Home = lazy(() => import("./pages/Home"));
const Charts = lazy(() => import("./pages/Charts"));

const App = () => {
  return (
    <Provider store={state}>
      <Router>
        <div className="App">
          <header className="App-header">
            <h1>Numbas</h1>
          </header>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/Charts" component={Charts} />
            </Switch>
          </Suspense>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
