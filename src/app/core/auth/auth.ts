import { computed, Injectable, signal } from "@angular/core";

export interface UserPayload {
  id: string;
  email: string;
  username: string;
  role: 'USER' | 'ORGANIZER' | 'TEAM-MEMBER' | 'TEAM-LEADER' | 'MENTOR'| 'JUDGE' | null;
  exp: number;
}

interface MockUser {
  id: string;
  email: string;
  password: string;
  username: string;
  role: 'USER' | 'ORGANIZER' | 'TEAM-MEMBER' | 'TEAM-LEADER' | 'MENTOR'| 'JUDGE' | null;
}

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private userSignal = signal<UserPayload | null>(null);
  private mockUsers: MockUser[] = [
    {
      id: '1',
      email: 'james@example.com',
      password: 'password123',
      username: 'jamesT',
      role: 'TEAM-LEADER',
    },
    {
      id: '2',
      email: 'alice@example.com',
      password: 'password123',
      username: 'aliceW',
      role: 'TEAM-MEMBER',
    },
  ];

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
    // Verifica credenziali nel mock database
    const mockUser = this.mockUsers.find(u => u.email === email && u.password === password);
    
    if (!mockUser) {
      return false;
    }

    const payload: UserPayload = {
      id: mockUser.id,
      email: mockUser.email,
      username: mockUser.username,
      role: mockUser.role,
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
