import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonButton,
  IonIcon,
  IonText,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardContent,
  IonListHeader,
  IonList,
  IonItemSliding,
  IonItemOptions,
  IonItemOption,
  IonItem,
  IonAvatar,
  IonLabel,
  IonNote,
  IonFab,
  IonFabButton,
  IonBadge,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  notificationsOutline,
  peopleCircleOutline,
  archive,
  create,
  add,
  arrowForwardOutline,
} from 'ionicons/icons';
import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    CurrencyPipe,
    DatePipe,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButtons,
    IonButton,
    IonIcon,
    IonText,
    IonGrid,
    IonRow,
    IonCol,
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonCardContent,
    IonListHeader,
    IonList,
    IonItemSliding,
    IonItemOptions,
    IonItemOption,
    IonItem,
    IonAvatar,
    IonLabel,
    IonNote,
    IonFab,
    IonFabButton,
    IonBadge,
  ],
})
export class HomePage implements OnInit {
  notificationCount = 0;
  randomQuote = '';
  private quotes = [
    'La gestion simplifiée de vos tontines.',
    'Votre partenaire de confiance pour la tontine.',
    'Ensemble, construisons l\'avenir.',
    'La tontine réinventée pour vous.',
  ];

  tontines = [
    {
      id: 1,
      name: 'Tontine Amis',
      next_tour_date: '2024-09-15',
      next_beneficiary: 'Awa Traoré',
      amount: 15000,
      members: 12,
      total_members: 15,
    },
    {
      id: 2,
      name: 'Tontine Famille',
      next_tour_date: '2024-09-20',
      next_beneficiary: 'Moussa Diop',
      amount: 25000,
      members: 8,
      total_members: 10,
    },
    {
      id: 3,
      name: 'Collègues du Bureau',
      next_tour_date: '2024-10-01',
      next_beneficiary: 'Fatou Ndiaye',
      amount: 10000,
      members: 20,
      total_members: 20,
    },
  ];

  constructor(private router: Router) {
    addIcons({
      notificationsOutline,
      peopleCircleOutline,
      archive,
      create,
      add,
      arrowForwardOutline,
    });
  }

  ngOnInit() {
    this.setRandomQuote();
  }

  setRandomQuote() {
    const randomIndex = Math.floor(Math.random() * this.quotes.length);
    this.randomQuote = this.quotes[randomIndex];
  }

  openNotifications() {
    console.log('Ouverture des notifications');
  }
  
  viewActiveTontines() {
    console.log('Voir les tontines actives');
  }

  viewMonthlySummary() {
    console.log('Voir le résumé mensuel');
  }

  seeAllTontines() {
    console.log('Voir toutes les tontines');
    // Probablement naviguer vers une page dédiée
  }

  archiveTontine(tontine: any) {
    console.log('Archivage de la tontine:', tontine.name);
  }

  editTontine(tontine: any) {
    console.log('Édition de la tontine:', tontine.name);
    this.router.navigate(['/tontine-detail', tontine.id]);
  }

  createNewTontine() {
    console.log('Création d\'une nouvelle tontine');
    this.router.navigate(['/create-tontine']);
  }
}
