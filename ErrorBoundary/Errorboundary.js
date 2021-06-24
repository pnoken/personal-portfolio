import React, { Children, useState } from "react";

function ErrorBoundary({children}) {
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  return <>{hasError ? <h1>{errorMessage}</h1> : children}</>;
}
export default ErrorBoundary;
