import { Component, OnInit, Input,} from '@angular/core';
import { FaceSnap } from '../models/face-snap.models';
import { FaceSnapsService } from '../services/face-snap.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {

  @Input() facesnap!: FaceSnap;

 
  constructor(
    private router : Router,
    private facesnapservicer : FaceSnapsService
    ){

  }


  ngOnInit(){

  }

  OnViewSnap(){
    this.router.navigateByUrl(`facesnaps/${this.facesnap.id}`);
  }


}
