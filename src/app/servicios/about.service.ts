import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { About } from '../entidades/about';
@Injectable({
  providedIn: 'root'
})
export class AboutService {

  constructor(private http:HttpClient){ }

  
  obtenerDatos():Observable<any>{
    return this.http.get('assets/data/AboutMe.json');
  }

  editarDatosAbout(about:About):Observable<any>{
    return this.http.post('http://localhost:3000/posts',about)

  }


}





 