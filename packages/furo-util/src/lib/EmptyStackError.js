/**
 * Error for the `furo-forth-stack` component.
 *
 */
export class EmptyStackError extends Error {
  constructor(...params) {

    super(...params);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, EmptyStackError);
    }
  }
}
