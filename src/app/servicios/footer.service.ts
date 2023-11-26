import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Footer } from '../entidades/footer';

@Injectable({
  providedIn: 'root'
})
export class FooterService {



//url:string="https://backend-karinameza.herokuapp.com/footer";
url:string="https://portfolio-karinasolmeza.koyeb.app/footer";


constructor(private http:HttpClient) { }

getListFooter():Observable<Footer[]>{
  return this.http.get<Footer[]>(this.url);
}

updateFooter(id:number, footer:any):Observable<any>{
  return this.http.put(this.url +"/" +id,footer)

}

saveFooter(footer:any):Observable<any>{
  return this.http.post(this.url,footer)

}

deleteFooter(id:number):Observable<any>{
  return this.http.delete(this.url+"/"+id)
}


}
