import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AboutMe } from 'src/app/entidades/aboutMe';
import { AboutService } from 'src/app/servicios/about.service';
@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {

aboutMe!:AboutMe;
form:FormGroup;
usuarioAutenticado:boolean=true; //debe ir en falso para ocultar los botones

  constructor(private miServicio:AboutService,  private miFormBuilder:FormBuilder,private toastr: ToastrService) {
    this.form=this.miFormBuilder.group({
      acercaDe:['',[Validators.required,Validators.minLength(10)]]
    })
   }
   get acercaDe()
{
  return this.form.get("aboutMe")
}

  ngOnInit(): void {
    this.miServicio.obtenerDatosAbout().subscribe(data =>{
    this.aboutMe=data;

    });

  }



  guardarAcercaDe(){
    if(this.form.valid){

      let acercaDe=this.form.controls["acercaDe"].value;
      
      let aboutEditar=new AboutMe(this.aboutMe.id, acercaDe)

    this.miServicio.editarDatosAbout(aboutEditar).subscribe(data =>{
      this.aboutMe=aboutEditar;
      this.toastr.info('Acerca De Ti actualizado con exito!', 'Tarjeta Actualizada');
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
    this.form.controls["acercaDe"].setValue(this.aboutMe.acercaDe);
  }



  
  

      
  
}
  
    
   




