import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { AuthService } from '../Service/auth.service';
import { Usuario } from '../model/Usuario';
import { UsuarioLogin } from '../model/UsuarioLogin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userLogin: UsuarioLogin = new UsuarioLogin
  UsuarioLogin: Usuario;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(){
    window.scroll(0,0)
    localStorage.clear()
  }

}
