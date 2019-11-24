import { ValidatorFn, AbstractControl} from '@angular/forms';

export function lienAllowedValidator(lien: string): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
        return control.value.includes(lien) ? null : { 'mauvaisLien' : 'mauvais Lien' }
    };
}
