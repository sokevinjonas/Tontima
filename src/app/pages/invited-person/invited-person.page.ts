import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonTitle,
  IonSearchbar,
  IonContent,
  IonList,
  IonListHeader,
  IonLabel,
  IonItem,
  IonAvatar,
  IonCheckbox,
  IonFooter,
  IonButton,
} from '@ionic/angular/standalone';
import { MemberDetail, MOCK_MEMBERS_DATABASE } from '../../data/mock-members';

@Component({
  selector: 'app-invited-person',
  templateUrl: './invited-person.page.html',
  styleUrls: ['./invited-person.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonBackButton,
    IonTitle,
    IonSearchbar,
    IonContent,
    IonList,
    IonListHeader,
    IonLabel,
    IonItem,
    IonAvatar,
    IonCheckbox,
    IonFooter,
    IonButton,
  ],
})
export class InvitedPersonPage implements OnInit {
  allMembers: MemberDetail[] = [];
  filteredMembers: MemberDetail[] = []; // La liste affichée et filtrée
  selectedMembers: number[] = [];

  constructor() {}

  ngOnInit() {
    this.allMembers = MOCK_MEMBERS_DATABASE;
    this.filteredMembers = [...this.allMembers]; // Au début, on affiche tout
  }

  handleSearch(event: any) {
    const searchTerm = event.target.value.toLowerCase();
    if (!searchTerm) {
      this.filteredMembers = [...this.allMembers];
      return;
    }

    this.filteredMembers = this.allMembers.filter(member => {
      return member.name.toLowerCase().includes(searchTerm);
    });
  }

  onMemberSelect(memberId: number, isSelected: boolean) {
    if (isSelected) {
      this.selectedMembers.push(memberId);
    } else {
      const index = this.selectedMembers.indexOf(memberId);
      if (index > -1) {
        this.selectedMembers.splice(index, 1);
      }
    }
  }

  createTontine() {
    console.log('Tontine créée avec les membres:', this.selectedMembers);
    // Ici, on ajouterait la logique pour sauvegarder la tontine
  }
}
