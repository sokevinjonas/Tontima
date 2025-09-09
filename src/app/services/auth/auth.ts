import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private supabase: SupabaseClient;
    private url = environment.url_supabase
    private anon =  environment.key_public
  
    constructor() {
      this.supabase = createClient(
        `${this.url}`, 
        `${this.anon}`         
      );
    }
  
     // Signup / Login par email
    async signInWithEmail(email: string, password: string) {
      return this.supabase.auth.signInWithPassword({ email, password });
    }
  
    async signUpWithEmail(email: string, password: string) {
      return this.supabase.auth.signUp({ email, password });
    }
  
    // OAuth (Google, Facebook, Apple)
    async signInWithProvider(provider: 'google' | 'facebook' | 'apple') {
      return this.supabase.auth.signInWithOAuth({ provider });
    }
    // Réinitialisation du mot de passe
  async resetPassword(email: string) {
    return this.supabase.auth.resetPasswordForEmail(email, {
      redirectTo: 'http://localhost:8100', // URL où l'utilisateur sera redirigé après le reset
    });
  }
    async signOut() {
      return this.supabase.auth.signOut();
    }
  
    getUser() {
      return this.supabase.auth.getUser();
    }
}
