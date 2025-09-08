import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonBackButton, IonButtons, IonAvatar, IonRow, IonGrid, IonButton, IonCol, IonIcon, IonCard, IonCardTitle, IonCardHeader, IonCardContent, IonLabel, IonListHeader, IonList, IonItem, IonNote } from '@ionic/angular/standalone';
import { MemberDetail, MOCK_MEMBERS_DATABASE } from 'src/app/data/mock-members';
import { ActivatedRoute } from '@angular/router';
import { call, logoWhatsapp, peopleCircleOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-show-members',
  templateUrl: './show-members.page.html',
  styleUrls: ['./show-members.page.scss'],
  standalone: true,
  imports: [IonNote, IonItem, IonList, IonListHeader, IonLabel, IonCardContent, IonCardHeader, IonCardTitle, IonCard, IonIcon, IonCol, IonButton, IonGrid, IonRow, IonAvatar, IonButtons, IonBackButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ShowMembersPage implements OnInit {

   // Cette variable ne contiendra que les données d'UN SEUL membre
  member: MemberDetail | undefined;

  constructor(private route: ActivatedRoute) {
    addIcons({ call, logoWhatsapp, peopleCircleOutline });
  }

  ngOnInit() {
    const memberId = this.route.snapshot.paramMap.get('id');
    if (memberId) {
      this.member = this.getMemberDetails(+memberId);
    }
  }

  getMemberDetails(id: number): MemberDetail | undefined {
    // Utilise la base de données importée pour trouver le bon membre
    return MOCK_MEMBERS_DATABASE.find(m => m.id === id);
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
