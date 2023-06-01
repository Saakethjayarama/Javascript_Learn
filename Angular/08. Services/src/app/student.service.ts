import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor() {}

  getName(): string {
    return 'Saaketh';
  }

  getDetails(): { age: number; usn: string; phone: string } {
    return {
      age: 21,
      usn: '1JT18CS015',
      phone: '9663971485',
    };
  }
}
