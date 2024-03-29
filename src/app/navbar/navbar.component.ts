import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{
  isLogin:boolean=false
constructor(private _AuthService:AuthService){}
logOut(){
  this._AuthService.logout()
}
ngOnInit(): void {
  this._AuthService.user.subscribe(
    ()=>{
      if(this._AuthService.user.getValue()!=null){
        this.isLogin = true
      }
      else{
        this.isLogin = false
      }
    }
  )
}
}
