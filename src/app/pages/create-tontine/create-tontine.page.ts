import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-create-tontine',
  templateUrl: './create-tontine.page.html',
  styleUrls: ['./create-tontine.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class CreateTontinePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
