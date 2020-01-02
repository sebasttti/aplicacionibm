import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MainServiceService {

  getAllInfo(table: string) {

    // return 'Hola mundo bonito';
    return this.http.get(`${environment.url_api}/index/getallinfo?table=${table}`);
    // return this.http.get('https://swapi.co/api/people/1');
    // return this.http.get('https://platzi-store.herokuapp.com/products/');
  }

  getInfo(id, table) {
    return this.http.get(`${environment.url_api}/index/getinfo?id=${id}&table=${table}`);
  }

  constructor(
    private http: HttpClient
  ) { }
}
