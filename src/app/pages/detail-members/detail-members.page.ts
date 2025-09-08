import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
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
  IonBadge,
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
  ellipsisVertical,
} from 'ionicons/icons';

// Renamed to avoid conflicts if a real Member interface exists elsewhere
interface MemberListItem {
  id: number;
  name: string;
  countryCode: string;
  phone: string;
  avatar: string;
  tontineCount: number;
}

@Component({
  selector: 'app-detail-members', // Assuming this is the selector in the file
  templateUrl: './detail-members.page.html',
  styleUrls: ['./detail-members.page.scss'],
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
    IonBadge,
    IonItemOptions,
    IonItemOption,
    IonFab,
    IonFabButton,
  ],
})
export class DetailMembersPage implements OnInit {
  
  allMembers: MemberListItem[] = [];
  filteredMembers: MemberListItem[] = [];

  constructor() {
    addIcons({ addCircleOutline, call, logoWhatsapp, add, ellipsisVertical });
  }

  ngOnInit() {
    this.initializeMembers();
  }

  initializeMembers() {
    this.allMembers = [
      { id: 1, name: 'Adama Traoré', countryCode: '+226', phone: '70 01 02 03', avatar: 'https://i.pravatar.cc/150?u=adama', tontineCount: 3 },
      { id: 2, name: 'Bintou Diallo', countryCode: '+226', phone: '71 04 05 06', avatar: 'https://i.pravatar.cc/150?u=bintou', tontineCount: 1 },
      { id: 3, name: 'Cheick Koné', countryCode: '+226', phone: '72 07 08 09', avatar: 'https://i.pravatar.cc/150?u=cheick', tontineCount: 0 },
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
  }

  callMember(member: MemberListItem) {
    console.log('Appeler:', member.name);
  }

  sendWhatsApp(member: MemberListItem) {
    console.log('Envoyer un WhatsApp à:', member.name);
  }
}
