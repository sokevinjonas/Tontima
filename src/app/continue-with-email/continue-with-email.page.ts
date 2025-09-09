import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule, ToastController } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { eyeOutline, eyeOffOutline } from 'ionicons/icons';
import { AuthService } from '../services/auth/auth';

@Component({
  selector: 'app-continue-with-email',
  templateUrl: './continue-with-email.page.html',
  styleUrls: ['./continue-with-email.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class ContinueWithEmailPage implements OnInit {
  formData = {
    email: '',
    password: '',
  };

  showPassword = false;
  rememberMe = false;
  isLoading = false;

  constructor(private router: Router, private authService: AuthService,
    private toastCtrl: ToastController) {
    addIcons({
      eyeOutline,
      eyeOffOutline,
    });
  }

  ngOnInit() {}

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

   private async showToast(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 3000,
      position: 'top',
    });
    toast.present();
  }

  async onSubmit() {
  if (this.isLoading) return;
  this.isLoading = true;

  try {
    const { data, error } = await this.authService.signInWithEmail(
      this.formData.email,
      this.formData.password
    );

    if (error) throw error;

    // Vérifier si la connexion a vraiment réussi
    if (!data.session) {
      await this.showToast('Email ou mot de passe incorrect');
      return;
    }

    console.log('Connexion réussie:', data);

    await this.showToast('Connexion réussie !');
    this.router.navigate(['/tabs/home']);
  } catch (error: any) {
    console.error('Erreur lors de la connexion:', error);
    await this.showToast(`Erreur: ${error.message || error}`);
  } finally {
    this.isLoading = false;
  }
}


  switchToSignUp() {
    // Naviguer vers la page d'inscription
    this.router.navigate(['/signup']);
  }

  forgotPassword() {
    // Récupération du mot de passe via Supabase
    this.authService.resetPassword(this.formData.email)
      .then(() => this.showToast('Email de réinitialisation envoyé !'))
      .catch(err => this.showToast(`Erreur: ${err.message || err}`));
  }
}
