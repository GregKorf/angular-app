import { Component } from '@angular/core';
import { Person } from '../../shared/interfaces/person';
import { PersonTableComponent } from '../person-table/person-table.component';

@Component({
  selector: 'app-for-directive-example',
  standalone: true,
  imports: [PersonTableComponent],
  templateUrl: './for-directive-example.component.html',
  styleUrl: './for-directive-example.component.css'
})
export class ForDirectiveExampleComponent {
  users: Person[] = [
    {
      "givenName": "John",
      "surName": "Bailey",
      "email": "jmbailey@ymail.com",
      "age": 34,
      "address": "Naylor"
    },
    {
      "givenName": "Ashley",
      "surName": "Reed",
      "email": "ashley_reed@ymail.com",
      "age": 73,
      "address": "Berkeley"
    },
    {
      "givenName": "Lauren",
      "surName": "Rodriguez",
      "email": "lrodriguez@live.com",
      "age": 34,
      "address": "Harrisonburg"
    },
    {
      "givenName": "Gabriel",
      "surName": "Young",
      "email": "g.a.young@ymail.com",
      "age": 31,
      "address": "Saint Leo"
    },
    {
      "givenName": "Thomas",
      "surName": "Alexander",
      "email": "thomasalexander26@outlook.com",
      "age": 47,
      "address": "Eudora"
    },
    {
      "givenName": "Jose",
      "surName": "Gonzales",
      "email": "jose_gonzales@yahoo.com",
      "age": 74,
      "address": "Halifax"
    },
    {
      "givenName": "Victoria",
      "surName": "White",
      "email": "v_white@ymail.com",
      "age": 59,
      "address": "Forest Falls"
    },
    {
      "givenName": "Rachel",
      "surName": "Reed",
      "email": "r_r_reed@rocketmail.com",
      "age": 67,
      "address": "Happy"
    },
    {
      "givenName": "John",
      "surName": "Johnson",
      "email": "j_w@live.com",
      "age": 32,
      "address": "Supai"
    },
    {
      "givenName": "Alexandra",
      "surName": "White",
      "email": "alexandraannewhite@ymail.com",
      "age": 29,
      "address": "Pittsburgh"
    }
  ]
}
