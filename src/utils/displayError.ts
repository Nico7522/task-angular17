import { FormGroup } from '@angular/forms';

export function displayError(
  form: FormGroup,
  fieldName: string,
  errorType: string
): boolean {
  return (
    (form.get(fieldName)?.hasError(errorType) &&
      form.get(fieldName)?.untouched) ||
    !form.get(fieldName)?.hasError(errorType)
  );
}
