import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Projects } from 'src/app/entidades/projects';
import { ProyectosService } from 'src/app/servicios/proyectos.service';
@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  projectsList!:Projects[];
  form:FormGroup;
  accion = 'Agregar';
  id:number | undefined;

  usuarioAutenticado:boolean=true;//debe ir en falso para ocultar botones 

  constructor( private miServicio:ProyectosService, private miFormBuilder:FormBuilder, private toastr: ToastrService) {
    this.form=this.miFormBuilder.group({
      name:['',[Validators.required]],
      description:['',[Validators.required]],
     url:['https://',[Validators.required]],
     urlLink:['https://',[Validators.required]],
    

    })
   }
get name()
{
  return this.form.get("name")

}
get description()
{
  return this.form.get("description")

}
get url()
{
  return this.form.get("url")

}

  ngOnInit(): void {

  this.obtenerProjects()
  
}

obtenerProjects() {
  this.miServicio.getListProjects().subscribe(data => {
 
    this.projectsList = data;
    
  }, error => {
    console.log(error);
  })
}



  guardarProyectos() {

    const projects: any= {

      name:this.form.get("name")?.value,
      description:this.form.get("description")?.value,
      imgProject:this.form.get("url")?.value,
      linkProject:this.form.get("urlLink")?.value,
     
     idPersona: this.form.get('idPersona')?.value,
     
    }

    if (this.id == undefined) {
      // Agregamos una nuevo proyecto
        this.miServicio.saveProjects(projects).subscribe(data => {
          this.toastr.success('Proyecto registrado con exito!', 'Proyecto Registrada');
          this.obtenerProjects();
          this.form.reset();
        }, error => {
          this.toastr.error('Opss.. ocurrio un error','Error')
          console.log(error);
        })
    } else {

      projects.id = this.id;
      // Editamos educacion
        this.miServicio.updateProjects(this.id,projects).subscribe(data => {
        this.form.reset();
        this.accion = 'Agregar';
        this.id = undefined;
        this.toastr.info('La tarjeta fue actualizada con exito!', 'Tarjeta Actualizada');
        this.obtenerProjects();
      }, error => {
        console.log(error);
      })

    }

   
  }
 
  editarProyecto(projects: any) {
    this.accion = 'Editar';
    this.id = projects.id;
    
    this.form.patchValue({
     
      name: projects.name,
      description: projects.description,
      //url : projects.imgProject,
      //url: projects.url,
      imgProject:projects.imgProject,
      linkProject:projects.linkProject,
//imgProject:projects.url,
    // idPersona:educacion.idPersona,
    })
  }


  
eliminarProyecto(id: number){
  
  this.miServicio.deleteProjects(id).subscribe(data=>{
    this.toastr.error( 'Proyecto fue eliminado con exito!','Proyecto eliminado');
    this.obtenerProjects();
  })
}
}

  
