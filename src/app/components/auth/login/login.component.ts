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
      client_id: '756127147061-fqhrqhmm7shfavmjr9n95e3ade8n6qsk.apps.googleusercontent.com',
      callback: this.handleCredentialResponse.bind(this)
    });
    const options = { 
      theme: 'filled_black',
      text: 'continue_with',
      shape: 'square'
    };

    google.accounts.id.renderButton(
      document.getElementById("g_id_onload"), 
      {...options, size: window.innerWidth <= 420 ? 'medium' : 'large'} 
    );

    google.accounts.id.prompt(); 
  }

  handleCredentialResponse(res: any): void {
    console.log(res);
    this.router.navigate(['/feed']);
  }
}
