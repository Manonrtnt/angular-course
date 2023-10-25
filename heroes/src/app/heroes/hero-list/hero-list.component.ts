import { Component, OnInit, EventEmitter, OnDestroy } from '@angular/core';
import { Hero } from '../hero';
import { Subscription } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})

export class HeroListComponent implements OnInit, OnDestroy {
  hero: Hero = {
    id: 1,
    name: 'Windstorm',
    isDisplayed : false
  };

  myAsyncString: Promise<string> | undefined;
  currentDate: Date = new Date();

  nb: number = 0;

  mySubscribe: Subscription | undefined;
  emitter: EventEmitter<number> = new EventEmitter();
  count: number = 0;

  private _title: string = "I ♥ Angular"

  get title(): string {
    return this._title;
  }

  set title(newTitle: string) {
    this._title = newTitle;
  }

  heroArray: Array<Hero> = new Array<Hero>();

  ngOnInit(): void {
    this.heroArray.push(this.hero);
    this.heroArray.push(this.hero);

    this.myAsyncString = new Promise<string>(() => 'toto');

    if (!this.mySubscribe) {
      this.mySubscribe = this.emitter.subscribe(nb => {
        console.log(nb);
      })
    }

    this.profileForm.patchValue(this.data);
  }

  ngOnDestroy(): void {
    if (this.mySubscribe?.unsubscribe) {
      this.mySubscribe.unsubscribe();
    }
  }

  onButtonClicked(event: Event, nbToAdd: number, reset: boolean) {
    if (reset) {
      this.count = 0;
    } else {
      this.count += nbToAdd;
    }
  }

  async getRandomInt(): Promise<number> {
    return new Promise<number>((resolve,reject) => {
      const value = parseInt((Math.random() * 10).toFixed(0));

      if (value === 0){
        reject('Ne fonctionne pas pour 0.');
      }

      resolve(value);
    });
  }

  async uselessFunc() {
    try {
      this.nb = await this.getRandomInt();
      console.log('Vous avez' + (this.nb < 5 ? ' gagné' : ' perdu'));
      console.log(this.nb)
    } catch(error:any) {
      console.log('Erreur : ', error);
    }
  }

  data : {
    heroName: string|null, 
    city: string|null
  } = {
    heroName : "KK",
    city : "Moissac"
  };

  constructor(private fb: FormBuilder){ }

  profileForm = this.fb.group({
    heroName : [''],
    city : [''],
  })

  submitted: boolean = false;

  onSubmit(){
    //this.submitted = true;
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
    // this.data.city = this.profileForm.value.city ? this.profileForm.value.city : ""   
    // this.data.heroName = this.profileForm.value.heroName ? this.profileForm.value.heroName : ""  
    this.data = {...this.data, ...this.profileForm.value}
  }
}
