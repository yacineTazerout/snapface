import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.models";

@Injectable({
    providedIn : 'root'
})
export class FaceSnapsService{
    facesnaps: FaceSnap[] = [
        new FaceSnap(
            0,
          'Angular1',
          'Angular logo',
          new Date(),
          0,
          'https://repository-images.githubusercontent.com/24195339/87018c00-694b-11e9-8b5f-c34826306d36',
        ),
        new FaceSnap(
            1,
          'Angular2',
          'Angular logo',
          new Date(),
          0,
          'https://repository-images.githubusercontent.com/24195339/87018c00-694b-11e9-8b5f-c34826306d36',
        ),
        new FaceSnap(
            2,
          'Angular3',
          'Angular logo',
          new Date(),
          0,
          'https://repository-images.githubusercontent.com/24195339/87018c00-694b-11e9-8b5f-c34826306d36',
        ),
      ]


    GetFacesnaps() : FaceSnap[]{
        return this.facesnaps;
    }

    GetFaceSnapById(id : number) : FaceSnap{
        const facesnap = this.facesnaps.find(facesnap => facesnap.id === id);
        if(!facesnap){
            throw new Error('snap not found !');

        }else{
            return facesnap;
                }
    }

    SnapFaceSnapsById(id:number, state: Boolean) : void{
        const snap = this.GetFaceSnapById(id);
        state === true ? snap.likes++ : snap.likes--;
    }

}