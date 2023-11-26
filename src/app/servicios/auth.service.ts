import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { LoginDto } from '../entidades/LoginDto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //url:string="https://backend-karinameza.herokuapp.com/login"
  url:string="https://portfolio-karinasolmeza.koyeb.app/login";

  constructor(private http: HttpClient) { }

  public login(credentials:LoginDto) : Observable<Boolean> {
    return this.http.post<Boolean>(this.url, credentials).pipe(
      tap((response: Boolean) => {
        if (response)
          sessionStorage.setItem("user", "karina");
      })
    );
  }
  
  public logout() {
    sessionStorage.removeItem("user");
  }
  
  public usuarioAutenticado():boolean {
    return sessionStorage.getItem("user") !== null;
  }

}




  

