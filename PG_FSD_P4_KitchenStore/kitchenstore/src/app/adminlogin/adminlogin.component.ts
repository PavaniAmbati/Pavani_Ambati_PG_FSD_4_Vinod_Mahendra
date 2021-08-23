import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AdminusersService } from '../shared/adminusers.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css'],
  providers: [AdminusersService]
})
export class AdminloginComponent implements OnInit {

  public adminusers: any = [];
  public adminuser: any = [];
  public user: any = [];
  public id!: string;

  @Input() users = {Username: '', Password: ''}
  errorMessage = 'Invalid Credentials. Try again.';
  invalidLogin = false;

  constructor(
    public restApi: AdminusersService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.loadadminusers();
  }

  loadadminusers(){
    return this.restApi.getUsers().subscribe((data: {}) => {
      this.adminusers = data;
      console.log(this.adminusers);
    })

  }

  handleLogin(users: any) {
  
    console.log(this.adminusers.length)
    for (let i = 0; i < this.adminusers.length; i++) {
      if (this.adminusers[i].Username === users.Username && this.adminusers[i].Password === users.Password) {
        this.invalidLogin = false;
        this.id = this.adminusers[i].id
        console.log(this.id)
        this.adminuser = [{"id": this.id, "Username": users.Username, "Password": users.Password}]
        localStorage.setItem('localUser',JSON.stringify(this.adminuser));
        this.router.navigate(['/admincategoryitemlist']);
    } else {
      this.invalidLogin = true;
      }
    }
  }
//this.router.navigate(['/adminupdatepassword/' + users.Username]);
  updatePassword(users: any) {
    console.log(users.Username);
    console.log(users.Password);
 
    for (let i = 0; i < this.adminusers.length; i++) {
      if (this.adminusers[i].Username === users.Username && this.adminusers[i].Password === users.Password) {
        this.invalidLogin = false;
        this.id = this.adminusers[i].id
        console.log(this.id)
        this.adminuser = [{"id": this.id, "Username": users.Username, "Password": users.Password}]
        localStorage.setItem('localUser',JSON.stringify(this.adminuser));
        this.router.navigate(['/adminupdatepassword/' + users.Username]);
    } else {
      this.invalidLogin = true;
      }
    }
}

}
    


