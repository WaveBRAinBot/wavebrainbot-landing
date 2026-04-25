"use client";

import React, { Component, ReactNode } from "react";

interface ErrorBoundaryState {
  hasError: boolean;
}

interface ErrorBoundaryProps {
  children: ReactNode;
}

export default class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    // Usa reportError nativo (sem polluting console em prod)
    // Em produção com Sentry/LogRocket, adicionar: Sentry.captureException(error, { contexts: { react: errorInfo } })
    if (typeof window !== "undefined" && "reportError" in window) {
      window.reportError(new Error(`Error boundary: ${error.message}`, { cause: error }));
    }
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        <div className="text-white text-center py-20">
          <p className="text-lg font-semibold">Algo deu errado.</p>
          <p className="text-white/60 text-sm mt-2">Nossa equipe foi notificada. Tente recarregar a página.</p>
        </div>
      );
    }

    return this.props.children;
  }
}
