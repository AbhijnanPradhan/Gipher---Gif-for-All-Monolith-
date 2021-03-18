
export class CommentDataInterface{
    public commentId='';
	// public comment: string =Math.random().toString(36).substring(2);
    // public likes:number = Math.floor((Math.random()*10)+1);
    public userID: string="";
	public gifID: string="";
	public comment: string="";
	public likes: number= 0;
	public likerIDs: Array<string> =[];
	public edited:boolean = false;
    constructor(){}
	
}