import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Skills } from 'src/app/entidades/skills';
import { AuthService } from 'src/app/servicios/auth.service';
import { SkillsService } from 'src/app/servicios/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
skillsList!:Skills[];
form:FormGroup;
accion = 'Agregar';
id: number | undefined;

usuarioAutenticado:boolean=false;//deberia ir en falsoocultar los botones


  constructor(private miServicio:SkillsService,private authService: AuthService, private miFormBuilder:FormBuilder, private toastr: ToastrService) {
  this.form=this.miFormBuilder.group({
    skillName:['',[Validators.required]],
    score:['',[Validators.required]]
 
  })
 }
 
 get skillName(){
   return this.form.get("skills")
 }
get score(){
  return this.form.get("score")
  
  
}




  ngOnInit(): void {
    this.usuarioAutenticado = this.authService.usuarioAutenticado();
    this.obtenerSkills();
  }


  obtenerSkills() {
    this.miServicio.getListSkills().subscribe(data => {
   
      this.skillsList = data;
      
    }, error => {
      console.log(error);
    })
  }
 



  guardarSkills(){
    const skills:any= {

    skillName:this.form.get("skillName")?.value,
    score: this.form.get("score")?.value,
    idPersona:this.form.get('idPersona')?.value,
   
    }
 
    
    if (this.id == undefined) {
      // Agregamos un skill
        this.miServicio.saveSkills(skills).subscribe(data => {
          this.toastr.success('Skill registrado con exito!', 'Skill Registrado');
          this.obtenerSkills();
          this.form.reset();
        }, error => {
          this.toastr.error('Opss.. ocurrio un error','Error')
          console.log(error);
        })
    } else {

      skills.id = this.id;
      // Editamos educacion
        this.miServicio.updateSkills(this.id,skills).subscribe(data => {
        this.form.reset();
        this.accion = 'Agregar';
        this.id = undefined;
        this.toastr.info('Skill  actualizado con exito!', 'Tarjeta Actualizada');
        this.obtenerSkills();
      }, error => {
        console.log(error);
      })

    }

   
  }
 
  editarSkills(skills: any) {
    this.accion = 'Editar';
    this.id = skills.id;
  
    this.form.patchValue({
     
     skillName: skills.skillName,
     score: skills.score,
   
    // idPersona:educacion.idPersona,
    })
  }


  
eliminarSkills(id: number){
  
  this.miServicio.deleteSkills(id).subscribe(data=>{
    this.toastr.error( 'Skill eliminado con exito!','Skill eliminado');
    this.obtenerSkills();
  })
}

}

  






 
