'use client';

/**
 * Error Boundary Component
 *
 * Catches JavaScript errors anywhere in the child component tree,
 * logs those errors, and displays a fallback UI.
 */

import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error Boundary caught an error:', error, errorInfo);
    }

    // TODO: Log to error reporting service (Sentry, LogRocket, etc.)
    // logErrorToService(error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default fallback UI
      return (
        <div data-zylo-id="zylo-f5d68744dbb7" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/error-boundary.tsx" data-zylo-loc="64:9-99:15" data-zylo-component="ErrorBoundary" className="flex min-h-screen items-center justify-center p-4">
          <div data-zylo-id="zylo-0c51fd23d4aa" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/error-boundary.tsx" data-zylo-loc="65:11-98:17" data-zylo-component="ErrorBoundary" className="w-full max-w-md">
            <Alert data-zylo-id="zylo-eeecb676bbbb" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/error-boundary.tsx" data-zylo-loc="66:13-84:21" data-zylo-component="ErrorBoundary" variant="destructive">
              <AlertTriangle data-zylo-id="zylo-1c76e260482f" data-zylo-kind="icon" data-zylo-cap="86" data-zylo-file="src/components/error-boundary.tsx" data-zylo-loc="67:15-67:52" data-zylo-component="ErrorBoundary" className="h-4 w-4" />
              <AlertTitle data-zylo-id="zylo-e96eeaac7149" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/error-boundary.tsx" data-zylo-loc="68:15-68:60" data-zylo-component="ErrorBoundary">Something went wrong</AlertTitle>
              <AlertDescription data-zylo-id="zylo-68c0168e70d5" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/error-boundary.tsx" data-zylo-loc="69:15-83:34" data-zylo-component="ErrorBoundary" className="mt-2">
                {process.env.NODE_ENV === 'development' ? (
                  <div data-zylo-id="zylo-1bcdce0e26e8" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/error-boundary.tsx" data-zylo-loc="71:19-79:25" data-zylo-component="ErrorBoundary" className="space-y-2">
                    <p data-zylo-id="zylo-7f493aa301cb" data-zylo-kind="text" data-zylo-cap="282" data-zylo-file="src/components/error-boundary.tsx" data-zylo-loc="72:21-72:78" data-zylo-component="ErrorBoundary" className="font-semibold">{this.state.error?.name}</p>
                    <p data-zylo-id="zylo-d18942af75c9" data-zylo-kind="text" data-zylo-cap="282" data-zylo-file="src/components/error-boundary.tsx" data-zylo-loc="73:21-73:75" data-zylo-component="ErrorBoundary" className="text-sm">{this.state.error?.message}</p>
                    {this.state.error?.stack && (
                      <pre data-zylo-id="zylo-409ffa2ca930" data-zylo-kind="text" data-zylo-cap="282" data-zylo-file="src/components/error-boundary.tsx" data-zylo-loc="75:23-77:29" data-zylo-component="ErrorBoundary" className="mt-2 max-h-40 overflow-auto rounded bg-black/10 p-2 text-xs">
                        {this.state.error.stack}
                      </pre>
                    )}
                  </div>
                ) : (
                  <p data-zylo-id="zylo-8eaae15990ba" data-zylo-kind="text" data-zylo-cap="282" data-zylo-file="src/components/error-boundary.tsx" data-zylo-loc="81:19-81:87" data-zylo-component="ErrorBoundary">An unexpected error occurred. Please try refreshing the page.</p>
                )}
              </AlertDescription>
            </Alert>

            <div data-zylo-id="zylo-3fe8c24a632f" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/error-boundary.tsx" data-zylo-loc="86:13-97:19" data-zylo-component="ErrorBoundary" className="mt-4 flex gap-2">
              <Button data-zylo-id="zylo-749580739aaf" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/error-boundary.tsx" data-zylo-loc="87:15-89:24" data-zylo-component="ErrorBoundary" onClick={this.handleReset} variant="outline" className="flex-1">
                Try Again
              </Button>
              <Button data-zylo-id="zylo-d278f5aafdcd" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/error-boundary.tsx" data-zylo-loc="90:15-96:24" data-zylo-component="ErrorBoundary"
                onClick={() => window.location.reload()}
                variant="default"
                className="flex-1"
              >
                Refresh Page
              </Button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
