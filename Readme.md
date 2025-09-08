# Tontima - MVP

Bienvenue sur le projet **Tontima**, une application mobile qui réinvente la gestion des tontines de façon simple, moderne et sécurisée.

## Fonctionnalités principales

- Connexion rapide par numéro de téléphone
- Création et gestion de tontines (nom, montant, fréquence, membres, etc.)
- Suivi des cotisations et des membres
- Invitation et partage via QR code, lien, WhatsApp ou SMS
- Tableau de bord et historique des tontines

## Technologies

- **Ionic** (framework mobile)
- **HTML/CSS** pour les wireframes
- **Javascript/Typescript** pour la logique applicative

## Aperçu des wireframes

Pour visualiser les wireframes du MVP, consultez le fichier [`src/wirefrime.html`](src/wirefrime.html) ou visitez le lien suivant :

[Voir les wireframes Tontima](https://sokevinjonas.github.io/tontima-wirefrime/) <!-- Remplacez ce lien par le lien réel si disponible -->

## Démarrage rapide

1. Clonez le projet :
   ```
   git clone https://github.com/sokevinjonas/Tontima.git
   ```
2. Assurez-vous que Docker est installé et actif :
   ```
   docker version
   ```
3. Lancer l'application en développement avec Live Reload :

   ```
   docker compose -f docker-compose.dev.yml up
   ```

   L'application sera accessible sur http://localhost:8100
   Les modifications de code se refléteront automatiquement grâce au Live Reload.

4. Pour lancer le conteneur en arrière-plan:
   ```
   docker compose -f docker-compose.dev.yml up -d
   ```
5. Voir les logs du conteneur:
   ```
   docker compose logs -f ionic-tontina-dev
   ```
6. Arrêter et supprimer le conteneur:
   ```
   docker compose down
   ```

## Auteur

Projet réalisé par Kevin.

---

Pour toute question ou suggestion, n'hésitez pas à ouvrir une issue ou
