import { Component } from '@angular/core';
import { AuthService } from './servicios/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portafolio-karina-meza-ARG-PROG';

usuarioAutenticado: boolean = false;

constructor(private authService: AuthService) {}

ngOnInit(): void {
  this.usuarioAutenticado = this.authService.usuarioAutenticado();  
}


}
