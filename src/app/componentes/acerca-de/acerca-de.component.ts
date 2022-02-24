import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { About } from 'src/app/entidades/about';
import { AboutService } from 'src/app/servicios/about.service';
@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {

miPorfolio:any;
form:FormGroup;
usuarioAutenticado:boolean=true; //debe ir en falso para ocultar los botones

  constructor(private datosPorfolio:AboutService,  private miFormBuilder:FormBuilder) {
    this.form=this.miFormBuilder.group({
      acercaDe:['',[Validators.required,Validators.minLength(10)]]
    })
   }
   get acercaDe()
{
  return this.form.get("acercaDe")
}

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data =>{
this.miPorfolio=data["aboutMe"];

    });
  }



  guardarAcercaDe(){
    if(this.form.valid){

      let aboutMe=this.form.controls["aboutMe"].value;
      
      let aboutEditar=new About(aboutMe)

    this.datosPorfolio.editarDatosAbout(aboutEditar).subscribe(data =>{
      this.miPorfolio=aboutEditar;
      this.form.reset();
      document.getElementById("cerrarAcercaDeModal")?.click();
    
    },
  
  error =>{
    alert("error");
  
    })
    }
    else
    {
     
      this.form.markAllAsTouched();
     
    }
    
  }
  mostrarDatosAbout(){
    this.form.controls["aboutMe"].setValue(this.miPorfolio.acercaDe);
  }
}

   

