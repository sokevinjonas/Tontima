import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import {
  logoGoogle,
  logoFacebook,
  logoApple,
  mailOutline,
} from 'ionicons/icons';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class AuthPage implements OnInit {
  isLoading = false;

  constructor(private router: Router) {
    addIcons({
      logoGoogle,
      logoFacebook,
      logoApple,
      mailOutline,
    });
  }

  ngOnInit() {}

  async signInWithGoogle() {
    this.isLoading = true;
    try {
      // TODO: Implémenter l'authentification Google avec Supabase
      console.log('Connexion avec Google...');

      // Simulation d'une connexion réussie
      setTimeout(() => {
        this.isLoading = false;
        this.router.navigate(['/tabs/home']);
      }, 2000);
    } catch (error) {
      this.isLoading = false;
      console.error('Erreur lors de la connexion Google:', error);
    }
  }

  async signInWithFacebook() {
    this.isLoading = true;
    try {
      // TODO: Implémenter l'authentification Facebook avec Supabase
      console.log('Connexion avec Facebook...');

      // Simulation d'une connexion réussie
      setTimeout(() => {
        this.isLoading = false;
        this.router.navigate(['/tabs/home']);
      }, 2000);
    } catch (error) {
      this.isLoading = false;
      console.error('Erreur lors de la connexion Facebook:', error);
    }
  }

  async signInWithApple() {
    this.isLoading = true;
    try {
      // TODO: Implémenter l'authentification Apple avec Supabase
      console.log('Connexion avec Apple...');

      // Simulation d'une connexion réussie
      setTimeout(() => {
        this.isLoading = false;
        this.router.navigate(['/tabs/home']);
      }, 2000);
    } catch (error) {
      this.isLoading = false;
      console.error('Erreur lors de la connexion Apple:', error);
    }
  }

  async signInWithEmail() {
    // Rediriger vers la page de connexion par email
    this.router.navigate(['/continue-with-email']);
  }
}
