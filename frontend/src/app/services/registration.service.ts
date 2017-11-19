import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class RegistrationService {

  data : string = "123";
  private _url: string = "http://localhost:8080/api/food/lol";
  constructor(private _http: Http) { }
  getEmployees(){
      return this._http.get(this._url).map((response: Response) => response.json());
  }

}
