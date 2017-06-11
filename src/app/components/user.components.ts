import { Component } from '@angular/core';
import {PostsService} from '../services/posts.service';

@Component({
  moduleId:module.id,
  selector: 'user',
  templateUrl:'user.component.html' ,
  providers:[PostsService]
})
export class UserComponent  {
  name:string;
  email:string;
  address:address;
  hobbies:string[];
  showHobbies:boolean;
  posts:Post[];

    constructor(private postService:PostsService){
    this.name = 'Kanishk Sharma';
    this.email='kgdsharma@gmail.com';
    this.address={
    street: '300 Inwood Dr',
    apt:'APT 208',
    city:'Wheeling',
    state:'Illinois',
    zip:'60090'}
    this.hobbies=['Music','Movies','Sport'];

    this.postService.getPosts().subscribe(posts =>{
    this.posts=posts;
    });

}

  toggleHobbies(){
      if(this.showHobbies){
      this.showHobbies=false;
      }else{
        this.showHobbies=true;
      }

  }

  addHobby(hobby){
  this.hobbies.push(hobby);

  }

  deleteHobby(index){
  this.hobbies.splice(index);
  }


}
interface address{
  street:string;
  apt:string;
  city:string;
  state:string;
  zip:string;
}
interface Post{
    id:number;
    title:string;
    body:string;
}
