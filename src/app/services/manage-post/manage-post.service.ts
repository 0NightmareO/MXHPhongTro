import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { AuthserviceService } from '../auth/auth.service';
import { TokenStoreService } from '../token-store/token-store.service';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class ManagePostService {
  private apiUrl='http://localhost:5000/api/admin/management-user';
  constructor(private _api: ApiService, private _token: TokenStoreService) { }

  Call_Token(): Observable<any>{
    const token = this._token.getToken();
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
    return this._api.API_Basic_GetTypeRequest(this.apiUrl);
  }

  Call_API_ManageUserID(params: any): Observable<any>{
    return this._api.API_Basic_GetTypeRequestParams(this.apiUrl, params);
  }

  Call_API_ManageUser(): Observable<any>{
    return this._api.API_Basic_GetTypeRequest(this.apiUrl);
  }

}