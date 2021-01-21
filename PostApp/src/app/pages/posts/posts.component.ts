import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/Post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts:Post[]=[
    new Post(1,'Post 1','Ahmet bebek öğretiyor.'),
  new Post(2,'Ahmet bebeğin yaptıkları','Ahmet bebek Nili üzdü.'),
  new Post()
];

  constructor() { }

  ngOnInit(): void {
  }

}
