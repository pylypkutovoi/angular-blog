import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { IUser } from 'src/app/shared/interfaces';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  get token(): string {
    return ''
  }

  login(user: IUser): Observable<any>{
    return this.http.post('url', user)
  }

  logout(){

  }

  isAuth(): boolean{
    return !!''
  }

  private setToken(){

  }
}
