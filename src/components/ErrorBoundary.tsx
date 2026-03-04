import React from "react";

interface State { hasError: boolean; }

export default class ErrorBoundary extends React.Component<{children: React.ReactNode}, State> {
  state = { hasError: false };
  static getDerivedStateFromError() { return { hasError: true }; }
  render() {
    if (this.state.hasError) return React.createElement("div", null, "Something went wrong.");
    return this.props.children;
  }
}
