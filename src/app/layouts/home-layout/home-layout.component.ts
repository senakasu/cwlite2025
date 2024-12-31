import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-home-layout',
  imports: [
    CommonModule,
    RouterOutlet,
    RouterModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './home-layout.component.html',
  styleUrl: './home-layout.component.css'
})
export class HomeLayoutComponent {
  title = 'cwwlitemat';
  //Mat icon list
  //https://www.angularjswiki.com/angular/angular-material-icons-list-mat-icon-list/
  menuItems: any[] = [
    {
      icon: 'dashboard',
      label: 'Dashboard',
      route: 'dashboard'
    },
    {
      icon: 'schedule',
      label: 'Schedule',
      route: 'schedule'
    },
    {
      icon: 'handshake',
      label: 'Request',
      route: 'request'
    },
    {
      icon: 'swap_horiz',
      label: 'Swap',
      route: 'swap'
    },
    {
      icon: 'event_available',
      label: 'Availability',
      route: 'availability'
    },
    {
      icon: 'message',
      label: 'Messages',
      route: 'message'
    },
    {
      icon: 'record_voice_over',
      label: 'Notification',
      route: 'notification'
    },
    {
      icon: 'event',
      label: 'Event',
      route: 'event'
    },
    {
      icon: 'book',
      label: 'Learn',
      route: 'learn'
    },
    {
      icon: 'settings',
      label: 'Setting',
      route: 'setting'
    },
    {
      icon: 'help',
      label: 'Help',
      route: 'Support'
    }
  ]

  onLogout() {

    console.log("Logout press!!");
  }
}
