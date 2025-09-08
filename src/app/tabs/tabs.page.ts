import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { personOutline, homeOutline, peopleOutline } from 'ionicons/icons';
@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  standalone: true,
  imports: [
    IonLabel,
    IonIcon,
    IonTabButton,
    IonTabBar,
    IonTabs,
    CommonModule,
    FormsModule,
  ],
})
export class TabsPage implements OnInit {
  constructor() {
    addIcons({
      personOutline,
      homeOutline,
      peopleOutline,
    });
  }

  ngOnInit() {}
}
