import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TeamMember {
  id: number;
  name: string;
  position: string;
  image: string;
  whatsapp: string;
  facebook: string;
}

@Component({
  selector: 'app-team',
  imports: [CommonModule],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css',
})
export class TeamComponent {
  teamMembers: TeamMember[] = [
    {
      id: 1,
      name: 'Maria Helena',
      position: 'Consultora Financeira',
      image: 'assets/images/woman1.jpg',
      whatsapp: '5511999999999',
      facebook: 'facebook.com',
    },
    {
      id: 2,
      name: 'Renata Miranda',
      position: 'Consultora Financeira',
      image: 'assets/images/woman2.jpg',
      whatsapp: '5511999999999',
      facebook: 'facebook.com',
    },
    {
      id: 3,
      name: 'André Roberto',
      position: 'Consultor Financeira',
      image: 'assets/images/man.jpg',
      whatsapp: '5511999999999',
      facebook: 'facebook.com',
    },
  ];

  onImageError(event: any) {
    event.target.src = 'assets/images/team/placeholder.svg';
  }

  contactWhatsApp(phone: string, name: string) {
    const message = encodeURIComponent(
      `Olá ${name}! Gostaria de falar sobre os serviços de antecipação do FGTS.`
    );
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  }

  contactFacebook(facebook: string) {
    window.open(`https://facebook.com/${facebook}`, '_blank');
  }
}
