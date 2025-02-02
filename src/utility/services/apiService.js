export const handleHttpErrors = (status) => {
  const errorMessages = {
    400: "Bad Request: Please check your input.",
    401: "Unauthorized: Please log in.",
    403: "Error: Forbidden: Access denied.",
    404: "Not Found: The resource doesn't exist.",
    408: "Error: Request Timeout: Server took too long.",
    429: "Too Many Requests: Try again later.",
    500: "Internal Server Error: Something went wrong.",
    502: "Bad Gateway: Server is down.",
    503: "Service Unavailable: Try again later.",
    504: "Gateway Timeout: Server took too long to respond.",
  };

  return (
    errorMessages[status] || `Unexpected Error: Received status code ${status}`
  );
};
export const fetchTransactions = async (
  url = "",
  options = {}
) => {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 10000);
  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
    });
    if (!response.ok) {
      throw new Error(handleHttpErrors(response.status));
    }
    const data = await response.json();
    return data;
  } catch (error) {
    // Handle errors that are not response errors (e.g., network or timeout)
    if (error.name === "AbortError") {
      throw new Error("Request timed out. Please try again.");
    }
    throw error;
  } finally {
    // Clean-up timeout
    clearTimeout(timeoutId);
  }
};
