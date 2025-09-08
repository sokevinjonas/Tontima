import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
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
    ReactiveFormsModule, // Important pour les formulaires
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

  constructor(private fb: FormBuilder) {
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
      console.log('Formulaire valide !');
      console.log(this.tontineForm.value);
      // Prochaine étape : naviguer vers la page d'invitation des membres
    } else {
      console.log('Formulaire invalide.');
    }
  }
}
