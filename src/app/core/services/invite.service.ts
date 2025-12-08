import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Invite } from '../../shared/models/invite';

@Injectable({
  providedIn: 'root'
})
export class InviteService {
  constructor(private http: HttpClient) {}

  getInvites(): Observable<Invite[]> {
    return this.http.get<Invite[]>('/data/invites.json');
  }
}
