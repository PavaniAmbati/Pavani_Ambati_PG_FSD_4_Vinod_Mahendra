import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminusersService } from '../shared/adminusers.service';

@Component({
  selector: 'app-adminupdatepassword',
  templateUrl: './adminupdatepassword.component.html',
  styleUrls: ['./adminupdatepassword.component.css'],
  providers: [AdminusersService]
})
export class AdminupdatepasswordComponent implements OnInit {

  public adminuser: any = [];
  public adminusers: any = [];
  public localuser: any = [];
  public id!: string;
  @Input() users = { Newpassword: '', Repeatpassword: '' }
  errorMessage = 'Passwords does not match. Try again';
  Passwordnotmatch = false;
  username = this.actRoute.snapshot.params['Username'];

  constructor(
    public restApi: AdminusersService,
    public router: Router,
    public actRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.loadadminusers();
  }

  loadadminusers() {
    return this.restApi.getUsers().subscribe((data: {}) => {
      this.adminusers = data;
      console.log(this.adminusers);
    })

  }

  updatePassword(users: any) {

    if (users.Newpassword === users.Repeatpassword) {
      this.Passwordnotmatch = false;
      this.adminuser = { "Username": this.username, "Password": this.users.Repeatpassword }
      this.localuser = JSON.parse(localStorage.getItem('localUser')!);



      for (let i = 0; i < this.localuser.length; i++) {
        if (this.localuser[i].Username === this.username) {
          this.id = this.localuser[i].id;
          console.log(this.id);
         this.restApi.updateUser(this.id, this.adminuser).subscribe(data => {
            this.router.navigate(['/adminlogin'])
          }) 

        }

      }

    } else {
      this.Passwordnotmatch = true;
    }
  }

  logout() {
    localStorage.removeItem('localUser');
    this.router.navigate(['/adminlogin']);

  }

}







