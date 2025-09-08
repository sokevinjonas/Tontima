import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { eyeOutline, eyeOffOutline } from 'ionicons/icons';

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

  constructor(private router: Router) {
    addIcons({
      eyeOutline,
      eyeOffOutline,
    });
  }

  ngOnInit() {}

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  async onSubmit() {
    if (this.isLoading) return;

    this.isLoading = true;

    try {
      // TODO: Implémenter l'authentification par email avec Supabase
      console.log('Connexion avec email:', this.formData);
      console.log('Se souvenir de moi:', this.rememberMe);

      // Simulation d'une connexion réussie
      setTimeout(() => {
        this.isLoading = false;
        this.router.navigate(['/tabs']);
      }, 2000);
    } catch (error) {
      this.isLoading = false;
      console.error('Erreur lors de la connexion:', error);
      // TODO: Afficher un message d'erreur à l'utilisateur
    }
  }

  switchToSignUp() {
    // TODO: Naviguer vers la page d'inscription
    console.log("Redirection vers la page d'inscription");
    // this.router.navigate(['/signup']);
  }

  forgotPassword() {
    // TODO: Implémenter la récupération de mot de passe
    console.log('Mot de passe oublié pour:', this.formData.email);
    // this.router.navigate(['/forgot-password']);
  }
}
