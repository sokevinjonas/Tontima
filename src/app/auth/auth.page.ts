import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule , ToastController} from '@ionic/angular';
import { addIcons } from 'ionicons';
import {
  logoGoogle,
  logoFacebook,
  logoApple,
  mailOutline,
} from 'ionicons/icons';
import { AuthService } from '../services/auth/auth';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class AuthPage implements OnInit {
  isLoading = false;

  constructor(private router: Router, private authService: AuthService, private toastCtrl: ToastController) {
    addIcons({
      logoGoogle,
      logoFacebook,
      logoApple,
      mailOutline,
    });
  }
  private async showToast(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 3000,
      position: 'top',
    });
    toast.present();
  }

  ngOnInit() {}

   async signInWithGoogle() {
    this.isLoading = true;
    try {
      const { data, error } = await this.authService.signInWithProvider('google');
      if (error) throw error;

      // Supabase redirige automatiquement l'utilisateur vers l'URL configurée
      console.log('Connexion Google réussie:', data);
    } catch (error: any) {
      console.error('Erreur Google:', error);
      await this.showToast(`Erreur Google: ${error.message || error}`);
    } finally {
      this.isLoading = false;
    }
  }

   async signInWithFacebook() {
    this.isLoading = true;
    try {
      const { data, error } = await this.authService.signInWithProvider('facebook');
      if (error) throw error;

      console.log('Connexion Facebook réussie:', data);
    } catch (error: any) {
      console.error('Erreur Facebook:', error);
      await this.showToast(`Erreur Facebook: ${error.message || error}`);
    } finally {
      this.isLoading = false;
    }
  }

  async signInWithApple() {
    this.isLoading = true;
    try {
      const { data, error } = await this.authService.signInWithProvider('apple');
      if (error) throw error;

      console.log('Connexion Apple réussie:', data);
    } catch (error: any) {
      console.error('Erreur Apple:', error);
      await this.showToast(`Erreur Apple: ${error.message || error}`);
    } finally {
      this.isLoading = false;
    }
  }

  async signInWithEmail() {
    // Rediriger vers la page de connexion par email
    this.router.navigate(['/continue-with-email']);
  }
}
