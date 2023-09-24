import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.models';
import { FaceSnapsService } from '../services/face-snap.service';

@Component({
  selector: 'app-snap-lists',
  templateUrl: './snap-lists.component.html',
  styleUrls: ['./snap-lists.component.scss']
})
export class SnapListsComponent implements OnInit {

  mysnaps!: FaceSnap[];

  constructor(private facesnapservices: FaceSnapsService){}

  ngOnInit() {
    this.mysnaps = this.facesnapservices.GetFacesnaps();
  }
}
