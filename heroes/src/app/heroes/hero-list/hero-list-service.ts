import { from, Observable, of } from "rxjs"; 
import { delay, concatMap } from "rxjs/operators"; 
import { Injectable } from '@angular/core'; 
import { Hero } from "../hero"; 

@Injectable() 
export class HeroService{ 
    mockHeroList: Array<Hero> = [
        {
            id : 1,
            name : "Pierre",
            isDisplayed : true
        },
        {
            id : 2,
            name : "Paul",
            isDisplayed : true
        },
        {
            id : 3,
            name : "Jacques",
            isDisplayed : true
        },
    ];

    getAllHeroes() : Observable<Array<Hero>> {
        return of(this.mockHeroList).pipe(delay(1000));
    };

    rotateAllHeroes(): Observable<Hero> {
        return from(this.mockHeroList).pipe(
            concatMap(item => of(item).pipe(delay(5000))
            )
        );
    }
}