import { Component, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
declare let google: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private readonly router: Router) {}

  apiKey = process.env['AUTH_GOOGLE_KEY'];
  loading = signal(false);

  ngOnInit(): void {
    this.renderButton();
  }

  login(){
    this.loading.set(true);
    console.log('hello');
    setTimeout(() => {
      this.loading.set(false);
    }, 2000);
  };

  isLoading(): boolean {
    return this.loading();
  }

  renderButton(): void {
    google.accounts.id.initialize({
      client_id: process.env['AUTH_GOOGLE_KEY'] || '',
      callback: this.handleCredentialResponse.bind(this)
    });
    const options = { 
      theme: 'outline',
      text: 'signin',
      shape: 'rectangular'
    };

    google.accounts.id.renderButton(
      document.getElementById("g_id_onload"), 
      {...options, size: window.innerWidth <= 420 ? 'medium' : 'large'} 
    );

    google.accounts.id.prompt(); 
  }

  handleCredentialResponse(res: any): void {
    localStorage.setItem('google_token', res.credential);
    this.router.navigate(['/feed']);
  }
}
