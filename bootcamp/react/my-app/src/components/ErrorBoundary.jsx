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

// Remove the App component from this file - it should be in App.jsx
// Add a proper export for ErrorBoundary setup
export default function AppErrorBoundary({ children }) {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onError={(error, errorInfo) => {
        console.error("Error logged:", error, errorInfo);
      }}
    >
      {children}
    </ErrorBoundary>
  );
}

// Export the ErrorFallback component as well if needed elsewhere
export { ErrorFallback };
