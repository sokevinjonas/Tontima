import { Component, OnInit } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonTitle,
  IonContent,
  IonAvatar,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonIcon,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonLabel,
  IonListHeader,
  IonList,
  IonItem,
  IonNote,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { call, logoWhatsapp, peopleCircleOutline } from 'ionicons/icons';

// Interfaces pour la structure des données de la page de détail
interface TontineSummary {
  name: string;
  amount: number;
}

interface MemberDetail {
  id: number;
  name: string;
  countryCode: string;
  phone: string;
  avatar: string;
  idCardFrontUrl: string;
  idCardBackUrl: string;
  tontines: TontineSummary[];
}

@Component({
  selector: 'app-detail-members',
  templateUrl: './detail-members.page.html',
  styleUrls: ['./detail-members.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CurrencyPipe,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonBackButton,
    IonTitle,
    IonContent,
    IonAvatar,
    IonGrid,
    IonRow,
    IonCol,
    IonButton,
    IonIcon,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonLabel,
    IonListHeader,
    IonList,
    IonItem,
    IonNote,
  ],
})
export class DetailMembersPage implements OnInit {
  member: MemberDetail | undefined;

  // Données de test pour simuler une base de données
  private mockDatabase: MemberDetail[] = [
    { 
      id: 1, name: 'Adama Traoré', countryCode: '+226', phone: '70 01 02 03', avatar: 'https://i.pravatar.cc/150?u=adama',
      idCardFrontUrl: 'https://via.placeholder.com/300x180.png?text=Recto+CNIB', 
      idCardBackUrl: 'https://via.placeholder.com/300x180.png?text=Verso+CNIB',
      tontines: [ { name: 'Tontine Amis', amount: 15000 }, { name: 'Tontine Famille', amount: 25000 } ]
    },
    { 
      id: 2, name: 'Bintou Diallo', countryCode: '+226', phone: '71 04 05 06', avatar: 'https://i.pravatar.cc/150?u=bintou',
      idCardFrontUrl: 'https://via.placeholder.com/300x180.png?text=Recto+CNIB', 
      idCardBackUrl: 'https://via.placeholder.com/300x180.png?text=Verso+CNIB',
      tontines: [ { name: 'Tontine Business', amount: 50000 } ]
    },
     { 
      id: 3, name: 'Cheick Koné', countryCode: '+226', phone: '72 07 08 09', avatar: 'https://i.pravatar.cc/150?u=cheick',
      idCardFrontUrl: 'https://via.placeholder.com/300x180.png?text=Recto+CNIB', 
      idCardBackUrl: 'https://via.placeholder.com/300x180.png?text=Verso+CNIB',
      tontines: []
    },
  ];

  constructor(private route: ActivatedRoute) {
    addIcons({ call, logoWhatsapp, peopleCircleOutline });
  }

  ngOnInit() {
    // Récupère l'ID du membre depuis l'URL
    const memberId = this.route.snapshot.paramMap.get('id');
    if (memberId) {
      // Trouve le membre correspondant dans notre base de données de test
      this.member = this.getMemberDetails(+memberId);
    }
  }

  getMemberDetails(id: number): MemberDetail | undefined {
    // Simule un appel à une base de données pour récupérer les détails d'un seul membre
    return this.mockDatabase.find(m => m.id === id);
  }

  callMember() {
    if (this.member) {
      console.log('Appeler ' + this.member.phone);
    }
  }

  sendWhatsApp() {
    if (this.member) {
      console.log('WhatsApp à ' + this.member.phone);
    }
  }
}
