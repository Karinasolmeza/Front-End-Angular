import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Footer } from 'src/app/entidades/footer';
import { AuthService } from 'src/app/servicios/auth.service';
import { FooterService } from 'src/app/servicios/footer.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  footerList!:Footer[];
  form:FormGroup;
  accion = 'Agregar';
  id:number | undefined;

  usuarioAutenticado:boolean=false;

  constructor(private miServicio:FooterService, private authService: AuthService, private miFormBuilder:FormBuilder, private toastr: ToastrService){
 
  this.form=this.miFormBuilder.group({
 
    linkFacebook:['https://',[Validators.required]],
    linkInstagram:['https://',[Validators.required]],
    linkTwitter :['https://',[Validators.required]],
    linkEdin:['https://',[Validators.required]],
    linkGit:['https://',[Validators.required]],
  

  })
 }
get linkFacebook()
{
return this.form.get("linkFacebook")

}
get linkInstagram()
{
return this.form.get("linkInstagram")

}
get linkTwitter()
{
return this.form.get("linkTwitter")

}

get linkEdin(){
return this.form.get("linkEdin")
}

get linkGit(){
  return this.form.get("linkGit")
}




  ngOnInit(): void {
    this.usuarioAutenticado = this.authService.usuarioAutenticado();

    this.obtenerFooter()
  
}


obtenerFooter() {
  this.miServicio.getListFooter().subscribe(data => {
 
    this.footerList = data;
    
  }, error => {
    console.log(error);
  })
}



guardarFooter() {

  const footer: any= {


   linkFacebook:this.form.get("linkFacebook")?.value,
   linkInstagram:this.form.get("linkInstagram")?.value,
   linkEdin: this.form.controls["linkEdin"].value,
   linkGit: this.form.controls["linkGit"].value,
   
  }

  if (this.id == undefined) {
    // Agregamos una nuevo footer
      this.miServicio.saveFooter(footer).subscribe(data => {
        this.toastr.success('Links registrado con exito!', 'Links Registrada');
        this.obtenerFooter();
        this.form.reset();
      }, error => {
        this.toastr.error('Opss.. ocurrio un error','Error')
        console.log(error);
      })
  } else {

    footer.id = this.id;
    // Editamos educacion
      this.miServicio.updateFooter(this.id,footer).subscribe(data => {
      this.form.reset();
      this.accion = 'Agregar';
      this.id = undefined;
      this.toastr.info('La tarjeta fue actualizada con exito!', 'Tarjeta Actualizada');
      this.obtenerFooter();
    }, error => {
      console.log(error);
    })

  }

 
}

 
editarFooter(footer: any) {
  this.accion = 'Editar';
  this.id = footer.id;
  
  this.form.patchValue({
 
  linkFacebook:footer.linkFacebook,
  linkInstagram:footer.linkInstagram,
  linkEdin:footer.linkEdin,
  linkGit:footer.linkGit,

  })
}



eliminarFooter(id: number){

this.miServicio.deleteFooter(id).subscribe(data=>{
  this.toastr.error( 'Links fue eliminados con exito!','Links eliminados');
  this.obtenerFooter();
})
}
}







