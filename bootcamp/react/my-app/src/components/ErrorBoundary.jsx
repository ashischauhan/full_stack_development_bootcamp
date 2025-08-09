import { ErrorBoundary } from "react-error-boundary";

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div className="error-boundary">
      <h2>Oops! Something went wrong:</h2>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>My App</h1>
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onError={(error, errorInfo) => {
          console.error("Error logged:", error, errorInfo);
        }}
      >
        <MyComponent />
      </ErrorBoundary>
      <ErrorBoundary>
        <BuggyComponent />
      </ErrorBoundary>
      <ErrorBoundary>
        <AnotherComponent />
      </ErrorBoundary>
    </div>
  );
}
