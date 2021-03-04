import { Component, OnInit } from '@angular/core';
import { faIdCard } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  faIdCard = faIdCard;
  constructor() { }

  ngOnInit(): void {
  }
  creators = [
    {
      name: 'Abhijnan Pradhan',
      email: 'abhijnan.pradhan@ibm.com'
    },
    {
      name: 'Sufiyan Ali',
      email: 'sufiyan.ali@ibm.com'},
    {
      name: 'Sayan Tapadar',
      email: 'sayan.tapadar@ibm.com'
    }
  ]
}
