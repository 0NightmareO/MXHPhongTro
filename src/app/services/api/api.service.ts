import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  postTypeRequest(arg0: string, arg1: { email: any; password: any; name: any; phone: any; address: any; }) {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}
