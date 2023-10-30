import { Component, OnInit } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { UserProfile } from '../../interfaces/auth.interface';

import { MatDialog } from '@angular/material/dialog';
import { NewActivityModalComponent } from 'src/app/components/new-activity-modal/new-activity-modal.component';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  shoppingCartCounter: number = 0;

  userProfile: UserProfile = {
    name: 'User',
    picture: '../../../assets/images/profile.png'
  };

  constructor( public readonly dialog: MatDialog ) { }

  ngOnInit(): void {
    if('google_token' in localStorage) {
      const userObject: any = jwt_decode(localStorage.getItem('google_token') || '');
      this.userProfile = {
        name: userObject.name,
        picture: userObject.picture
      }
    }
  }

  showNewActivity(): void {
    this.dialog.open(NewActivityModalComponent);
  }

}
