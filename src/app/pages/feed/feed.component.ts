import { Component, OnInit } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { UserProfile } from '../../interfaces/auth.interface';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
  userProfile: UserProfile = {
    name: 'User',
    picture: '../../../assets/images/profile.png'
  };
  ngOnInit(): void {
    if('google_token' in localStorage) {
      const userObject: any = jwt_decode(localStorage.getItem('google_token') || '');
      this.userProfile = {
        name: userObject.name,
        picture: userObject.picture
      }
    }
  }
}
