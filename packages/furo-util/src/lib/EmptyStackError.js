export class EmpptyStackError extends Error {
  constructor(...params) {
    // Übergibt die verbleibenden Parameter (einschließlich Vendor spezifischer Parameter) dem Error Konstruktor
    super(...params);

    // Behält den richtigen Stack-Trace für die Stelle bei, an der unser Fehler ausgelöst wurde (nur bei V8 verfügbar)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, EmpptyStackError);
    }
  }
}
