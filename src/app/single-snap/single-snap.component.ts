import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.models';
import { FaceSnapsService } from '../services/face-snap.service';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-single-snap',
  templateUrl: './single-snap.component.html',
  styleUrls: ['./single-snap.component.scss']
})
export class SingleSnapComponent implements OnInit {

  facesnap!: FaceSnap;

  likeButton!: String;
  buttonCliced!: Boolean;

  constructor(
    private route : ActivatedRoute ,
    private facesnapservicer : FaceSnapsService
    ){

  }


  ngOnInit(){
    this.likeButton = '🤍';
    const id = +this.route.snapshot.params['id'];
    this.facesnap = this.facesnapservicer.GetFaceSnapById(id);
  }

  onLike(){
    if(this.buttonCliced === false){
      this.facesnapservicer.SnapFaceSnapsById(this.facesnap.id,!this.buttonCliced);
      this.likeButton = '❤️';
      this.buttonCliced = true;

    }else{
      this.facesnapservicer.SnapFaceSnapsById(this.facesnap.id,!this.buttonCliced);
      this.likeButton ='🤍';
      this.buttonCliced = false;

    }
  }
}
