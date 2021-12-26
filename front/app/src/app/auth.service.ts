import { Injectable } from '@angular/core';
import { utilisateur } from './example';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  get_current_user(){
    // temporary just get example.ts
    // return utilisateur;
    return null
  }
}
