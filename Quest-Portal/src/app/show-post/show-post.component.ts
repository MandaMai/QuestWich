import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ShowPostService } from '../services/show-post.service';
import { CommonService } from '../services/common.service';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-show-post',
  templateUrl: './show-post.component.html',
  styleUrls: ['./show-post.component.scss'],
  providers: [ ShowPostService ]
})
export class ShowPostComponent implements OnInit {

  @ViewChild('closeBtn') closeBtn: ElementRef;
  public posts: any [];
  public post_to_delete;

  constructor(private showPostService: ShowPostService, private commonService: CommonService) { }

  ngOnInit() {
    this.getAllPost();

    this.commonService.postAdded_Observable.subscribe(res => {
      this.getAllPost();
    });
  }

  getAllPost() {
    this.showPostService.getAllPost().subscribe(result => {
      console.log('result is ', result);
      this.posts = result['data'];
    });
  }

  editPost(post: Post) {
    this.commonService.setPostToEdit(post);
    console.log('post is ', post);
  }

  setDelete(post: Post) {
    this.post_to_delete = post;
  }

  unsetDelete() { // user decides to cancel delete request
    this.post_to_delete = null;
  }

  deletePost() {
    console.log('post deleting is ', this.post_to_delete._id);
    this.showPostService.deletePost(this.post_to_delete._id).subscribe(res => {
      this.getAllPost();
      this.closeBtn.nativeElement.click();
    });
  }

}
