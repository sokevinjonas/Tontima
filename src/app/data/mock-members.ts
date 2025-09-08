// Fichier: src/app/data/mock-members.ts
// Ce fichier agit comme notre fausse base de données de membres.

export interface TontineSummary {
  name: string;
  amount: number;
}

export interface MemberDetail {
  id: number;
  name: string;
  countryCode: string;
  phone: string;
  avatar: string;
  idCardFrontUrl: string;
  idCardBackUrl: string;
  tontines: TontineSummary[];
}

export const MOCK_MEMBERS_DATABASE: MemberDetail[] = [
  { 
    id: 1, name: 'Adama Traoré', countryCode: '+226', phone: '70 01 02 03', avatar: 'https://i.pravatar.cc/150?u=adama',
    idCardFrontUrl: 'https://placehold.co/400', 
    idCardBackUrl: 'https://placehold.co/400',
    tontines: [ { name: 'Tontine Amis', amount: 15000 }, { name: 'Tontine Famille', amount: 25000 } ]
  },
  { 
    id: 2, name: 'Bintou Diallo', countryCode: '+226', phone: '71 04 05 06', avatar: 'https://i.pravatar.cc/150?u=bintou',
    idCardFrontUrl: 'https://placehold.co/400', 
    idCardBackUrl: 'https://placehold.co/400',
    tontines: [ { name: 'Tontine Business', amount: 50000 } ]
  },
   { 
    id: 3, name: 'Cheick Koné', countryCode: '+226', phone: '72 07 08 09', avatar: 'https://i.pravatar.cc/150?u=cheick',
    idCardFrontUrl: 'https://placehold.co/400', 
    idCardBackUrl: 'https://placehold.co/400',
    tontines: []
  },
];
