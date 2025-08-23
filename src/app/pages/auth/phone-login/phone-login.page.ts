import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonInput, IonIcon, IonButton, IonGrid, IonRow, IonItem, IonLabel, IonCol, IonCard } from '@ionic/angular/standalone';
import { AlertController } from '@ionic/angular';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-phone-login',
  templateUrl: './phone-login.page.html',
  styleUrls: ['./phone-login.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule, IonInput, IonIcon, IonButton, IonGrid, IonRow, IonItem, IonLabel, IonCol, IonCard]
})
export class PhoneLoginPage implements OnInit {

  country = { flag: '🇧🇫', dialCode: '226' }; // par défaut BF
  digits = '';                                // 8 chiffres max
  keys = ['1','2','3','4','5','6','7','8','9'];

  constructor(private alertCtrl: AlertController) {
    addIcons({
      
    });
   }

  ngOnInit() {
  }
  get formatted(): string {
    // espace toutes les 2 chiffres: "12 34 56 78"
    return this.digits.replace(/(\d{2})(?=\d)/g, '$1 ').trim();
  }
   press(v: string) {
    if (this.digits.length < 8) this.digits += v;
  }
  backspace() {
    this.digits = this.digits.slice(0, -1);
  }
  
  async changeCountry() {
    // Démo: on garde +226, mais tu peux ouvrir un modal/liste ici.
    const a = await this.alertCtrl.create({
      header: 'Pays',
      message: 'Exemple: le sélecteur de pays peut venir ici. (+226 par défaut)',
      buttons: ['OK']
    });
    await a.present();
  }

  next() {
    // Validation simple: 8 chiffres
    if (this.digits.length === 8) {
      const full = `+${this.country.dialCode}${this.digits}`;
      console.log('Téléphone:', full);
      // Navigue vers l’étape suivante / API / OTP…
    }
  }

}
