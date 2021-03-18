export class UserInterface {

    userId: string = 'abij1234';
    name: string = 'Abhijnan Pradhan';
    email: string = 'abhijnan@abc.com';
    gender: string = 'male';
    phone: string = '1234567890';
    dateOfBirth: Date = new Date('1996-01-01');
    dateAdded: Date = new Date();
    password: string = '';
    role:string = 'ROLE_ADMIN';

    maker(userId: string, name: string, email: string, gender: string, phone: string, dateOfBirth: Date, dateAdded: Date, password: string) {
        this.userId = userId;
        this.name = name;
        this.email = email;
        this.gender = gender;
        this.phone = phone;
        this.dateOfBirth = dateOfBirth;
        this.dateAdded = dateAdded;
        this.password = password;
        this.role = 'ROLE_ADMIN';
    }

    getPassword():string{
        return this.password;
    }
    setPassword(str:string){
        this.password = str;
    }
    
}