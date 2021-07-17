class UncompressError extends Error {
  constructor(...args: any[]) {
    super(...args);

    this.name = 'UncompressError';
    this.message = this.message || 'The file is invalid or contains errors';

    if (Error.captureStackTrace) Error.captureStackTrace(this, new.target);
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

export default UncompressError;
