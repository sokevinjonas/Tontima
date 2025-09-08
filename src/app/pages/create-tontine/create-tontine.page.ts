import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router'; // Importer le Router
import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonInput,
  IonSelect,
  IonSelectOption,
  IonButton,
  IonIcon,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { arrowForward } from 'ionicons/icons';

@Component({
  selector: 'app-create-tontine',
  templateUrl: './create-tontine.page.html',
  styleUrls: ['./create-tontine.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonBackButton,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonInput,
    IonSelect,
    IonSelectOption,
    IonButton,
    IonIcon,
  ],
})
export class CreateTontinePage implements OnInit {
  tontineForm: FormGroup;

  // Injecter le Router dans le constructeur
  constructor(private fb: FormBuilder, private router: Router) {
    addIcons({ arrowForward });

    this.tontineForm = this.fb.group({
      name: ['', Validators.required],
      amount: ['', [Validators.required, Validators.min(1)]],
      frequency: ['', Validators.required],
      participants: ['', [Validators.required, Validators.min(2)]],
    });
  }

  ngOnInit() {}

  submitForm() {
    if (this.tontineForm.valid) {
      console.log('Formulaire valide ! Données:', this.tontineForm.value);
      // Naviguer vers la page d'invitation
      this.router.navigate(['/invited-person']);
    } else {
      console.log('Formulaire invalide.');
    }
  }
}
