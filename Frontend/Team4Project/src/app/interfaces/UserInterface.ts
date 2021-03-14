export class UserInterface{
    public name:string='Abhijnan Pradhan';
    public username:string='Abhijnan12';
    private password: string = '';
    public dob:Date=new Date('1999-06-05 00:00:01');
    constructor(){
    //(...args: [name: string, username: string, password: string, dob: Date]) { 
        // this.name = args[0];
        // this.username = args[1];
        // this.password = args[2];
        // this.dob = args[3];
    }
    maker(name: string, username: string, password: string, dob: Date){
        this.name = name;
        this.username = username;
        this.password = password;
        this.dob = dob;
    }
    getPassword():string{
        return this.password;
    }
    setPassword(str:string){
        this.password = str;
    }
    
}