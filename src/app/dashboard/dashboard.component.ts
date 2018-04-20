import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
   

  emailModel = {
    From: "",
    Message: ""
  }

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

   /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    console.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

// addHero (hero : Hero) : Observable<Hero> {
//   return this.http.post<Hero>(this.heroesUrl, hero, httpOptions).pipe(
//     tap((hero: Hero) => this.log(`added hero w/ id = ${hero.id}`)),
//     catchError(this.handleError<Hero>('addHero'))
//   )
// }

  onSubmit() : void {
    this.sendEmail();
  }

  sendEmail () : void {
    console.log("sendEmail called")
    const url = "http://localhost:8888/email";
    this.http.post(url, this.emailModel, httpOptions).subscribe(
      res => {
        const response = res;
    }
    )
  }

}
