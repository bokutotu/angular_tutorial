import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { PersonalMessageService } from '../personal-message.service';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Message } from '../message';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.css']
})
export class SendMessageComponent implements OnInit {

  constructor(
    private fromBuilder: FormBuilder,
    private personalMessage: PersonalMessageService,
    private heroService: HeroService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getHero();
  }

  hero: Hero
  
  message: Message;

  form = this.fromBuilder.group({
    message:'Message',
  });

  getMessagesById(id: number): void {
    this.personalMessage.getMessagesId(id)
      .subscribe(messages => this.message = messages);
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.getMessagesById(id);
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  onSubmit(): void {
    const { message }= this.form.value;
    console.log(message);
    this.personalMessage.updateMessagesId(this.message, message).subscribe();
  }

}
