
export class CommentDataInterface{
    public comment: string = Math.random().toString(36).substring(7);;
    public likes:number = Math.floor((Math.random()*10)+1);
    // public comment: string = "";
    // public likes:number = 0 ;
    constructor(){}
}