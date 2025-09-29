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
      name: 'Claudiani Inovac',
      position: 'Consultora Financeira',
      image: 'assets/images/claudiani.jpg',
      whatsapp: '5511999999999',
      facebook: 'profile.php?id=61580237822418',
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
