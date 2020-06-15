import React, { Component } from "react";

export const AppContext = React.createContext();

export default class AppProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      locale: "en",
      SlangModal: false,
      Levels: 0,
    };
  }

  render() {
    const openModal = () => {
      this.setState({ SlangModal: true });
    };

    const closeModal = () => {
      this.setState({ SlangModal: false });
    };

    return (
      <AppContext.Provider
        value={{
          state: this.state,
          openModal: openModal,
          closeModal: closeModal,
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
