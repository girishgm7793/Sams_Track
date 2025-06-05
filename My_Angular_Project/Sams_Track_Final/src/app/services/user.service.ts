import { HttpClient } from '@angular/common/http';
import { ReturnStatement } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  loginUser(loginRequest:any):Observable<any>{
    // http://localhost:8091/user/login-user
   return this.http.post('http://localhost:8091/user/login-user',loginRequest)
  }

  addUser(user: any): Observable<any> {
    //http://localhost:8091/user/register-user
  return this.http.post('http://localhost:8091/user/register-user', user,{responseType:'text'as'text'});
}
getAllUser():Observable<any>{
  //http://localhost:8091/user/get-all-user

  return this.http.get('http://localhost:8091/user/get-all-user')


}
deleteUser(username:string):Observable<any>{
  //http://localhost:8091/user/delete-user-by-username?username=ram

   return this.http.delete(`http://localhost:8091/user/delete-user-by-username?username=${username}`,{responseType:'text'as'text'})
}
getUserByUsername(username:string):Observable<any>{
  //http://localhost:8091/user/get-user-by-username/ram
   return this.http.get(`http://localhost:8091/user/get-user-by-username/${username}`)



}
updateUser(user:any):Observable<any>{
  //http://localhost:8091/user/update-user
 return this.http.put('http://localhost:8091/user/update-user',user)

}

}
