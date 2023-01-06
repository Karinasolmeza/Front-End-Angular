import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AboutMe } from '../entidades/aboutMe';
@Injectable({
  providedIn: 'root'
})
export class AboutService {
  //url:string="https://backend-karinameza.herokuapp.com/aboutme";
  url:string="https://back-end-frcm.onrender.com/aboutme";
  constructor(private http:HttpClient){}

  
  obtenerDatosAbout():Observable<AboutMe>{
    return this.http.get<AboutMe>(this.url+"/1");
 }

 



  editarDatosAbout(aboutMe:AboutMe):Observable<any>{
    return this.http.put(this.url,aboutMe)

  }

 


  eliminarDatosAbout(about:AboutMe):Observable<any>{
    return this.http.delete(this.url+"/1");

  }
 

}





 