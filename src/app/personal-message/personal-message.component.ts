import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {PersonalMessageService} from '../personal-message.service';
import { HeroService } from '../hero.service';
import {Hero} from '../hero';
import { Message } from '../message';

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

  messages: Message[];

  hero: Hero;
  
  message: string[];

  ngOnInit(): void {
    this.getHero();
  }

  getMessages(): void {
    this.personalMessage.getMessages()
      .subscribe(
        messages => {
          this.messages = messages;
        });
    console.log(this.messages);
  }

  getMessagesById(id): void {
    this.personalMessage.getMessagesId(id)
      .subscribe(
        messages => this.messages = [messages]
      );
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    // this.getMessages(id);
    this.getMessagesById(id);
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

}
