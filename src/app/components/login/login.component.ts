import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service'; // Importa tu servicio de autenticación

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService) { } // Inyecta tu servicio de autenticación aquí

  onSubmit() {
    // Realiza la petición de inicio de sesión utilizando el servicio
    this.authService.login(this.email, this.password).subscribe(
      (response) => {
        // Maneja la respuesta exitosa, como redireccionar al usuario
        console.log(response)
      },
      (error) => {
        // Maneja el error, como mostrar un mensaje de error
        console.log(error)
      }
    );
  }
}
