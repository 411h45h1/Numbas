import "./core/sass/App.scss";
import { Suspense, useContext } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Header from "./components/Header";
import { CgSpinnerTwoAlt } from "react-icons/cg";
import { Home, Charts, OnBoard } from "./pages";
import AppState from "./core/context/AppState";
import AppContext from "./core/context/appContext";

const App = () => {
  const AuthRoute = ({ component: Component, ...rest }) => {
    const state = useContext(AppContext);
    const { loggedIn } = state;
    return (
      <Route
        {...rest}
        render={(props) =>
          loggedIn === true ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{ pathname: "/login", state: { from: props.location } }}
            />
          )
        }
      />
    );
  };

  return (
    <AppState>
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
                <Route exact path="/Login-Register" component={OnBoard} />
                <AuthRoute path="/Charts" component={Charts} />
              </Switch>
            </Suspense>
          </div>
        </div>
      </Router>
    </AppState>
  );
};

export default App;
