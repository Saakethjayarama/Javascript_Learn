import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor(private http: HttpClientModule) {}

  getName(): string {
    return 'Saaketh';
  }

  getDetails(): Observable<Student[]> {
    return this.http.get('')
  }
}
