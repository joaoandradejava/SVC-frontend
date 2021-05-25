import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.page.html',
  styleUrls: ['./tela-login.page.scss'],
})
export class TelaLoginPage implements OnInit {

  login:string
  password:string 
 
  constructor(public menuCtrl: MenuController) { 
    this.menuCtrl.enable(false);
  }

  ngOnInit() {
  }

  Logar(){
    
  }

}
