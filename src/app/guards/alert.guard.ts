import { CanDeactivateFn } from '@angular/router';
import { isDirty } from './interfaces/guard-interfaces';

export const alertGuard: CanDeactivateFn<isDirty> = (
  component,
  currentRoute,
  currentState,
  nextState
) => {
  return !component.isDirty() || window.confirm('Are-you sure ?');
};
