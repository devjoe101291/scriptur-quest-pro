import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    // Log to external service if needed
  }

  render() {
    if (this.state.hasError) {
      // Fallback UI - just render children anyway to prevent complete crash
      // The error is logged but app continues
      console.error('ErrorBoundary: Error occurred but continuing to render');
      return this.props.children;
    }

    return this.props.children;
  }
}
