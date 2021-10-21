import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { Posts } from '../../interfaces/postsModel'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

posts:Posts[]=[]

  constructor(private postsService:PostsService) { }

  getPosts(){
    this.postsService.getPosts().subscribe((res)=>{
      this.posts = res
      console.log(this.posts)
    },(err)=>{
      console.log(err)
    })
  }
  ngOnInit(): void {
    this.getPosts()
  }

}
