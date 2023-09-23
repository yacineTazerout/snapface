import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  mysnaps!: FaceSnap[];

  ngOnInit() {
    this.mysnaps = [
      new FaceSnap(
        'Angular1',
        'Angular logo',
        new Date(),
        0,
        'https://repository-images.githubusercontent.com/24195339/87018c00-694b-11e9-8b5f-c34826306d36',
      ),
      new FaceSnap(
        'Angular2',
        'Angular logo',
        new Date(),
        0,
        'https://repository-images.githubusercontent.com/24195339/87018c00-694b-11e9-8b5f-c34826306d36',
      ),
      new FaceSnap(
        'Angular3',
        'Angular logo',
        new Date(),
        0,
        'https://repository-images.githubusercontent.com/24195339/87018c00-694b-11e9-8b5f-c34826306d36',
      ),
    ]
  }
}
