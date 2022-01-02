import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'MiniProjet';
  constructor (public authService: AuthService, private router : Router) {}

  ngOnInit(){
    this.authService.loadToken();
    if(this.authService.getToken() == null || 
       this.authService.isTokenExpired())
       this.router.navigate(['/login']);
  }
  
  onLogout(){
    this.authService.onLogout();
  }
}
