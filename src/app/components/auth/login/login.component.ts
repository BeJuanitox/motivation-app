import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loading = signal(false);

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

}
