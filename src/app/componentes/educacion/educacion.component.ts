import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Educacion } from 'src/app/entidades/educacion';
import { AuthService } from 'src/app/servicios/auth.service';
import { EducacionService } from 'src/app/servicios/educacion.service';
@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
educacionList!: Educacion[];
//educacionList: any[] = [];
form:FormGroup;
accion = 'Agregar';
id: number | undefined;


usuarioAutenticado:boolean=false;//debe ir en falso para ocultar botones 

  constructor(private miServicio:EducacionService,private authService: AuthService, private miFormBuilder:FormBuilder, private toastr: ToastrService) {
    this.form=this.miFormBuilder.group({
      title:['',[Validators.required]],
      school:['',[Validators.required]],
      resume:['',[Validators.required]]
    })
   }


ngOnInit(): void {
  this.usuarioAutenticado = this.authService.usuarioAutenticado();

  this.obtenerEducacion();

}


  obtenerEducacion() {
    this.miServicio.getListEducacion().subscribe(data => {
   
      this.educacionList = data;
      
    }, error => {
      console.log(error);
    })
  }
 

  guardarEducacion() {

    const educacion: any = {
      title: this.form.get('title')?.value,
      school: this.form.get('school')?.value,
      resume: this.form.get('resume')?.value,
      idPersona: this.form.get('idPersona')?.value,
   
    }

    if (this.id == undefined) {
      // Agregamos una nueva educacion
        this.miServicio.saveEducacion(educacion).subscribe(data => {
          this.toastr.success('Educacion registrada con exito!', 'Educacion Registrada');
          this.obtenerEducacion();
          this.form.reset();
        }, error => {
          this.toastr.error('Opss.. ocurrio un error','Error')
          console.log(error);
        })
    } else {

      educacion.id = this.id;
      // Editamos educacion
        this.miServicio.updateEducacion(this.id,educacion).subscribe(data => {
        this.form.reset();
        this.accion = 'Agregar';
        this.id = undefined;
        this.toastr.info('La tarjeta fue actualizada con exito!', 'Tarjeta Actualizada');
        this.obtenerEducacion();
      }, error => {
        console.log(error);
      })

    }

   
  }
 
  editarEducacion(educacion: any) {
    this.accion = 'Editar';
    this.id = educacion.id;
    

    this.form.patchValue({
     
      title: educacion.title,
      school: educacion.school,
      resume: educacion.resume,
    // idPersona:educacion.idPersona,
    })
  }


  
eliminarEducacion(id: number){
  
  this.miServicio.deleteEducacion(id).subscribe(data=>{
    this.toastr.error( 'Educacion fue eliminada con exito!','Educacion eliminada');
    this.obtenerEducacion();
  })
}
}

  







