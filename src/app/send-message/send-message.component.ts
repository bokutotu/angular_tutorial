import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { PersonalMessageService } from '../personal-message.service';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

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
  id: number;

  form = this.fromBuilder.group({
    message:'Message',
  });

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.id = id;
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  onSubmit(): void {
    const { message }= this.form.value;
    console.log(message);
    this.personalMessage.sendMessage(this.id, message);
  }

}
