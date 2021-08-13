import React, { Component } from "react";
import PropTypes from "prop-types";

const DEFAULT_MESSAGE = "Something is Error";

export default class ErrorBoundary extends Component {
  state = {
    errorMsg: "",
    hasError: false,
  };

  static getDerivedStateError(error) {
    return { hasError: true, errorMsg: error.message };
  }

  componentDidCatch(error, info) {
    console.log(error);
    console.log("Error info", info);
  }

  render() {
    const { errorMsg, hasError } = this.state;
    const { msg, hideMessage } = this.props;

    if (hasError) {
      return <h1>{hideMessage ? DEFAULT_MESSAGE : msg || errorMsg}</h1>;
    }
  }
}

ErrorBoundary.defaultProps = {
  hideMessage: true,
  hideMessage: PropTypes.bool,
};
