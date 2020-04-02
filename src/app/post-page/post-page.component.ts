import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PostsService } from '../shared/posts.service';
import { Observable } from 'rxjs';
import { Post } from '../shared/interfaces';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent implements OnInit {

  post$: Observable<Post>

  constructor(
    private route: ActivatedRoute,
    private poststService: PostsService
  ) {}

  ngOnInit(): void {
    this.post$ = this.route.paramMap.pipe(
      switchMap((params: Params)=> {
        const id = params.get('id');
        return this.poststService.getById(id)
      })
    )
  }

}
