import { Component, OnInit, OnDestroy } from '@angular/core';
import { PostsService } from 'src/app/shared/posts.service';
import { Post } from 'src/app/shared/interfaces';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit, OnDestroy {
  posts: Post[] = [];
  postsSub: Subscription

  constructor(private postsService: PostsService) { }


  remove(id: string){

  }

  ngOnInit(): void {
    this.postsSub = this.postsService.getAll().subscribe(posts => {
      this.posts = posts;
    })
  }
  ngOnDestroy(){
    if (this.postsSub){
      this.postsSub.unsubscribe();
    }
  }



}
