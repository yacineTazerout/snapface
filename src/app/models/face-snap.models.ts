export class FaceSnap{
    constructor(
        public id:number,
        public title:String,
        public alt:String,
        public date: Date,
        public likes:number,
        public imgUrl: String,
        public location?: String
        ){

    }
}