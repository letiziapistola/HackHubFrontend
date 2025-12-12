import { computed, Injectable, signal } from "@angular/core";

export interface UserPayload {
  id: string;
  email: string;
  role: 'USER' | 'ORGANIZER' | 'TEAM-MEMBER' | 'TEAM-LEADER' | 'STAFF' | 'MENTOR'| 'JUDGE' | null;
  exp: number;
}

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private userSignal = signal<UserPayload | null>(null);

  user = computed(() => this.userSignal());
  isLoggedIn = computed(() => this.userSignal() !== null);
  role = computed(() => this.userSignal()?.role ?? null);

  constructor() { 
    const token = localStorage.getItem('jwt-mock');
    if (token) {
      const payload = this.decodeJwt(token);
      if (payload && payload.exp > Date.now()) {
        this.userSignal.set(payload);
      }
    }
  }

  login(email: string, password: string) {
    // Mock login implementation
    const payload: UserPayload = {
      id: '1',
      email,
      role: null,
      exp: Date.now() + 3600 * 1000, // 1 hour expiry
    };

    const token = this.generateJwt(payload);

    localStorage.setItem('jwt-mock', token);
    this.userSignal.set(payload);

    return true;
  }

  logout() {
    this.userSignal.set(null);
    localStorage.removeItem('jwt-mock');
  }

  // Mock JWT generation

  private generateJwt(payload: any): string {
    const header = {alg: 'none', typ: 'JWT'};
    const base64Header = btoa(JSON.stringify(header));
    const base64Payload = btoa(JSON.stringify(payload));

    // firma vuota perché alg = none → mock
    return `${base64Header}.${base64Payload}.`;
  }

  private decodeJwt(token: string): UserPayload | null {
    try {
      const [header, payload] = token.split('.');
      return JSON.parse(atob(payload));
    } catch {
      return null;
    }
  }
}
