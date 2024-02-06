// contraste.service.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContrasteService {
  private _contrasteActivo = new BehaviorSubject<boolean>(false);
  contrasteActivo$ = this._contrasteActivo.asObservable();

  constructor() {}

  activarContraste(): void {
    this._contrasteActivo.next(true);
    document.body.classList.add('contraste-activo');
  }

  desactivarContraste(): void {
    this._contrasteActivo.next(false);
    document.body.classList.remove('contraste-activo');
  }
}
