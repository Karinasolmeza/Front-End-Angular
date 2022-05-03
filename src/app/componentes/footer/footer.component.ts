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
    linkEdin:['https://',[Validators.required]],
   

  

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

get linkEdin(){
return this.form.get("linkEdin")
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
   linkTwitter:this.form.get("linkTwitter")?.value,
   linkInstagram:this.form.get("linkInstagram")?.value,
   linkEdin:this.form.get("linkEdin")?.value,
   idPersona: this.form.get('idPersona')?.value,
   
  }

  if (this.id == undefined) {
    // Agregamos una nuevo proyecto
      this.miServicio.saveFooter(footer).subscribe(data => {
        this.toastr.success('Link registrado con exito!', 'Link Registrada');
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
 linkTwitter:footer.linkTwitter,
 linkEdin:footer.linkEdin

  })
}


  
eliminarFooter(id: number){
  
  this.miServicio.deleteFooter(id).subscribe(data=>{
    this.toastr.error( 'Link fue eliminado con exito!','Link eliminado');
    this.obtenerFooter();
  })
}



  }


