import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Projects } from 'src/app/entidades/projects';
import { ProyectosService } from 'src/app/servicios/proyectos.service';
@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  miPorfolio:any;
  form:FormGroup;
  usuarioAutenticado:boolean=true;//debe ir en falso para ocultar botones 

  constructor(private datosPorfolio:ProyectosService, private miFormBuilder:FormBuilder) {
    this.form=this.miFormBuilder.group({
      name:['',[Validators.required]],
      description:['',[Validators.required]],
      url:['https://',[Validators.required]]
    })
   }
get name()
{
  return this.form.get("name")

}
  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data =>{
      this.miPorfolio=data["projects"];
    });
  }
  guardarProyectos(){
    if(this.form.valid){

      let name=this.form.controls["name"].value;
      let description=this.form.controls["description"].value;
      let url=this.form.controls["url"].value;
      let projectsEditar=new Projects(name, description, url);
    
    
    this.datosPorfolio.editarDatosProjects(projectsEditar).subscribe(data=>{
      this.miPorfolio=projectsEditar;
      this.form.reset();
      document.getElementById("cerrarModalProyectos")?.click();
    },
    error => {
      alert("upps,contactar con el administrador");
    
    
  
    })
    }
  
  else
  {
    
    this.form.markAllAsTouched();
  }
  
  }
  
  mostrarDatosProjects(){
    this.form.controls["name"].setValue(this.miPorfolio.name);
    this.form.controls["description"].setValue(this.miPorfolio.description);
    this.form.controls["imgProject"].setValue(this.miPorfolio.imgProject);
  }
  
  }

