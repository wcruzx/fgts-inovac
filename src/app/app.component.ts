import { Component } from '@angular/core';
import { Header } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';
import { FaqComponent } from './components/faq/faq.component';
import { TeamComponent } from './components/team/team.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [
    Header,
    HomeComponent,
    ServicesComponent,
    FaqComponent,
    TeamComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'fgts-inovac';
}
