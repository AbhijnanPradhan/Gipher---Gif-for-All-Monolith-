export class UserInterface {

    userId: string = '';
    name: string = '';
    email: string = '';
    gender: string = '';
    phone: string = '';
    dateOfBirth: Date = new Date();
    dateAdded: Date = new Date();
    role:string = 'ROLE_ADMIN';

    maker(userId: string, name: string, email: string, gender: string, phone: string, dateOfBirth: Date, dateAdded: Date) {
        this.userId = userId;
        this.name = name;
        this.email = email;
        this.gender = gender;
        this.phone = phone;
        this.dateOfBirth = dateOfBirth;
        this.dateAdded = dateAdded;
        this.role = 'ROLE_ADMIN';
    }
    
}