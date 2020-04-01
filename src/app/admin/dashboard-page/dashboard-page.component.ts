import { Component, OnInit, OnDestroy } from '@angular/core';
import { PostsService } from 'src/app/shared/posts.service';
import { Post } from 'src/app/shared/interfaces';
import { Subscription } from 'rxjs';
import { AlerService } from '../shared/services/alert.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit, OnDestroy {
  posts: Post[] = [];
  postsSub: Subscription;
  deleteSub: Subscription;
  searchString = '';

  constructor(
    private postsService: PostsService,
    private alertService: AlerService
  ) { }


  remove(id: string){
    this.postsService.remove(id).subscribe(() => {
      this.posts = this.posts.filter( post => post.id !== id);
      this.alertService.warning('Successfully deleted')
    })
  }

  ngOnInit(): void {
    this.postsSub = this.postsService.getAll().subscribe(posts => {
      this.posts = posts;
    })
  }
  ngOnDestroy(){
    if (this.postsSub) {
      this.postsSub.unsubscribe();
    }

    if(this.deleteSub) {
      this.deleteSub.unsubscribe();
    }
  }



}
