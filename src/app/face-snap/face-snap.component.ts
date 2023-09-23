import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.models';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {

  @Input() facesnap!: FaceSnap;

  likeButton!: String;
  buttonCliced!: Boolean;


  ngOnInit(){
    this.likeButton = '🤍';
    this.buttonCliced = false;
  }

  onLike(){
    if(this.buttonCliced === false){
      this.facesnap.likes++;
      this.likeButton = '❤️';
      this.buttonCliced = true;

    }else{
      this.facesnap.likes--;
      this.likeButton ='🤍';
      this.buttonCliced = false;

    }
  }
}
