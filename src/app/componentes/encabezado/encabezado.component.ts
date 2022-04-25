import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonaService } from 'src/app/servicios/persona.service';
import { Persona } from 'src/app/entidades/persona';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
persona!:Persona;
form:FormGroup;
usuarioAutenticado:boolean=true; //debe ir en falso para ocultar los botones

//grabar_localStorage(){
 // let id:number=1;
  
  //let Persona={
   // id:1,
    //fullName:"karina Meza",
   // tituloEncabezado:"Argentina Programa",
   // url:"https://cuestiondigital.com/wp-content/uploads/2022/02/avatar.jpg",
  //}

//localStorage.setItem("persona",JSON.stringify(this.persona));
//}
  constructor(private miServicio:PersonaService, private miFormBuilder:FormBuilder,private toastr: ToastrService,) {
    //this.grabar_localStorage();

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

  ngOnInit(): void {
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