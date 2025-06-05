import { User } from './../../model/user.model';
import { Component, OnInit } from "@angular/core";
import { UserService } from "../../services/user.service";

@Component({
  selector: "app-all-users",
  templateUrl: "./all-users.component.html",
  styleUrls: ["./all-users.component.css"],
})
export class AllUsersComponent implements OnInit {


  users:User[]=[]
  constructor(private UserService: UserService) {}

  ngOnInit(): void {
    this.getAllUser();
  }

  getAllUser() {
    this.UserService.getAllUser().subscribe(res=>{
      this.users=res;


    })
  }
  deleteUser(username:string){
    this.UserService.deleteUser(username).subscribe(res=>{
      if(res!=null){
        alert("deleted")
        this.getAllUser()
      }else{
        alert("Something went wrong")
      }
    })

  }




}
