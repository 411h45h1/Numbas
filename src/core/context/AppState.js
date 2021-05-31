import React, { useCallback, useEffect, useReducer } from "react";
import appReducer from "./appReducer";

//firebase
import firebase from "firebase/app";
import "firebase/auth";
import { logoutUser } from "../api/auth";
import AppContext from "./appContext";

const AppState = (props) => {
  const initialState = {
    loggedIn: false,
    cryptoData: null,
  };
  const [state, dispatch] = useReducer(appReducer, initialState);
  const { loggedIn, cryptoData } = state;

  const getCrypto = () => {
    const apiKey = "e4826edb95b2db3a52e4eae14cc3d6d91c5ef158";
    const coins = "BTC,ETH,ADA,DOT";
    const interval = "1h,30d,365d";
    fetch(
      `https://api.nomics.com/v1/currencies/ticker?key=${apiKey}&ids=${coins}&interval=${interval}`
    )
      .then((response) => response.json())
      .then((data) =>
        dispatch({
          type: "LOAD_CRYPTO_DATA",
          payload: data,
        })
      );
  };

  const onGetCrypto = useCallback(getCrypto, []);

  useEffect(() => {
    authCheck();

    if (!cryptoData && loggedIn) {
      onGetCrypto();
    }
  }, [onGetCrypto, cryptoData, loggedIn]);

  const authCheck = () =>
    firebase.auth().onAuthStateChanged((user) =>
      user
        ? dispatch({
            type: "LOGGED_IN",
          })
        : dispatch({ type: "NOT_LOGGED_IN" })
    );

  const onLogout = () => {
    logoutUser();
    dispatch({ type: "LOG_OUT" });
  };

  // const removeDashboardItem = async (id) =>
  //   await deleteDashboardEntry(id).then(
  //     async () => await onLoadcryptoData()
  //   );

  return (
    <AppContext.Provider
      value={{
        loggedIn: state.loggedIn,
        cryptoData: state.cryptoData,
        getCrypto,

        onLogout,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
