import { AbstractControl } from '@angular/forms';

export class MyValidators {

     static isNumber(control: AbstractControl) {
        const value = control.value;

        /* console.log(value); */

        if (isNaN(value)) {
            return {not_number: true};
        }

        return null;
    }

}
