class ErrorHandler extends Error {
  construtor(message, statusCode) {
    greet(message);
    this.statusCode = statusCode;

    Error.captureStackTrace(this, this.construtor);
  }
}

export default ErrorHandler;
