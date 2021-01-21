import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/Post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
posts:Post[]=[];

id:string="";
  constructor(private postService:PostService) { }

  ngOnInit(): void {
    this.postService.getPosts().subscribe((res) => {
      this.posts=res;
    })
  }

postGetir():void{
  if(this.id==''){
    this.postService.getPosts().subscribe((res) => {
      this.posts=res;
    })
  }else{
    this.postService.getPost(Number(this.id)).subscribe((res) =>{
    this.posts=[res];
  })
  }
}

}
