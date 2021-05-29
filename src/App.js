import "./core/sass/App.scss";
import { lazy, Suspense } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createStore } from "redux";
import chartReducer from "./core/context/core/reducers/chartReducer";
import Header from "./components/Header";
import { CgSpinnerTwoAlt } from "react-icons/cg";

const state = createStore(chartReducer);

const Home = lazy(() => import("./pages/Home"));
const Charts = lazy(() => import("./pages/Charts"));

const App = () => {
  return (
    <Provider store={state}>
      <Router>
        <div className="App">
          <Header />

          <Suspense fallback={<CgSpinnerTwoAlt className="spinner" />}>
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
