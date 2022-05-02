import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonaService } from 'src/app/servicios/persona.service';
import { Persona } from 'src/app/entidades/persona';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
persona!:Persona;
form:FormGroup;
usuarioAutenticado:boolean=false; //debe ir en falso para ocultar los botones

  constructor(private miServicio:PersonaService,private authService: AuthService, private miFormBuilder:FormBuilder,private toastr: ToastrService,) {


    this.form=this.miFormBuilder.group({
      fullName:['',[Validators.required,Validators.minLength(5)]],
      tituloEncabezado:['',[Validators.required]],
      url:['https://',[Validators.required]]
    })

    
   }

   get fullName()
   {
     return this.form.get("fullName")

   }
   get tituloEncabezado(){
     return this.form.get("tituloEncabezado")
   }

   get avatarImg (){
     return this.form.get("url")
   }
  ngOnInit(): void {
    this.usuarioAutenticado = this.authService.usuarioAutenticado();
    this.miServicio.obtenerDatosPersona().subscribe(data =>{
      this.persona=data;
  });
  
}


guardarEncabezado(){

  if(this.form.valid){
    
    let fullName=this.form.controls["fullName"].value;
    let tituloEncabezado=this.form.controls["tituloEncabezado"].value;
    let url=this.form.controls["url"].value;
  
    let personaEditar=new Persona(this.persona.id,fullName,tituloEncabezado,url);
  
    this.miServicio.editarDatosPersona(personaEditar).subscribe(data=>{
    this.persona=personaEditar;
    this.toastr.info('Encabezado actualizado con exito!', 'Tarjeta Actualizada');
    this.form.reset();
    document.getElementById("cerrarModalEncabezado")?.click();

  },

  error => {
    alert("Upss, Hubo un Error por favor contacte al administrador");

  })

  }
  
  else
  {
  
  this.form.markAllAsTouched();
  }
  
  
}
  
mostrarDatosEncabezado(){
  this.form.controls["fullName"].setValue(this.persona.fullName);
  this.form.controls["tituloEncabezado"].setValue(this.persona.tituloEncabezado);
  this.form.controls["avatarImg"].setValue(this.persona.avatarImg)
  
}
}