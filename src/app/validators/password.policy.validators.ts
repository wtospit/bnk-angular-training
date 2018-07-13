import { AbstractControl, ValidationErrors } from '@angular/forms';

export class PasswordValidator {

    static validate(control: AbstractControl): ValidationErrors | null {
        let hasUpper = /[A-Z]/.test(control.value);
        let hasLower = /[a-z]/.test(control.value);
        const valid = hasUpper && hasLower;
        if (!valid) {
            return {
                valid,
                hasUpper,
                hasLower
            };
        }
        return null;
    }
}