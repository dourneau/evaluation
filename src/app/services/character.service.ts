import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Character } from '../model/character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) { }

  create (character: Character): Observable<Character> {
    return this.http.post<Character>(`${environment.URL}/characters`, character);
  }

  getAll(): Observable<Character[]> {
    return this.http.get<Character[]>(`${environment.URL}/characters`);
  }

  delete(id: number): Observable<Character> {
    return this.http.delete<Character>(`${environment.URL}/characters/${id}`);
  }

}
