import { Injectable } from '@angular/core';
import {Auth, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: Auth) { }
  login(email:string,password:string){
    try{
      signInWithEmailAndPassword(this.auth,email,password)
    .then((res)=>console.log(res))
    }
    catch(err:any){
      console.log(err.message)
    }
  }
  loginWithPopup(){
    try{const provider= new GoogleAuthProvider();
    signInWithPopup(this.auth,provider).then((res)=>console.log(res))
    }
    catch(err){console.log(err)}
  }
  register(email:string,password:string){
    try{
      createUserWithEmailAndPassword(this.auth,email,password).then((res)=>console.log(res))
    }
    catch(err:any){
      console.log(err.message)
    }
  }
}
