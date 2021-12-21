import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Eleve } from '../classes/eleve';
import { Intervenant } from '../classes/intervenants';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.css']
})
export class HeaderBarComponent implements OnInit {
  connexion !: Eleve | Intervenant;
  auth_state : boolean = false;
  constructor(private authservice: AuthService) { }

  ngOnInit(): void {
    const auth = this.authservice.get_current_user()
    if(auth === null){
      this.auth_state = false;
    }else{
      this.auth_state = true;
      this.connexion = auth;
    }
  }
}
