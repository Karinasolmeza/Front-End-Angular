import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Contact } from '../entidades/contact';
@Injectable({
  providedIn: 'root'
})
export class ContactodatosService {
  url:string="http://localhost:8080/contact";
  constructor(private http:HttpClient) { }


  obtenerDatos():Observable<Contact>{
    return this.http.get<Contact>(this.url+"/1");
  }

  editarDatosContact(contact:Contact):Observable<any>{
    return this.http.post(this.url,contact)

  }

}




