import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Service()
export class UserService {
    private http = inject(HttpClient);
    private apiUrl = `${environment.apiUrl}/users`

    getAll(): Observable<User[]> {
        return this.http.get<User[]>(this.apiUrl);
    }
    
}
