import "./core/sass/App.scss";
import { Suspense } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createStore } from "redux";
import chartReducer from "./core/context/core/reducers/chartReducer";
import Header from "./components/Header";
import { CgSpinnerTwoAlt } from "react-icons/cg";
import { Home, Charts } from "./pages";

const state = createStore(chartReducer);

const App = () => {
  return (
    <Provider store={state}>
      <Router>
        <div className="app">
          <Header />

          <div className="cont">
            <Suspense
              fallback={
                <div className="spinnerCont">
                  <CgSpinnerTwoAlt className="spinner" />
                </div>
              }
            >
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/Charts" component={Charts} />
              </Switch>
            </Suspense>
          </div>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
