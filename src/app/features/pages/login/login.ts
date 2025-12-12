import { Component, signal } from '@angular/core';
import { Auth } from '../../../core/auth/auth';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  submitting = signal(false);
  error = signal('');

  constructor(public auth: Auth) {}

  onSubmit(email: string, password: string) {
    this.error.set('');
    this.submitting.set(true);
    try {
      const ok = this.auth.login(email, password);
      if (!ok) {
        this.error.set('Credenziali non valide');
      }
    } catch (e) {
      this.error.set('Errore durante il login');
    } finally {
      this.submitting.set(false);
    }
  }

}
