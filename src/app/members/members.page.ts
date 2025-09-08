import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
  IonIcon,
  IonSearchbar,
  IonContent,
  IonList,
  IonItemSliding,
  IonItem,
  IonAvatar,
  IonLabel,
  IonItemOptions,
  IonItemOption,
  IonFab,
  IonFabButton,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  addCircleOutline,
  call,
  logoWhatsapp,
  add,
  eyeOutline, // Ajout de l'icône oeil
  peopleCircleOutline, // Ajout de l'icône pour le compteur
} from 'ionicons/icons';

interface Member {
  id: number;
  name: string;
  countryCode: string;
  phone: string;
  avatar: string;
  tontineCount: number;
}

@Component({
  selector: 'app-members',
  templateUrl: './members.page.html',
  styleUrls: ['./members.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonButton,
    IonIcon,
    IonSearchbar,
    IonContent,
    IonList,
    IonItemSliding,
    IonItem,
    IonAvatar,
    IonLabel,
    IonItemOptions,
    IonItemOption,
    IonFab,
    IonFabButton,
  ],
})
export class MembersPage implements OnInit {
  
  allMembers: Member[] = [];
  filteredMembers: Member[] = [];

  constructor(private router: Router) {
    // Mise à jour des icônes
    addIcons({ addCircleOutline, call, logoWhatsapp, add, eyeOutline, peopleCircleOutline });
  }

  ngOnInit() {
    this.initializeMembers();
  }

  initializeMembers() {
    this.allMembers = [
      { id: 1, name: 'Adama Traoré', countryCode: '+226', phone: '70 01 02 03', avatar: 'https://i.pravatar.cc/150?u=adama', tontineCount: 3 },
      { id: 2, name: 'Bintou Diallo', countryCode: '+226', phone: '71 04 05 06', avatar: 'https://i.pravatar.cc/150?u=bintou', tontineCount: 1 },
      { id: 3, name: 'Cheick Koné', countryCode: '+226', phone: '72 07 08 09', avatar: 'https://i.pravatar.cc/150?u=cheick', tontineCount: 0 },
      { id: 4, name: 'Djeneba Sissoko', countryCode: '+226', phone: '73 10 11 12', avatar: 'https://i.pravatar.cc/150?u=djeneba', tontineCount: 2 },
      { id: 5, name: 'Moussa Diarra', countryCode: '+226', phone: '74 13 14 15', avatar: 'https://i.pravatar.cc/150?u=moussa', tontineCount: 0 },
    ];
    this.filteredMembers = [...this.allMembers];
  }

  onSearchChange(event: any) {
    const query = event.target.value.toLowerCase();
    this.filteredMembers = this.allMembers.filter(member => 
      member.name.toLowerCase().includes(query) || member.phone.includes(query)
    );
  }

  addNewMember() {
    console.log('Ajouter un nouveau membre');
    this.router.navigateByUrl("/create-tontine");
  }

  callMember(member: Member) {
    console.log('Appeler:', member.name);
  }

  sendWhatsApp(member: Member) {
    console.log('Envoyer un WhatsApp à:', member.name);
  }
}
