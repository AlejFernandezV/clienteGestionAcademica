import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class InyeccionesService {

  constructor() { }

  sqlInjectionValidator(control: FormControl) {
    const value = control.value || '';
    const re = /(\%27)|(\')|(\-\-)|(\%23)|(#)|(=)|(;)/i;
    return re.test(value) ? { 'sqlInjection': true } : null;
  }
}
