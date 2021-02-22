import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {PersonalMessageService} from '../personal-message.service';
import { HeroService } from '../hero.service';
import {Hero} from '../hero';

@Component({
  selector: 'app-personal-message',
  templateUrl: './personal-message.component.html',
  styleUrls: ['./personal-message.component.css']
})
export class PersonalMessageComponent implements OnInit {

  constructor(
    private personalMessage: PersonalMessageService,
    private route: ActivatedRoute,
    private heroService: HeroService,
  ) { }

  messages: string[];

  hero: Hero;
  id: number;
  
  message: string[];

  ngOnInit(): void {
    this.getHero();
  }

  getMessages(id): void {
    this.messages = this.personalMessage.getMessages(id);
    console.log(this.messages);
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.getMessages(id);
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

}
