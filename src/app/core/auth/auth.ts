import { computed, Injectable, signal } from '@angular/core';

export type Role = 'VISITOR' | 'USER' | 'PARTICIPANT'| 'STAFF_MEMBER' | 'HACKATHON_STAFF_MEMBER' | 'TEAM_MEMBER' | 'STAFF' | 'JUDGE' | 'MENTOR' | 'ORGANIZER';

export type Permission = 
  | 'VIEW_HACKATHONS'
  | 'CREATE_HACKATHON'
  | 'EDIT_HACKATHON'
  | 'DELETE_HACKATHON'
  | 'EVALUATE_PROJECTS'
  | 'MANAGE_TEAM'
  | 'VIEW_RESULTS'
  | 'MANAGE_STAFF';

export interface User {
  id: string;
  email: string;
  name: string;
  role: Role;
}

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private userSignal = signal<User | null>(null);
  private permissionsSignal = signal<Permission[]>([]);

  user = computed(() => this.userSignal());
  role = computed(() => this.userSignal()?.role ?? 'VISITOR');
  permissions = computed(() => this.permissionsSignal());

  login(user: User, permissions: Permission[]) {
    this.userSignal.set(user);
    this.permissionsSignal.set(permissions);
  }

  logout() {
    this.userSignal.set(null);
    this.permissionsSignal.set([]);
  }

  setRole(newRole: Role) {
    const currentUser = this.userSignal();
    if (currentUser) {
      this.userSignal.set({ ...currentUser, role: newRole });
    }
  }

  addPermission(permission: Permission) {
    const current = this.permissionsSignal();
    if (!current.includes(permission)) {
      this.permissionsSignal.set([...current, permission]);
    }
  }

  removePermission(permission: Permission) {
    const current = this.permissionsSignal();
    this.permissionsSignal.set(current.filter(p => p !== permission));
  }

  hasPermission(permission: Permission): boolean {
    return this.permissionsSignal().includes(permission);
  }

  isLoggedIn(): boolean {
    return this.userSignal() !== null;
  }

  getUser(): User | null {
    return this.userSignal();
  }
}
