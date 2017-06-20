import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Info } from './info';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class WeatherService {

  constructor(private http: Http) {

  }

  private _infosUrl = 'app/infors';

  private getInfos() {
    return this.http.get(this._infosUrl)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

  private handleError(error: Response) {
    // in a real world app, we may send the error to some remote logging infrastructure
    // instead of just logging it to the console
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

}