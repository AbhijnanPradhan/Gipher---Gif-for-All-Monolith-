export class UserInterface {

    userId: string = '';
    name: string = '';
    email: string = '';
    gender: string = '';
    phone: string = '';
    dateOfBirth: Date = new Date();
    dateAdded: Date = new Date();
    password: string = '';

    maker(userId: string, name: string, email: string, gender: string, phone: string, dateOfBirth: Date, dateAdded: Date, password: string) {
        this.userId = userId;
        this.name = name;
        this.email = email;
        this.gender = gender;
        this.phone = phone;
        this.dateOfBirth = dateOfBirth;
        this.dateAdded = dateAdded;
        this.password = password;
    }

    getPassword():string{
        return this.password;
    }
    setPassword(str:string){
        this.password = str;
    }
    
}