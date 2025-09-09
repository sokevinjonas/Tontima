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
       this.supabase = createClient(this.url, this.anon);
    }
  
     async signInWithProvider(provider: 'google' | 'facebook' | 'apple') {
    // 1️⃣ Lancer la connexion OAuth
    const { data, error } = await this.supabase.auth.signInWithOAuth({ provider });
    if (error) throw error;

    // 2️⃣ Récupérer l'utilisateur après redirection
    // IMPORTANT: cet appel doit être fait après que l'utilisateur ait complété la redirection OAuth
    const { data: userData, error: userError } = await this.supabase.auth.getUser();
    if (userError) throw userError;

    const user = userData.user;
    if (!user) throw new Error("Utilisateur non récupéré après OAuth");

    // 3️⃣ Insérer les données dans la table `users`
    // Vérifie si l'utilisateur existe déjà pour éviter les doublons
    const { data: existingUser } = await this.supabase
      .from('users')
      .select('*')
      .eq('email', user.email)
      .single();

    if (!existingUser) {
      await this.supabase.from('users').insert({
        email: user.email,
        nom: user.user_metadata?.['nom'] || null,
        prenom: user.user_metadata?.['prenom'] || null,
        photo: user.user_metadata?.['photo_url'] || null,
        role: 'user'
      });
    }

    return user;
  }


    async signOut() {
      return this.supabase.auth.signOut();
    }
  
    async getUser() {
    const { data, error } = await this.supabase.auth.getUser();
    if (error) throw error;
    return data.user;
  }
}
