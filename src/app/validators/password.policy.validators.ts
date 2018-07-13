import { AbstractControl, ValidationErrors } from '@angular/forms';

export class PasswordValidator {

    static validate(control: AbstractControl): ValidationErrors | null {
        let hasNumber = /\d/.test(control.value);
        let hasUpper = /[A-Z]/.test(control.value);
        let hasLower = /[a-z]/.test(control.value);
        const valid = hasNumber && hasUpper && hasLower;
        if (!valid) {
            return {
                valid,
                hasNumber,
                hasUpper,
                hasLower
            };
        }
        return null;
    }
}