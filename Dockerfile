# Étape 1 : Utiliser Node pour builder l'application
FROM node:21-alpine AS build

# Créer le dossier de travail
WORKDIR /app

# Copier les fichiers package.json et installer les dépendances
COPY package*.json ./
RUN npm install

# Copier tout le projet
COPY . .

# Builder le projet Ionic (Angular)
RUN npm run build

# Étape 2 : Utiliser Nginx pour servir l'app
FROM nginx:alpine

# Copier le build Ionic dans Nginx
COPY --from=build /app/www /usr/share/nginx/html

# Exposer le port 80
EXPOSE 80

# Démarrer Nginx
CMD ["nginx", "-g", "daemon off;"]
